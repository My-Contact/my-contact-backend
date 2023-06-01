import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUserResponse } from "../../interfaces/users.interface";
import { userSchemaResponse } from "../../schemas/users.schemas";

const getUserService = async (id: number) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser: User | null = await userRepository.findOneBy({
    id: id,
  });

  const user: IUserResponse = userSchemaResponse.parse(findUser);

  return user;
};

export { getUserService };
