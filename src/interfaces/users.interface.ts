import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  listUsersSchemaResponse,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/users.schemas";

type IUserRequest = z.infer<typeof userSchemaRequest>;
type IUserResponse = z.infer<typeof userSchemaResponse>;
type IListUsersResponse = z.infer<typeof listUsersSchemaResponse>;
type IUserUpdate = DeepPartial<IUserRequest>;

export { IUserRequest, IUserResponse, IListUsersResponse, IUserUpdate };
