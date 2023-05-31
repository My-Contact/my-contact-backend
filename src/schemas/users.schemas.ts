import { z } from "zod";

const userSchema = z.object({
  name: z.string().max(50),
  email: z.string().email().max(50),
  phoneNumber: z.string(),
  password: z.string().min(6),
  imageUrl: z.string(),
});

const returnUserSchema = userSchema.extend({
  id: z.number(),
  name: z.string().max(50),
  email: z.string().email().max(50),
  phoneNumber: z.string(),
  imageUrl: z.string(),
  createdAt: z.date(),
  updatedAt: z.string(),
}) 

const arrayUserSchema = returnUserSchema.array();

const updateUserSchema = z.object({
  name: z.string().max(50),
  email: z.string().email().max(50),
  phoneNumber: z.string(),
  password: z.string().min(6),
  imageUrl: z.string(),
});

export { userSchema, returnUserSchema, arrayUserSchema, updateUserSchema };
