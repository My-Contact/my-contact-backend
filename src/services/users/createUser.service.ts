import { hashSync } from "bcryptjs";
import { IUser, IUserReturn } from "../../interfaces/users.interface";
import { prismaClient } from "../../server";

function exclude<User, Key extends keyof User>(
    user: User,
    keys: Key[]
): Omit<User, Key> {
    for (let key of keys) {
        delete user[key];
    }
    return user;
}

const createUserService = async (data: IUser)=> {
  const { password: passwordData, ...userData } = data;
  const hashedPassword: string = hashSync(passwordData as string, 10);

  const user = await prismaClient.user.create({
    data: {
      ...userData,
      password: hashedPassword
    }
  });

  const resultUser = exclude(user, ["password"]);

  return resultUser;
};

export { createUserService };
