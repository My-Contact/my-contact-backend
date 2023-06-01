import { Router } from "express";
import { createLoginController } from "../controllers/login.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDetails.middlewares";
import { createLoginSchema } from "../schemas/login.schema";

const loginRoute: Router = Router();

loginRoute.post(
  "",
  ensureDataIsValidMiddleware(createLoginSchema),
  createLoginController
);

export default loginRoute;
