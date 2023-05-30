import { z } from "zod";
import { Prisma } from '@prisma/client';
import {
  userSchema,
  returnUserSchema,
  arrayUserSchema,
} from "../schemas/users.schemas";

type IUser = z.infer<typeof userSchema>;
type IUserReturn = z.infer<typeof returnUserSchema>;
type IArrayUsers = z.infer<typeof arrayUserSchema>;

interface IUserUpdate extends Prisma.UserUpdateInput {}

export { IUser, IUserReturn, IArrayUsers, IUserUpdate };
