import { prismaClient } from "../../server";

const getUserService = async (id: string) => {
  const user = await prismaClient.user.findUnique({
    where: { id }
  });

  return user;
};

export { getUserService };
