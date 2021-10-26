import "dotenv/config";
import express, { json } from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { messagesRoutes } from "./routes/messages.routes";
import { authenticationRoutes } from "./routes/authentication.routes";
import { userRoutes } from "./routes/user.routes";

const app = express();

app.use(cors());

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`Usuário conectado no Socket ${socket.id}`);
});

app.use(json());
app.use(authenticationRoutes);
app.use("/messages", messagesRoutes);
app.use("/user", userRoutes);

export { serverHttp, io };
