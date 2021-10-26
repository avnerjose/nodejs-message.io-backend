import { Router } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";

const authenticationRoutes = Router();

authenticationRoutes.post(
  "/authenticate",
  new AuthenticateUserController().handle
);

authenticationRoutes.get("/github", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

authenticationRoutes.get("/signin/callback", (req, res) => {
  const { code } = req.query;

  return res.json({ code });
});

export { authenticationRoutes };
