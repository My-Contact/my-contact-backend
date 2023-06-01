import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import "express-async-errors";
import { Contact } from "../entities/contacts.entity";

const ensureContactIdExist = async (
  req: Request,
  resp: Response,
  next: NextFunction
): Promise<void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findContact: Contact | null = await contactRepository.findOneBy({
    id: parseInt(req.params.id),
  });

  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }

  return next();
};

export default ensureContactIdExist;
