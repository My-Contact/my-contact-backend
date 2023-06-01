import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUserRequest } from "../../interfaces/users.interface";
import { userSchemaResponse } from "../../schemas/users.schemas";

const createUserService = async (
  userData: IUserRequest
) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  await userRepository.save(user);

  const newUser = userSchemaResponse.parse(user);

  return newUser;
};

export { createUserService };