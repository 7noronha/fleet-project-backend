import { sign } from "jsonwebtoken";
import { IUserRequest } from "../../models/interface/user/UserRequest"; // Certifique-se de importar a interface correta

export class TokenService {
    static generateToken(user: IUserRequest): string {
        const token = sign(
            { matricula: user.matricula, senha: user.senha },
            process.env.JWT_SECRET as string, // Substitua com uma chave secreta segura
            { expiresIn: "1d" }
        );

        return token;
    }
}
