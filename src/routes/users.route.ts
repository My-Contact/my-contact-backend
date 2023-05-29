import { Router } from "express";

const usersRouter = Router();

usersRouter.post("/");
usersRouter.get("/");

usersRouter.get("/:id");
usersRouter.patch("/:id");
usersRouter.delete("/:id");

export { usersRouter };
