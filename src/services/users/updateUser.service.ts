import { AppError } from "../../errors";
import { IUserUpdate } from "../../interfaces/users.interface";
import { prismaClient } from "../../server";

const updateUserService = async (data: IUserUpdate, id: number) => {
  const isEmpty = Object.keys(data).length <= 0;

  if (isEmpty) {
    throw new AppError("Your request body is empty.", 400);
  }

  const user = await prismaClient.user.update({
    where: {
      id: id.toString(),
    },
    data: data,
  });

  return user;
};

export { updateUserService };