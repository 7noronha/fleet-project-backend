import { PrismaClient } from "./generated/clientMenu";
import { PrismaClient as PrismaClientFrota } from "./generated/clientFrota";

export const dbMenu = new PrismaClient();
export const dbFrota = new PrismaClientFrota();



