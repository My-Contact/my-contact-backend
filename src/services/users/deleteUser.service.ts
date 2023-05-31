import { AppError } from "../../errors";
import { prismaClient } from "../../server";

const deleteUserService = async (id) => {
  try {
    await prismaClient.user.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    throw new AppError("Unable to delete user");
  }
};

export { deleteUserService };
