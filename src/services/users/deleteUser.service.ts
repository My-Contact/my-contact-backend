import { AppError } from "../../errors";
import { prismaClient } from "../../server";

const deleteUserService = async (id: number) => {
  try {
    await prismaClient.user.delete({
      where: {
        id: id.toString()
      },
    });
  } catch (error) {
    throw new AppError("Unable to delete user");
  }
};

export { deleteUserService };
