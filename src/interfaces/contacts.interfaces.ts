import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  contactSchema,
  contactSchemaRequest,
  listContactsSchemaResponse,
} from "../schemas/contacts.schemas";

type IContact = z.infer<typeof contactSchema>;
type IContactRequest = z.infer<typeof contactSchemaRequest>;
type IContactResponse = z.infer<typeof contactSchema>;
type IListContactsResponse = z.infer<typeof listContactsSchemaResponse>;
type IContactsUpdateRequest = DeepPartial<IContactRequest>;

export {
  IContact,
  IContactRequest,
  IContactResponse,
  IListContactsResponse,
  IContactsUpdateRequest,
};
