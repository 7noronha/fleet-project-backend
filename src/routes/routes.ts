import multer from "multer";
import uploadConfig from "../config/multer";
import { Router, Request, Response } from "express";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";
import { CreateVeiculoController } from "../controllers/veiculos/CreateVeiculoController";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

router.get("/test", (req: Request, res: Response) => {
    return res.json({ ok: true });
});

//USUARIO
router.post("/criarusuario", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);

//VEICULO
router.post("/adicionarveiculo", isAuthenticated, upload.single("foto"), new CreateVeiculoController().handle);

export { router };
