import { Router } from "express";
import { CreateMessageController } from "../controllers/CreateMessageController";
import { GetLast3MessagesController } from "../controllers/GetLast3MessagesController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const messagesRoutes = Router();

messagesRoutes.post(
  "/",
  ensureAuthenticated,
  new CreateMessageController().handle
);

messagesRoutes.get("/last3", new GetLast3MessagesController().handle);

export { messagesRoutes };
