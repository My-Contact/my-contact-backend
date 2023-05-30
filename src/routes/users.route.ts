import { Router } from "express";
import { createUserController } from "../controllers/users.controllers";

const userRoutes = Router();

userRoutes.post("/", createUserController);
userRoutes.get("/");

userRoutes.get("/:id");
userRoutes.patch("/:id");
userRoutes.delete("/:id");

export { userRoutes };
