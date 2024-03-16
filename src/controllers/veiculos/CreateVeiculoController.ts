import { Request, Response } from "express";
import { CreateVeiculoService } from "../../services/veiculos/CreateVeiculoService";
import { IVeiculoRequest } from "../../models/interface/veiculos/VeiculoRequest";

export class CreateVeiculoController {
    async handle(req: Request, res: Response) {
        const { placa, marca, cor, detalhes, foto, km, modelo }: IVeiculoRequest = req.body;
        const createVeiculoService = new CreateVeiculoService();

        if (!req.file) {
            throw new Error("Falta foto do veículo");
        } else {
            const { originalname, filename: foto } = req.file;
            const veiculo = await createVeiculoService.execute({
                placa,
                marca,
                modelo,
                cor,
                detalhes,
                km,
                foto,
            });

            return res.json(veiculo);
        }
    }
}
