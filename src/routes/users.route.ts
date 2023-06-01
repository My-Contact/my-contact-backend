import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getByIdUserController,
  listAllUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDetails.middlewares";
import ensureUserEmailExist from "../middlewares/ensureEmailExist.middleware";
import ensureUserIdExist from "../middlewares/ensureUserIdExist.midddleware";
import ensureIsAutorzedUser from "../middlewares/ensureIsAutorzedUser.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schemas";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  ensureUserEmailExist,
  createUserController
);

userRoutes.get("", ensureTokenIsValidMiddleware, listAllUsersController);

userRoutes.get(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureUserIdExist,
  ensureIsAutorzedUser,
  getByIdUserController
);

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
