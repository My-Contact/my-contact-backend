import { prismaClient } from "../../server";

const getUserService = async (id: number) => {

  const user = await prismaClient.user.findUnique({
    where: { 
      id: id.toString() 
    }
  });

  return user;
};

export { getUserService };
