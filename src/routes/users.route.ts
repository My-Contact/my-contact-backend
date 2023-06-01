import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listAllUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDetails.middlewares";
import ensureUserEmailExist from "../middlewares/ensureEmailExist.middleware";
import ensureUserIdExist from "../middlewares/ensureIdExist.midddleware";
import ensureIsAutorzedUser from "../middlewares/ensureIsAutorzedUser.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import { userSchema, userSchemaUpdate } from "../schemas/users.schemas";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchema),
  ensureUserEmailExist,
  createUserController
);

userRoutes.get("", ensureTokenIsValidMiddleware, listAllUsersController);

userRoutes.get("/:id");

userRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureUserIdExist,
  ensureIsAutorzedUser,
  ensureDataIsValidMiddleware(userSchemaUpdate),
  ensureUserEmailExist,
  updateUserController
);

userRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureUserIdExist,
  deleteUserController
);

export { userRoutes };
