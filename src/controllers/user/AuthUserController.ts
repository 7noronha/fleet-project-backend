import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";
import { IAuthRequest } from "../../models/interface/user/AuthRequest";

export class AuthUserController {
    async handle(req: Request, res: Response) {
        const { matricula, senha }: IAuthRequest = req.body;
        const authUserService = new AuthUserService();
        const auth = await authUserService.execute({
            matricula,
            senha,
        });

        return res.json(auth);
    }
}
