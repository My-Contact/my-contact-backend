import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  listUsersSchemaResponse,
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/users.schemas";

type IUser = z.infer<typeof userSchema>;
type IUserRequest = z.infer<typeof userSchemaRequest>;
type IUserResponse = z.infer<typeof userSchemaResponse>;
type IListUsersResponse = z.infer<typeof listUsersSchemaResponse>;
type IUserUpdate = DeepPartial<IUserRequest>;

export { IUser, IUserRequest, IUserResponse, IListUsersResponse, IUserUpdate };
