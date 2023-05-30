import { IUser, IUserReturn } from "../../interfaces/users.interface";
import jwt from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            validatedBody: IUserReturn;
            validatedAnnouncement: IUser;
            validatedImage: any;
            validateAuth: jwt.JwtPayload;
        }
    }
}

export {};
