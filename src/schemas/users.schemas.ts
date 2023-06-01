import { z } from "zod";

const userSchemaRequest = z.object({
  name: z.string().max(95),
  email: z.string().email().max(45),
  password: z.string().min(4).max(20),
  phone: z.string().max(11),
  image: z.string().nullable(),
});

const userSchemaResponse = userSchemaRequest.extend({
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
})
.omit({ password: true });

const listUsersSchemaResponse = z.array(userSchemaResponse);

const userSchemaUpdate = z.object({
  name: z.string().max(95),
  email: z.string().email().max(45),
  password: z.string().min(4).max(20),
  phone: z.string().max(11),
  image: z.string().nullable(),
})
  .partial();

export {
  userSchemaRequest,
  userSchemaResponse,
  listUsersSchemaResponse,
  userSchemaUpdate,
};
