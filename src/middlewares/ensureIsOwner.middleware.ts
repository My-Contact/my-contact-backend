import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contacts.entity";

const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contactId: number = Number(req.params.id);
  const userId: number = Number(res.locals.userId);

  const contact = await contactsRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (contact?.user.id !== userId) {
    return res.status(403).json({
      message: "You don't have persimissions",
    });
  }

  next();
};

export { ensureIsOwnerMiddleware };
