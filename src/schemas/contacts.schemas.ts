import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  name: z.string().max(95),
  email: z.string().email().max(45),
  phone: z.string().max(11),
  createdAt: z.date().or(z.string()),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const contactSchemaUpdate = contactSchema
  .omit({
    id: true,
  })
  .partial();

const listContactsSchemaResponse = z.array(contactSchema);

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaUpdate,
  listContactsSchemaResponse,
};
