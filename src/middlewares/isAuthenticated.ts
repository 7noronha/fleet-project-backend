import { Request, Response, NextFunction } from "express";
import { Payload } from "../models/interface/user/Payload";
import { verify } from "jsonwebtoken";

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(400).end();
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub }: Payload = verify(token, process.env.JWT_SECRET) as unknown as Payload;
        req.usuario = sub;
        return next();
    } catch (error) {
        return res.send(401).end();
    }
}
