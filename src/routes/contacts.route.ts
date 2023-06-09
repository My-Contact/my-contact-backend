import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  getByIdContactController,
  listContactsController,
  updateContactController,
} from "../controllers/contacts.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import ensureContactIdExist from "../middlewares/ensureContactIdExist.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDetails.middlewares";
import ensureUserEmailExist from "../middlewares/ensureEmailExist.middleware";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from "../schemas/contacts.schemas";

const contactRoutes = Router();

contactRoutes.use(ensureAuthMiddleware);

contactRoutes.post(
  "",
  ensureDataIsValidMiddleware(contactSchemaRequest),
  ensureUserEmailExist,
  createContactController
);

contactRoutes.get("", listContactsController);

contactRoutes.get(
  "/:id",
  ensureContactIdExist,
  ensureIsOwnerMiddleware,
  getByIdContactController
);

contactRoutes.patch(
  "/:id",
  ensureContactIdExist,
  ensureIsOwnerMiddleware,
  ensureUserEmailExist,
  ensureDataIsValidMiddleware(contactSchemaUpdate),
  updateContactController
);

contactRoutes.delete(
  "/:id",
  ensureContactIdExist,
  ensureIsOwnerMiddleware,
  deleteContactController
);

export { contactRoutes };
