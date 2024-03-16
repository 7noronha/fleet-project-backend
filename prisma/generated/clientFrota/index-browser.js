
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.FRO_ABASTECIMENTOScalarFieldEnum = {
  ABA_SEQ: 'ABA_SEQ',
  ABA_VEI_SEQ: 'ABA_VEI_SEQ',
  ABA_VALOR: 'ABA_VALOR',
  ABA_DATA: 'ABA_DATA',
  USER_NAME: 'USER_NAME',
  MAQ_NAME: 'MAQ_NAME',
  DATA_HORA: 'DATA_HORA'
};

exports.Prisma.FRO_DOCUMENTOScalarFieldEnum = {
  DOC_SEQ: 'DOC_SEQ',
  DOC_VEI_SEQ: 'DOC_VEI_SEQ',
  DOC_TIPO: 'DOC_TIPO',
  DOC_NUMERO: 'DOC_NUMERO',
  DOC_VALIDADE: 'DOC_VALIDADE',
  DOC_VALOR: 'DOC_VALOR',
  USER_NAME: 'USER_NAME',
  MAQ_NAME: 'MAQ_NAME',
  DATA_HORA: 'DATA_HORA'
};

exports.Prisma.FRO_MANUTENCAOScalarFieldEnum = {
  MAN_SEQ: 'MAN_SEQ',
  MAN_VEI_SEQ: 'MAN_VEI_SEQ',
  MAN_DATA: 'MAN_DATA',
  MAN_DEFEITO: 'MAN_DEFEITO',
  MAN_SOLUCAO: 'MAN_SOLUCAO',
  MAN_VALOR: 'MAN_VALOR',
  USER_NAME: 'USER_NAME',
  MAQ_NAME: 'MAQ_NAME',
  DATA_HORA: 'DATA_HORA'
};

exports.Prisma.FRO_OCORRENCIAScalarFieldEnum = {
  OCO_SEQ: 'OCO_SEQ',
  OCO_VEI_SEQ: 'OCO_VEI_SEQ',
  OCO_DATA: 'OCO_DATA',
  OCO_DESCRICAO: 'OCO_DESCRICAO',
  OCO_SOLUCAO: 'OCO_SOLUCAO',
  USER_NAME: 'USER_NAME',
  MAQ_NAME: 'MAQ_NAME',
  DATA_HORA: 'DATA_HORA'
};

exports.Prisma.FRO_SERVICOScalarFieldEnum = {
  SER_SEQ: 'SER_SEQ',
  SER_DATA_INICIO: 'SER_DATA_INICIO',
  SER_DATA_FIM: 'SER_DATA_FIM',
  SER_DESTINO: 'SER_DESTINO',
  SER_MOTIVO: 'SER_MOTIVO',
  USER_NAME: 'USER_NAME',
  MAQ_NAME: 'MAQ_NAME',
  DATA_HORA: 'DATA_HORA'
};

exports.Prisma.FRO_VEICULOScalarFieldEnum = {
  VEI_SEQ: 'VEI_SEQ',
  VEI_PLACA: 'VEI_PLACA',
  VEI_MARCA: 'VEI_MARCA',
  VEI_MODELO: 'VEI_MODELO',
  VEI_COR: 'VEI_COR',
  VEI_FOTO: 'VEI_FOTO',
  VEI_DETALHES: 'VEI_DETALHES',
  VEI_KM: 'VEI_KM',
  USER_NAME: 'USER_NAME',
  MAQ_NAME: 'MAQ_NAME',
  DATA_HORA: 'DATA_HORA'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  FRO_ABASTECIMENTO: 'FRO_ABASTECIMENTO',
  FRO_DOCUMENTO: 'FRO_DOCUMENTO',
  FRO_MANUTENCAO: 'FRO_MANUTENCAO',
  FRO_OCORRENCIA: 'FRO_OCORRENCIA',
  FRO_SERVICO: 'FRO_SERVICO',
  FRO_VEICULO: 'FRO_VEICULO'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
