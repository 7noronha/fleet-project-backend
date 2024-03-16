import { hash } from "bcryptjs";
import { IUserRequest } from "../../models/interface/user/UserRequest";
import { dbMenu } from "../../../prisma";

export class CreateUserService {
    async execute({ nome, matricula, depto, senha }: IUserRequest) {
        if (!nome) {
            throw new Error("Nome não pode estar vazio!");
        }
        if (!matricula) {
            throw new Error("Matrícula não pode estar vazio!");
        }
        if (!depto) {
            throw new Error("Departamento não pode estar vazio!");
        }
        if (!senha) {
            throw new Error("Senha não pode estar vazio!");
        }

        const usuarioExiste = await dbMenu.tAB_002_USUARIO_ACESSO.findFirst({
            where: {
                UserCod: matricula,
            },
        });

        if (usuarioExiste) {
            throw new Error("Usuário já existe!");
        }

        const senhaHash = await hash(senha, 8);

        const usuario = dbMenu.tAB_002_USUARIO_ACESSO.create({
            data: {
                USUARIO: nome,
                UserCod: matricula,
                DEPTO: depto,
                SENHA: senhaHash,
            },
            select: {
                UserCod: true,
                USUARIO: true,
            },
        });

        return usuario;
    }
}
