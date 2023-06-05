import { Request, Response } from "express";
import { ILoginRequest } from "../interfaces/login";
import createLoginService from "../services/login/createLogin.service";

const createLoginController = async (req: Request, res: Response): Promise<Response> => {
    const loginData: ILoginRequest = req.body;
  
    const userAuth: object = await createLoginService(loginData);
  
    return res.json({ userAuth: userAuth });
  };
  
  export { createLoginController };