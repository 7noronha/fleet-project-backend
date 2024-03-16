import { dbFrota } from "../../../prisma";
import { IVeiculoRequest } from "../../models/interface/veiculos/VeiculoRequest";

export class CreateVeiculoService {
    async execute({ placa, marca, modelo, cor, km, foto, detalhes }: IVeiculoRequest) {
        const veiculo = await dbFrota.fRO_VEICULO.create({
            data: {
                VEI_PLACA: placa,
                VEI_MARCA: marca,
                VEI_MODELO: modelo,
                VEI_COR: cor,
                VEI_KM: +km,
                VEI_DETALHES: detalhes,
                VEI_FOTO: foto,
            },
        });

        return veiculo;
    }
}
