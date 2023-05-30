import { z } from "zod";

const contactSchema = z.object({
  name: z.string().max(50),
  email: z.string().email().max(50),
  phone_number: z.string(),
  image: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const returnContactSchema = contactSchema.extend({
  id: z.number(),
  admin: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const arrayContactSchema = returnContactSchema.array();

const updateContactSchema = z.object({
  name: z.string().max(50),
  email: z.string().email().max(50),
  phone_number: z.string(),
  image: z.string(),
});

export {
  contactSchema,
  returnContactSchema,
  arrayContactSchema,
  updateContactSchema,
};
