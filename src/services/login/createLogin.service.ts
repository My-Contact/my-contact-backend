import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import "dotenv/config";
import { Repository } from "typeorm";
import "express-async-errors";
import { User } from "../../entities/users.entity";
import { ILoginRequest } from "../../interfaces/login";

const createLoginService = async (
  loginData: ILoginRequest
) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: loginData.email,
  });

  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  const passwordMatch: boolean = await compare(
    loginData.password,
    user.password
  );

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 403);
  }

  const token: string = jwt.sign(
    {
      name: user.name,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: process.env.EXPIRES_IN!,
      subject: String(user.id),
    }
  );

  return { token, userId: String(user.id) };
};

export default createLoginService;
