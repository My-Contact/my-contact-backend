import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUserResponse, IUserUpdate } from "../../interfaces/users.interface";
import { userSchemaUpdate } from "../../schemas/users.schemas";

const updateUserService = async (newUserData: IUserUpdate, id: number) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepository.findOneBy({
    id: id,
  });

  const user: User = userRepository.create({
    ...oldUserData,
    ...newUserData,
  });

  await userRepository.save(user);

  const updatedUser = userSchemaUpdate.parse(user);

  return updatedUser;
};

export { updateUserService };
