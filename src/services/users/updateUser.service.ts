import { AppError } from "../../errors";
import { IUserUpdate } from "../../interfaces/users.interface";
import { prismaClient } from "../../server";

const updateUserService = async (id: string, data: IUserUpdate) => {
  const isEmpty = Object.keys(data).length <= 0;

  if (isEmpty) {
    throw new AppError("Your request body is empty.", 400);
  }

  const user = await prismaClient.user.update({
    where: {
      id: id,
    },
    data: data,
  });

  return user;
};

export { updateUserService };