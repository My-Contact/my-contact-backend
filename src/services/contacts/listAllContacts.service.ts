import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors";
import { IListContactsResponse } from "../../interfaces/contacts.interfaces";
import { listContactsSchemaResponse } from "../../schemas/contacts.schemas";

const listContactsService = async (
  userId: number
): Promise<IListContactsResponse> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await usersRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 401);
  }
  const contacts: Contact[] = await contactsRepository.find({
    where: {
      user: {
        id: userId
      }
    },
  });
  
  return listContactsSchemaResponse.parse(contacts);
};

export { listContactsService };
