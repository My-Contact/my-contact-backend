import { Request, Response } from "express";
import { IUser } from "../interfaces/users.interface";
import { createUserService } from "../services/users/createUser.service";
import { getUserService } from "../services/users/getUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { updateUserService } from "../services/users/updateUser.service";

const getUserController = async (req: Request, res: Response) => {
  const userId= req.params.sub;
  const data = await getUserService(userId);
  return res.status(200).json(data);
};

const createUserController = async (req: Request, res: Response) => {
  const payload: IUser = req.body;
  const data = await createUserService(payload);
  return res.status(201).json(data);
};

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteUserService(id);
  return res.status(204).json({});
};

const updateUserController = async (req: Request, res: Response) => {
  const { body, params } = req;
  const data = await updateUserService(params.id, body);
  return res.status(204).json(data);
};

export {
  createUserController,
  getUserController,
  deleteUserController,
  updateUserController,
};
