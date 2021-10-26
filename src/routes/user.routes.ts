import { Router } from "express";
import { UserProfileController } from "../controllers/UserProfileController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const userRoutes = Router();

userRoutes.get(
  "/profile",
  ensureAuthenticated,
  new UserProfileController().handle
);

export { userRoutes };
