import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors";
import { IContactResponse, IContactsUpdateRequest } from "../../interfaces/contacts.interfaces";
import { contactSchema } from "../../schemas/contacts.schemas";

const updateContactService = async (
  data: IContactsUpdateRequest,
  contactId: number
): Promise<IContactResponse> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldContact: Contact | null = await contactsRepository.findOneBy({
    id: contactId,
  });

  const newContactData = contactsRepository.create({
    ...oldContact,
    ...data,
  });

  await contactsRepository.save(newContactData);

  return contactSchema.parse(newContactData);
};

export { updateContactService };
