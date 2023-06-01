import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors";

const deleteContactService = async (contactId: number) => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactsRepository.findOneBy({
    id: contactId,
  });

  await contactsRepository.remove(contact!);
};

export { deleteContactService };
