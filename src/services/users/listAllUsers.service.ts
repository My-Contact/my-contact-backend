import { prismaClient } from "../../server";

const listAllUsersService = async () => {
  const users = await prismaClient.user.findMany();
  return users;
};

export { listAllUsersService };