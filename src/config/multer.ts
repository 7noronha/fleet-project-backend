import crypto from "crypto";
import multer from "multer";
import { extname, resolve } from "path";

export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, "..", "..", folder),
                filename: (request, file, callback) => {
                    const arquivoHash = crypto.randomBytes(8).toString("hex");
                    const arquivo = `${arquivoHash}`;

                    return callback(null, arquivo);
                },
            }),
        };
    },
};
