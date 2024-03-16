import { dbMenu } from "../../../prisma";
import { IAuthRequest } from "../../models/interface/user/AuthRequest";
import { sign } from "jsonwebtoken";
import crypto from "crypto";

export class AuthUserService {
    async execute({ matricula, senha }: IAuthRequest) {
        const user = await dbMenu.tAB_002_USUARIO_ACESSO.findFirst({
            where: {
                UserCod: matricula,
            },
        });

        if (!user) {
            throw new Error("Usuário não localizado!");
        }

        const hash = crypto.createHash("md5").update(senha).digest("hex").toUpperCase();

        if (hash != user.SENHA) {
            throw new Error("Usuário ou senha incorretos!");
        }

        const token = sign(
            {
                nome: user?.USUARIO,
            },
            process.env.JWT_SECRET as string,
            {
                subject: user?.USUARIO,
                expiresIn: "1d",
            } as any
        );

        return {
            matricula: user?.UserCod,
            usuario: user?.USUARIO,
            token: token,
        };
    }
}
