import { Request, Response } from "express";
import { IUser, IUserReturn } from "../interfaces/users.interface";
import { createUserService } from "../services/users/createUser.service";
import { getUserService } from "../services/users/getUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { listAllUsersService } from "../services/users/listAllUsers.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(newUser);
};

const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await listAllUsersService();

  return res.status(200).json(users);
};

const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = Number(req.params.id);

  const user = await getUserService(userId);

  return res.json(user);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: IUser = req.body;
  const userId: number = Number(req.params.id);

  const updatedUser = await updateUserService(userData, userId);

  return res.status(200).json(updatedUser);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteUserService(Number(req.params.id));

  return res.status(204).json();
};

export {
  createUserController,
  listUsersController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
};
