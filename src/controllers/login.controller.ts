import { Request, Response } from "express";
import { ILoginRequest } from "../interfaces/login";
import createLoginService from "../services/login/createLogin.service";

const createLoginController = async (req: Request, res: Response): Promise<Response> => {
    const loginData: ILoginRequest = req.body;
  
    const token: string = await createLoginService(loginData);
  console.log(token);
  
    return res.json({ token: token });
  };
  
  export { createLoginController };