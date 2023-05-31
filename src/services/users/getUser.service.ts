import { prismaClient } from "../../server";

const getUserService = async (id) => {
  const user = await prismaClient.user.findUnique({
    where: { id }
  });

  return user;
};

export { getUserService };
