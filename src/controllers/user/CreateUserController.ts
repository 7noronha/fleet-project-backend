import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
import { IUserRequest } from "../../models/interface/user/UserRequest";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { nome, matricula, senha, depto }: IUserRequest = req.body;
        const createUserServico = new CreateUserService();
        const usuario = await createUserServico.execute({
            nome,
            matricula,
            senha,
            depto,
        });

        return res.json(usuario);
    }
}
