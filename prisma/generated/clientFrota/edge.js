
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\INFO\\Desktop\\Noronha\\Estudos\\fleet-project\\back-end\\prisma\\generated\\clientFrota",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "multiSchema"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.10.2",
  "engineVersion": "5a9203d0590c951969e85a7d07215503f4672eb9",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlserver",
  "postinstall": true,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"./generated/clientFrota\"\n  previewFeatures = [\"multiSchema\"]\n}\n\ndatasource db {\n  provider = \"sqlserver\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel FRO_ABASTECIMENTO {\n  ABA_SEQ     Int       @id(map: \"PK_FRO_ABASTECIMENTO\") @default(autoincrement())\n  ABA_VEI_SEQ Int?\n  ABA_VALOR   Float?    @db.Money\n  ABA_DATA    DateTime? @db.DateTime\n  USER_NAME   String?   @db.VarChar(20)\n  MAQ_NAME    String?   @db.VarChar(20)\n  DATA_HORA   DateTime? @db.DateTime\n}\n\nmodel FRO_DOCUMENTO {\n  DOC_SEQ      Int       @id(map: \"PK_FRO_DOCUMENTO\") @default(autoincrement())\n  DOC_VEI_SEQ  Int\n  DOC_TIPO     Int?\n  DOC_NUMERO   String?   @db.VarChar(255)\n  DOC_VALIDADE DateTime? @db.DateTime\n  DOC_VALOR    Float?    @db.Money\n  USER_NAME    String?   @db.VarChar(20)\n  MAQ_NAME     String?   @db.VarChar(20)\n  DATA_HORA    DateTime? @db.DateTime\n}\n\nmodel FRO_MANUTENCAO {\n  MAN_SEQ     Int       @id(map: \"PK_FRO_MANUTENCAO\") @default(autoincrement())\n  MAN_VEI_SEQ Int\n  MAN_DATA    DateTime? @db.DateTime\n  MAN_DEFEITO String?   @db.VarChar(255)\n  MAN_SOLUCAO String?   @db.VarChar(255)\n  MAN_VALOR   Float?    @db.Money\n  USER_NAME   String?   @db.VarChar(20)\n  MAQ_NAME    String?   @db.VarChar(20)\n  DATA_HORA   DateTime? @db.DateTime\n}\n\nmodel FRO_OCORRENCIA {\n  OCO_SEQ       Int       @id(map: \"PK_FRO_OCORRENCIA\") @default(autoincrement())\n  OCO_VEI_SEQ   Int\n  OCO_DATA      DateTime? @db.DateTime\n  OCO_DESCRICAO String?   @db.VarChar(255)\n  OCO_SOLUCAO   String?   @db.VarChar(255)\n  USER_NAME     String?   @db.VarChar(20)\n  MAQ_NAME      String?   @db.VarChar(20)\n  DATA_HORA     DateTime? @db.DateTime\n}\n\nmodel FRO_SERVICO {\n  SER_SEQ         Int       @id(map: \"PK_FRO_SERVICO\") @default(autoincrement())\n  SER_DATA_INICIO DateTime? @db.DateTime\n  SER_DATA_FIM    DateTime? @db.DateTime\n  SER_DESTINO     String?   @db.VarChar(255)\n  SER_MOTIVO      String?   @db.VarChar(255)\n  USER_NAME       String?   @db.VarChar(20)\n  MAQ_NAME        String?   @db.VarChar(20)\n  DATA_HORA       DateTime? @db.DateTime\n}\n\nmodel FRO_VEICULO {\n  VEI_SEQ      Int       @id(map: \"PK_FRO_VEICULO\") @default(autoincrement())\n  VEI_PLACA    String?   @db.VarChar(20)\n  VEI_MARCA    String?   @db.VarChar(50)\n  VEI_MODELO   String?   @db.VarChar(50)\n  VEI_COR      String?   @db.VarChar(50)\n  VEI_FOTO     String?   @db.VarChar(255)\n  VEI_DETALHES String?   @db.VarChar(255)\n  VEI_KM       Int?\n  USER_NAME    String?   @db.VarChar(20)\n  MAQ_NAME     String?   @db.VarChar(20)\n  DATA_HORA    DateTime? @db.DateTime\n}\n",
  "inlineSchemaHash": "0a77e4d5a9eac7bfcf544dc7aa61a7af991dcd86d7b9bba45fe7764e00e6d1d2",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"FRO_ABASTECIMENTO\":{\"dbName\":null,\"fields\":[{\"name\":\"ABA_SEQ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABA_VEI_SEQ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABA_VALOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABA_DATA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"USER_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAQ_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FRO_DOCUMENTO\":{\"dbName\":null,\"fields\":[{\"name\":\"DOC_SEQ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DOC_VEI_SEQ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DOC_TIPO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DOC_NUMERO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DOC_VALIDADE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DOC_VALOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"USER_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAQ_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FRO_MANUTENCAO\":{\"dbName\":null,\"fields\":[{\"name\":\"MAN_SEQ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAN_VEI_SEQ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAN_DATA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAN_DEFEITO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAN_SOLUCAO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAN_VALOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"USER_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAQ_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FRO_OCORRENCIA\":{\"dbName\":null,\"fields\":[{\"name\":\"OCO_SEQ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OCO_VEI_SEQ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OCO_DATA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OCO_DESCRICAO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OCO_SOLUCAO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"USER_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAQ_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FRO_SERVICO\":{\"dbName\":null,\"fields\":[{\"name\":\"SER_SEQ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SER_DATA_INICIO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SER_DATA_FIM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SER_DESTINO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SER_MOTIVO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"USER_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAQ_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FRO_VEICULO\":{\"dbName\":null,\"fields\":[{\"name\":\"VEI_SEQ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VEI_PLACA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VEI_MARCA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VEI_MODELO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VEI_COR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VEI_FOTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VEI_DETALHES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VEI_KM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"USER_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAQ_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_HORA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

