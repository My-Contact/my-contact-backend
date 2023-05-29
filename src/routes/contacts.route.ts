import { Router } from "express";
const contactRouter = Router();

contactRouter.post("/");
contactRouter.get("/");

contactRouter.get("/users/:id");

contactRouter.get("/:id");
contactRouter.patch("/:id");
contactRouter.delete("/:id");

export { contactRouter };
