import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { IContactResponse } from "../../interfaces/contacts.interfaces";
import { userSchemaResponse } from "../../schemas/users.schemas";

const getContactService = async (id: number) => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

  const findContact: Contact | null = await contactRepository.findOneBy({
    id: id,
  });

  const user: IContactResponse = userSchemaResponse.parse(findContact);

  return user;
};

export { getContactService };
