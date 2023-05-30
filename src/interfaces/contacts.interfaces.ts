import { z } from "zod";
import {
  contactSchema,
  returnContactSchema,
  arrayContactSchema,
} from "../schemas/contacts.schemas";

type IContact = z.infer<typeof contactSchema>;
type IContactReturn = z.infer<typeof returnContactSchema>;
type IArrayContacts = z.infer<typeof arrayContactSchema>;
// type IContactUpdate = DeepPartial<IContact>;

export { IContact, IContactReturn, IArrayContacts };
