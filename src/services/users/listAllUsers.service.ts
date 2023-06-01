import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { IListUsersResponse } from "../../interfaces/users.interface";
import { listUsersSchemaResponse } from "../../schemas/users.schemas";

const listAllUsersService = async () => {
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const listUsers: Array<User> = await usersRepository.find();

  const users: IListUsersResponse = listUsersSchemaResponse.parse(listUsers);

  return users;
};

export { listAllUsersService };
