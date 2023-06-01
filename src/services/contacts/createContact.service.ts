import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors";
import { IContactRequest, IContactResponse } from "../../interfaces/contacts.interfaces";
import { contactSchema } from "../../schemas/contacts.schemas";

const createContactService = async (data: IContactRequest, userId: number): Promise<IContactResponse> => {
  const contactsRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await usersRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 401);
  }

  const contact: Contact = contactsRepository.create({
    ...data,
    user,
  });
  await contactsRepository.save(contact);

  return contactSchema.parse(contact);
};

export { createContactService };
