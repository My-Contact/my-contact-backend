import { Request, Response } from "express";
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

const listAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await listAllUsersService();

  return res.status(200).json(users);
};

const getByIdUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);

  const user = await getUserService(userId);

  return res.json(user);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData = req.body;
  const userId = parseInt(req.params.id);

  const updatedUser = await updateUserService(userData, userId);

  return res.status(200).json(updatedUser);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = parseInt(req.params.id);

  await deleteUserService(userId);

  return res.status(204).json();
};

export {
  createUserController,
  listAllUsersController,
  getByIdUserController,
  updateUserController,
  deleteUserController,
};
