
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model FRO_ABASTECIMENTO
 * 
 */
export type FRO_ABASTECIMENTO = $Result.DefaultSelection<Prisma.$FRO_ABASTECIMENTOPayload>
/**
 * Model FRO_DOCUMENTO
 * 
 */
export type FRO_DOCUMENTO = $Result.DefaultSelection<Prisma.$FRO_DOCUMENTOPayload>
/**
 * Model FRO_MANUTENCAO
 * 
 */
export type FRO_MANUTENCAO = $Result.DefaultSelection<Prisma.$FRO_MANUTENCAOPayload>
/**
 * Model FRO_OCORRENCIA
 * 
 */
export type FRO_OCORRENCIA = $Result.DefaultSelection<Prisma.$FRO_OCORRENCIAPayload>
/**
 * Model FRO_SERVICO
 * 
 */
export type FRO_SERVICO = $Result.DefaultSelection<Prisma.$FRO_SERVICOPayload>
/**
 * Model FRO_VEICULO
 * 
 */
export type FRO_VEICULO = $Result.DefaultSelection<Prisma.$FRO_VEICULOPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FRO_ABASTECIMENTOS
 * const fRO_ABASTECIMENTOS = await prisma.fRO_ABASTECIMENTO.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more FRO_ABASTECIMENTOS
   * const fRO_ABASTECIMENTOS = await prisma.fRO_ABASTECIMENTO.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.fRO_ABASTECIMENTO`: Exposes CRUD operations for the **FRO_ABASTECIMENTO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FRO_ABASTECIMENTOS
    * const fRO_ABASTECIMENTOS = await prisma.fRO_ABASTECIMENTO.findMany()
    * ```
    */
  get fRO_ABASTECIMENTO(): Prisma.FRO_ABASTECIMENTODelegate<ExtArgs>;

  /**
   * `prisma.fRO_DOCUMENTO`: Exposes CRUD operations for the **FRO_DOCUMENTO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FRO_DOCUMENTOS
    * const fRO_DOCUMENTOS = await prisma.fRO_DOCUMENTO.findMany()
    * ```
    */
  get fRO_DOCUMENTO(): Prisma.FRO_DOCUMENTODelegate<ExtArgs>;

  /**
   * `prisma.fRO_MANUTENCAO`: Exposes CRUD operations for the **FRO_MANUTENCAO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FRO_MANUTENCAOS
    * const fRO_MANUTENCAOS = await prisma.fRO_MANUTENCAO.findMany()
    * ```
    */
  get fRO_MANUTENCAO(): Prisma.FRO_MANUTENCAODelegate<ExtArgs>;

  /**
   * `prisma.fRO_OCORRENCIA`: Exposes CRUD operations for the **FRO_OCORRENCIA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FRO_OCORRENCIAS
    * const fRO_OCORRENCIAS = await prisma.fRO_OCORRENCIA.findMany()
    * ```
    */
  get fRO_OCORRENCIA(): Prisma.FRO_OCORRENCIADelegate<ExtArgs>;

  /**
   * `prisma.fRO_SERVICO`: Exposes CRUD operations for the **FRO_SERVICO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FRO_SERVICOS
    * const fRO_SERVICOS = await prisma.fRO_SERVICO.findMany()
    * ```
    */
  get fRO_SERVICO(): Prisma.FRO_SERVICODelegate<ExtArgs>;

  /**
   * `prisma.fRO_VEICULO`: Exposes CRUD operations for the **FRO_VEICULO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FRO_VEICULOS
    * const fRO_VEICULOS = await prisma.fRO_VEICULO.findMany()
    * ```
    */
  get fRO_VEICULO(): Prisma.FRO_VEICULODelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    FRO_ABASTECIMENTO: 'FRO_ABASTECIMENTO',
    FRO_DOCUMENTO: 'FRO_DOCUMENTO',
    FRO_MANUTENCAO: 'FRO_MANUTENCAO',
    FRO_OCORRENCIA: 'FRO_OCORRENCIA',
    FRO_SERVICO: 'FRO_SERVICO',
    FRO_VEICULO: 'FRO_VEICULO'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'fRO_ABASTECIMENTO' | 'fRO_DOCUMENTO' | 'fRO_MANUTENCAO' | 'fRO_OCORRENCIA' | 'fRO_SERVICO' | 'fRO_VEICULO'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      FRO_ABASTECIMENTO: {
        payload: Prisma.$FRO_ABASTECIMENTOPayload<ExtArgs>
        fields: Prisma.FRO_ABASTECIMENTOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FRO_ABASTECIMENTOFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_ABASTECIMENTOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FRO_ABASTECIMENTOFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_ABASTECIMENTOPayload>
          }
          findFirst: {
            args: Prisma.FRO_ABASTECIMENTOFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_ABASTECIMENTOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FRO_ABASTECIMENTOFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_ABASTECIMENTOPayload>
          }
          findMany: {
            args: Prisma.FRO_ABASTECIMENTOFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_ABASTECIMENTOPayload>[]
          }
          create: {
            args: Prisma.FRO_ABASTECIMENTOCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_ABASTECIMENTOPayload>
          }
          createMany: {
            args: Prisma.FRO_ABASTECIMENTOCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FRO_ABASTECIMENTODeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_ABASTECIMENTOPayload>
          }
          update: {
            args: Prisma.FRO_ABASTECIMENTOUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_ABASTECIMENTOPayload>
          }
          deleteMany: {
            args: Prisma.FRO_ABASTECIMENTODeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FRO_ABASTECIMENTOUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FRO_ABASTECIMENTOUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_ABASTECIMENTOPayload>
          }
          aggregate: {
            args: Prisma.FRO_ABASTECIMENTOAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFRO_ABASTECIMENTO>
          }
          groupBy: {
            args: Prisma.FRO_ABASTECIMENTOGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FRO_ABASTECIMENTOGroupByOutputType>[]
          }
          count: {
            args: Prisma.FRO_ABASTECIMENTOCountArgs<ExtArgs>,
            result: $Utils.Optional<FRO_ABASTECIMENTOCountAggregateOutputType> | number
          }
        }
      }
      FRO_DOCUMENTO: {
        payload: Prisma.$FRO_DOCUMENTOPayload<ExtArgs>
        fields: Prisma.FRO_DOCUMENTOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FRO_DOCUMENTOFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_DOCUMENTOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FRO_DOCUMENTOFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_DOCUMENTOPayload>
          }
          findFirst: {
            args: Prisma.FRO_DOCUMENTOFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_DOCUMENTOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FRO_DOCUMENTOFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_DOCUMENTOPayload>
          }
          findMany: {
            args: Prisma.FRO_DOCUMENTOFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_DOCUMENTOPayload>[]
          }
          create: {
            args: Prisma.FRO_DOCUMENTOCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_DOCUMENTOPayload>
          }
          createMany: {
            args: Prisma.FRO_DOCUMENTOCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FRO_DOCUMENTODeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_DOCUMENTOPayload>
          }
          update: {
            args: Prisma.FRO_DOCUMENTOUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_DOCUMENTOPayload>
          }
          deleteMany: {
            args: Prisma.FRO_DOCUMENTODeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FRO_DOCUMENTOUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FRO_DOCUMENTOUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_DOCUMENTOPayload>
          }
          aggregate: {
            args: Prisma.FRO_DOCUMENTOAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFRO_DOCUMENTO>
          }
          groupBy: {
            args: Prisma.FRO_DOCUMENTOGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FRO_DOCUMENTOGroupByOutputType>[]
          }
          count: {
            args: Prisma.FRO_DOCUMENTOCountArgs<ExtArgs>,
            result: $Utils.Optional<FRO_DOCUMENTOCountAggregateOutputType> | number
          }
        }
      }
      FRO_MANUTENCAO: {
        payload: Prisma.$FRO_MANUTENCAOPayload<ExtArgs>
        fields: Prisma.FRO_MANUTENCAOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FRO_MANUTENCAOFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_MANUTENCAOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FRO_MANUTENCAOFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_MANUTENCAOPayload>
          }
          findFirst: {
            args: Prisma.FRO_MANUTENCAOFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_MANUTENCAOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FRO_MANUTENCAOFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_MANUTENCAOPayload>
          }
          findMany: {
            args: Prisma.FRO_MANUTENCAOFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_MANUTENCAOPayload>[]
          }
          create: {
            args: Prisma.FRO_MANUTENCAOCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_MANUTENCAOPayload>
          }
          createMany: {
            args: Prisma.FRO_MANUTENCAOCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FRO_MANUTENCAODeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_MANUTENCAOPayload>
          }
          update: {
            args: Prisma.FRO_MANUTENCAOUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_MANUTENCAOPayload>
          }
          deleteMany: {
            args: Prisma.FRO_MANUTENCAODeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FRO_MANUTENCAOUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FRO_MANUTENCAOUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_MANUTENCAOPayload>
          }
          aggregate: {
            args: Prisma.FRO_MANUTENCAOAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFRO_MANUTENCAO>
          }
          groupBy: {
            args: Prisma.FRO_MANUTENCAOGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FRO_MANUTENCAOGroupByOutputType>[]
          }
          count: {
            args: Prisma.FRO_MANUTENCAOCountArgs<ExtArgs>,
            result: $Utils.Optional<FRO_MANUTENCAOCountAggregateOutputType> | number
          }
        }
      }
      FRO_OCORRENCIA: {
        payload: Prisma.$FRO_OCORRENCIAPayload<ExtArgs>
        fields: Prisma.FRO_OCORRENCIAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FRO_OCORRENCIAFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_OCORRENCIAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FRO_OCORRENCIAFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_OCORRENCIAPayload>
          }
          findFirst: {
            args: Prisma.FRO_OCORRENCIAFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_OCORRENCIAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FRO_OCORRENCIAFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_OCORRENCIAPayload>
          }
          findMany: {
            args: Prisma.FRO_OCORRENCIAFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_OCORRENCIAPayload>[]
          }
          create: {
            args: Prisma.FRO_OCORRENCIACreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_OCORRENCIAPayload>
          }
          createMany: {
            args: Prisma.FRO_OCORRENCIACreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FRO_OCORRENCIADeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_OCORRENCIAPayload>
          }
          update: {
            args: Prisma.FRO_OCORRENCIAUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_OCORRENCIAPayload>
          }
          deleteMany: {
            args: Prisma.FRO_OCORRENCIADeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FRO_OCORRENCIAUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FRO_OCORRENCIAUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_OCORRENCIAPayload>
          }
          aggregate: {
            args: Prisma.FRO_OCORRENCIAAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFRO_OCORRENCIA>
          }
          groupBy: {
            args: Prisma.FRO_OCORRENCIAGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FRO_OCORRENCIAGroupByOutputType>[]
          }
          count: {
            args: Prisma.FRO_OCORRENCIACountArgs<ExtArgs>,
            result: $Utils.Optional<FRO_OCORRENCIACountAggregateOutputType> | number
          }
        }
      }
      FRO_SERVICO: {
        payload: Prisma.$FRO_SERVICOPayload<ExtArgs>
        fields: Prisma.FRO_SERVICOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FRO_SERVICOFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_SERVICOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FRO_SERVICOFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_SERVICOPayload>
          }
          findFirst: {
            args: Prisma.FRO_SERVICOFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_SERVICOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FRO_SERVICOFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_SERVICOPayload>
          }
          findMany: {
            args: Prisma.FRO_SERVICOFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_SERVICOPayload>[]
          }
          create: {
            args: Prisma.FRO_SERVICOCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_SERVICOPayload>
          }
          createMany: {
            args: Prisma.FRO_SERVICOCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FRO_SERVICODeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_SERVICOPayload>
          }
          update: {
            args: Prisma.FRO_SERVICOUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_SERVICOPayload>
          }
          deleteMany: {
            args: Prisma.FRO_SERVICODeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FRO_SERVICOUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FRO_SERVICOUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_SERVICOPayload>
          }
          aggregate: {
            args: Prisma.FRO_SERVICOAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFRO_SERVICO>
          }
          groupBy: {
            args: Prisma.FRO_SERVICOGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FRO_SERVICOGroupByOutputType>[]
          }
          count: {
            args: Prisma.FRO_SERVICOCountArgs<ExtArgs>,
            result: $Utils.Optional<FRO_SERVICOCountAggregateOutputType> | number
          }
        }
      }
      FRO_VEICULO: {
        payload: Prisma.$FRO_VEICULOPayload<ExtArgs>
        fields: Prisma.FRO_VEICULOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FRO_VEICULOFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_VEICULOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FRO_VEICULOFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_VEICULOPayload>
          }
          findFirst: {
            args: Prisma.FRO_VEICULOFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_VEICULOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FRO_VEICULOFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_VEICULOPayload>
          }
          findMany: {
            args: Prisma.FRO_VEICULOFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_VEICULOPayload>[]
          }
          create: {
            args: Prisma.FRO_VEICULOCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_VEICULOPayload>
          }
          createMany: {
            args: Prisma.FRO_VEICULOCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FRO_VEICULODeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_VEICULOPayload>
          }
          update: {
            args: Prisma.FRO_VEICULOUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_VEICULOPayload>
          }
          deleteMany: {
            args: Prisma.FRO_VEICULODeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FRO_VEICULOUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FRO_VEICULOUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FRO_VEICULOPayload>
          }
          aggregate: {
            args: Prisma.FRO_VEICULOAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFRO_VEICULO>
          }
          groupBy: {
            args: Prisma.FRO_VEICULOGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FRO_VEICULOGroupByOutputType>[]
          }
          count: {
            args: Prisma.FRO_VEICULOCountArgs<ExtArgs>,
            result: $Utils.Optional<FRO_VEICULOCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model FRO_ABASTECIMENTO
   */

  export type AggregateFRO_ABASTECIMENTO = {
    _count: FRO_ABASTECIMENTOCountAggregateOutputType | null
    _avg: FRO_ABASTECIMENTOAvgAggregateOutputType | null
    _sum: FRO_ABASTECIMENTOSumAggregateOutputType | null
    _min: FRO_ABASTECIMENTOMinAggregateOutputType | null
    _max: FRO_ABASTECIMENTOMaxAggregateOutputType | null
  }

  export type FRO_ABASTECIMENTOAvgAggregateOutputType = {
    ABA_SEQ: number | null
    ABA_VEI_SEQ: number | null
    ABA_VALOR: number | null
  }

  export type FRO_ABASTECIMENTOSumAggregateOutputType = {
    ABA_SEQ: number | null
    ABA_VEI_SEQ: number | null
    ABA_VALOR: number | null
  }

  export type FRO_ABASTECIMENTOMinAggregateOutputType = {
    ABA_SEQ: number | null
    ABA_VEI_SEQ: number | null
    ABA_VALOR: number | null
    ABA_DATA: Date | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
  }

  export type FRO_ABASTECIMENTOMaxAggregateOutputType = {
    ABA_SEQ: number | null
    ABA_VEI_SEQ: number | null
    ABA_VALOR: number | null
    ABA_DATA: Date | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
  }

  export type FRO_ABASTECIMENTOCountAggregateOutputType = {
    ABA_SEQ: number
    ABA_VEI_SEQ: number
    ABA_VALOR: number
    ABA_DATA: number
    USER_NAME: number
    MAQ_NAME: number
    DATA_HORA: number
    _all: number
  }


  export type FRO_ABASTECIMENTOAvgAggregateInputType = {
    ABA_SEQ?: true
    ABA_VEI_SEQ?: true
    ABA_VALOR?: true
  }

  export type FRO_ABASTECIMENTOSumAggregateInputType = {
    ABA_SEQ?: true
    ABA_VEI_SEQ?: true
    ABA_VALOR?: true
  }

  export type FRO_ABASTECIMENTOMinAggregateInputType = {
    ABA_SEQ?: true
    ABA_VEI_SEQ?: true
    ABA_VALOR?: true
    ABA_DATA?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
  }

  export type FRO_ABASTECIMENTOMaxAggregateInputType = {
    ABA_SEQ?: true
    ABA_VEI_SEQ?: true
    ABA_VALOR?: true
    ABA_DATA?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
  }

  export type FRO_ABASTECIMENTOCountAggregateInputType = {
    ABA_SEQ?: true
    ABA_VEI_SEQ?: true
    ABA_VALOR?: true
    ABA_DATA?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
    _all?: true
  }

  export type FRO_ABASTECIMENTOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FRO_ABASTECIMENTO to aggregate.
     */
    where?: FRO_ABASTECIMENTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_ABASTECIMENTOS to fetch.
     */
    orderBy?: FRO_ABASTECIMENTOOrderByWithRelationInput | FRO_ABASTECIMENTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FRO_ABASTECIMENTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_ABASTECIMENTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_ABASTECIMENTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FRO_ABASTECIMENTOS
    **/
    _count?: true | FRO_ABASTECIMENTOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FRO_ABASTECIMENTOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FRO_ABASTECIMENTOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FRO_ABASTECIMENTOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FRO_ABASTECIMENTOMaxAggregateInputType
  }

  export type GetFRO_ABASTECIMENTOAggregateType<T extends FRO_ABASTECIMENTOAggregateArgs> = {
        [P in keyof T & keyof AggregateFRO_ABASTECIMENTO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFRO_ABASTECIMENTO[P]>
      : GetScalarType<T[P], AggregateFRO_ABASTECIMENTO[P]>
  }




  export type FRO_ABASTECIMENTOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FRO_ABASTECIMENTOWhereInput
    orderBy?: FRO_ABASTECIMENTOOrderByWithAggregationInput | FRO_ABASTECIMENTOOrderByWithAggregationInput[]
    by: FRO_ABASTECIMENTOScalarFieldEnum[] | FRO_ABASTECIMENTOScalarFieldEnum
    having?: FRO_ABASTECIMENTOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FRO_ABASTECIMENTOCountAggregateInputType | true
    _avg?: FRO_ABASTECIMENTOAvgAggregateInputType
    _sum?: FRO_ABASTECIMENTOSumAggregateInputType
    _min?: FRO_ABASTECIMENTOMinAggregateInputType
    _max?: FRO_ABASTECIMENTOMaxAggregateInputType
  }

  export type FRO_ABASTECIMENTOGroupByOutputType = {
    ABA_SEQ: number
    ABA_VEI_SEQ: number | null
    ABA_VALOR: number | null
    ABA_DATA: Date | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
    _count: FRO_ABASTECIMENTOCountAggregateOutputType | null
    _avg: FRO_ABASTECIMENTOAvgAggregateOutputType | null
    _sum: FRO_ABASTECIMENTOSumAggregateOutputType | null
    _min: FRO_ABASTECIMENTOMinAggregateOutputType | null
    _max: FRO_ABASTECIMENTOMaxAggregateOutputType | null
  }

  type GetFRO_ABASTECIMENTOGroupByPayload<T extends FRO_ABASTECIMENTOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FRO_ABASTECIMENTOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FRO_ABASTECIMENTOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FRO_ABASTECIMENTOGroupByOutputType[P]>
            : GetScalarType<T[P], FRO_ABASTECIMENTOGroupByOutputType[P]>
        }
      >
    >


  export type FRO_ABASTECIMENTOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ABA_SEQ?: boolean
    ABA_VEI_SEQ?: boolean
    ABA_VALOR?: boolean
    ABA_DATA?: boolean
    USER_NAME?: boolean
    MAQ_NAME?: boolean
    DATA_HORA?: boolean
  }, ExtArgs["result"]["fRO_ABASTECIMENTO"]>

  export type FRO_ABASTECIMENTOSelectScalar = {
    ABA_SEQ?: boolean
    ABA_VEI_SEQ?: boolean
    ABA_VALOR?: boolean
    ABA_DATA?: boolean
    USER_NAME?: boolean
    MAQ_NAME?: boolean
    DATA_HORA?: boolean
  }


  export type $FRO_ABASTECIMENTOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FRO_ABASTECIMENTO"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ABA_SEQ: number
      ABA_VEI_SEQ: number | null
      ABA_VALOR: number | null
      ABA_DATA: Date | null
      USER_NAME: string | null
      MAQ_NAME: string | null
      DATA_HORA: Date | null
    }, ExtArgs["result"]["fRO_ABASTECIMENTO"]>
    composites: {}
  }


  type FRO_ABASTECIMENTOGetPayload<S extends boolean | null | undefined | FRO_ABASTECIMENTODefaultArgs> = $Result.GetResult<Prisma.$FRO_ABASTECIMENTOPayload, S>

  type FRO_ABASTECIMENTOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FRO_ABASTECIMENTOFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FRO_ABASTECIMENTOCountAggregateInputType | true
    }

  export interface FRO_ABASTECIMENTODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FRO_ABASTECIMENTO'], meta: { name: 'FRO_ABASTECIMENTO' } }
    /**
     * Find zero or one FRO_ABASTECIMENTO that matches the filter.
     * @param {FRO_ABASTECIMENTOFindUniqueArgs} args - Arguments to find a FRO_ABASTECIMENTO
     * @example
     * // Get one FRO_ABASTECIMENTO
     * const fRO_ABASTECIMENTO = await prisma.fRO_ABASTECIMENTO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FRO_ABASTECIMENTOFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_ABASTECIMENTOFindUniqueArgs<ExtArgs>>
    ): Prisma__FRO_ABASTECIMENTOClient<$Result.GetResult<Prisma.$FRO_ABASTECIMENTOPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FRO_ABASTECIMENTO that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FRO_ABASTECIMENTOFindUniqueOrThrowArgs} args - Arguments to find a FRO_ABASTECIMENTO
     * @example
     * // Get one FRO_ABASTECIMENTO
     * const fRO_ABASTECIMENTO = await prisma.fRO_ABASTECIMENTO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FRO_ABASTECIMENTOFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_ABASTECIMENTOFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FRO_ABASTECIMENTOClient<$Result.GetResult<Prisma.$FRO_ABASTECIMENTOPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FRO_ABASTECIMENTO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_ABASTECIMENTOFindFirstArgs} args - Arguments to find a FRO_ABASTECIMENTO
     * @example
     * // Get one FRO_ABASTECIMENTO
     * const fRO_ABASTECIMENTO = await prisma.fRO_ABASTECIMENTO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FRO_ABASTECIMENTOFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_ABASTECIMENTOFindFirstArgs<ExtArgs>>
    ): Prisma__FRO_ABASTECIMENTOClient<$Result.GetResult<Prisma.$FRO_ABASTECIMENTOPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FRO_ABASTECIMENTO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_ABASTECIMENTOFindFirstOrThrowArgs} args - Arguments to find a FRO_ABASTECIMENTO
     * @example
     * // Get one FRO_ABASTECIMENTO
     * const fRO_ABASTECIMENTO = await prisma.fRO_ABASTECIMENTO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FRO_ABASTECIMENTOFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_ABASTECIMENTOFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FRO_ABASTECIMENTOClient<$Result.GetResult<Prisma.$FRO_ABASTECIMENTOPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FRO_ABASTECIMENTOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_ABASTECIMENTOFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FRO_ABASTECIMENTOS
     * const fRO_ABASTECIMENTOS = await prisma.fRO_ABASTECIMENTO.findMany()
     * 
     * // Get first 10 FRO_ABASTECIMENTOS
     * const fRO_ABASTECIMENTOS = await prisma.fRO_ABASTECIMENTO.findMany({ take: 10 })
     * 
     * // Only select the `ABA_SEQ`
     * const fRO_ABASTECIMENTOWithABA_SEQOnly = await prisma.fRO_ABASTECIMENTO.findMany({ select: { ABA_SEQ: true } })
     * 
    **/
    findMany<T extends FRO_ABASTECIMENTOFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_ABASTECIMENTOFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FRO_ABASTECIMENTOPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FRO_ABASTECIMENTO.
     * @param {FRO_ABASTECIMENTOCreateArgs} args - Arguments to create a FRO_ABASTECIMENTO.
     * @example
     * // Create one FRO_ABASTECIMENTO
     * const FRO_ABASTECIMENTO = await prisma.fRO_ABASTECIMENTO.create({
     *   data: {
     *     // ... data to create a FRO_ABASTECIMENTO
     *   }
     * })
     * 
    **/
    create<T extends FRO_ABASTECIMENTOCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_ABASTECIMENTOCreateArgs<ExtArgs>>
    ): Prisma__FRO_ABASTECIMENTOClient<$Result.GetResult<Prisma.$FRO_ABASTECIMENTOPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FRO_ABASTECIMENTOS.
     *     @param {FRO_ABASTECIMENTOCreateManyArgs} args - Arguments to create many FRO_ABASTECIMENTOS.
     *     @example
     *     // Create many FRO_ABASTECIMENTOS
     *     const fRO_ABASTECIMENTO = await prisma.fRO_ABASTECIMENTO.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FRO_ABASTECIMENTOCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_ABASTECIMENTOCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FRO_ABASTECIMENTO.
     * @param {FRO_ABASTECIMENTODeleteArgs} args - Arguments to delete one FRO_ABASTECIMENTO.
     * @example
     * // Delete one FRO_ABASTECIMENTO
     * const FRO_ABASTECIMENTO = await prisma.fRO_ABASTECIMENTO.delete({
     *   where: {
     *     // ... filter to delete one FRO_ABASTECIMENTO
     *   }
     * })
     * 
    **/
    delete<T extends FRO_ABASTECIMENTODeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_ABASTECIMENTODeleteArgs<ExtArgs>>
    ): Prisma__FRO_ABASTECIMENTOClient<$Result.GetResult<Prisma.$FRO_ABASTECIMENTOPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FRO_ABASTECIMENTO.
     * @param {FRO_ABASTECIMENTOUpdateArgs} args - Arguments to update one FRO_ABASTECIMENTO.
     * @example
     * // Update one FRO_ABASTECIMENTO
     * const fRO_ABASTECIMENTO = await prisma.fRO_ABASTECIMENTO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FRO_ABASTECIMENTOUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_ABASTECIMENTOUpdateArgs<ExtArgs>>
    ): Prisma__FRO_ABASTECIMENTOClient<$Result.GetResult<Prisma.$FRO_ABASTECIMENTOPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FRO_ABASTECIMENTOS.
     * @param {FRO_ABASTECIMENTODeleteManyArgs} args - Arguments to filter FRO_ABASTECIMENTOS to delete.
     * @example
     * // Delete a few FRO_ABASTECIMENTOS
     * const { count } = await prisma.fRO_ABASTECIMENTO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FRO_ABASTECIMENTODeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_ABASTECIMENTODeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FRO_ABASTECIMENTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_ABASTECIMENTOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FRO_ABASTECIMENTOS
     * const fRO_ABASTECIMENTO = await prisma.fRO_ABASTECIMENTO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FRO_ABASTECIMENTOUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_ABASTECIMENTOUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FRO_ABASTECIMENTO.
     * @param {FRO_ABASTECIMENTOUpsertArgs} args - Arguments to update or create a FRO_ABASTECIMENTO.
     * @example
     * // Update or create a FRO_ABASTECIMENTO
     * const fRO_ABASTECIMENTO = await prisma.fRO_ABASTECIMENTO.upsert({
     *   create: {
     *     // ... data to create a FRO_ABASTECIMENTO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FRO_ABASTECIMENTO we want to update
     *   }
     * })
    **/
    upsert<T extends FRO_ABASTECIMENTOUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_ABASTECIMENTOUpsertArgs<ExtArgs>>
    ): Prisma__FRO_ABASTECIMENTOClient<$Result.GetResult<Prisma.$FRO_ABASTECIMENTOPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FRO_ABASTECIMENTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_ABASTECIMENTOCountArgs} args - Arguments to filter FRO_ABASTECIMENTOS to count.
     * @example
     * // Count the number of FRO_ABASTECIMENTOS
     * const count = await prisma.fRO_ABASTECIMENTO.count({
     *   where: {
     *     // ... the filter for the FRO_ABASTECIMENTOS we want to count
     *   }
     * })
    **/
    count<T extends FRO_ABASTECIMENTOCountArgs>(
      args?: Subset<T, FRO_ABASTECIMENTOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FRO_ABASTECIMENTOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FRO_ABASTECIMENTO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_ABASTECIMENTOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FRO_ABASTECIMENTOAggregateArgs>(args: Subset<T, FRO_ABASTECIMENTOAggregateArgs>): Prisma.PrismaPromise<GetFRO_ABASTECIMENTOAggregateType<T>>

    /**
     * Group by FRO_ABASTECIMENTO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_ABASTECIMENTOGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FRO_ABASTECIMENTOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FRO_ABASTECIMENTOGroupByArgs['orderBy'] }
        : { orderBy?: FRO_ABASTECIMENTOGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FRO_ABASTECIMENTOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFRO_ABASTECIMENTOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FRO_ABASTECIMENTO model
   */
  readonly fields: FRO_ABASTECIMENTOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FRO_ABASTECIMENTO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FRO_ABASTECIMENTOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FRO_ABASTECIMENTO model
   */ 
  interface FRO_ABASTECIMENTOFieldRefs {
    readonly ABA_SEQ: FieldRef<"FRO_ABASTECIMENTO", 'Int'>
    readonly ABA_VEI_SEQ: FieldRef<"FRO_ABASTECIMENTO", 'Int'>
    readonly ABA_VALOR: FieldRef<"FRO_ABASTECIMENTO", 'Float'>
    readonly ABA_DATA: FieldRef<"FRO_ABASTECIMENTO", 'DateTime'>
    readonly USER_NAME: FieldRef<"FRO_ABASTECIMENTO", 'String'>
    readonly MAQ_NAME: FieldRef<"FRO_ABASTECIMENTO", 'String'>
    readonly DATA_HORA: FieldRef<"FRO_ABASTECIMENTO", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * FRO_ABASTECIMENTO findUnique
   */
  export type FRO_ABASTECIMENTOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_ABASTECIMENTO
     */
    select?: FRO_ABASTECIMENTOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_ABASTECIMENTO to fetch.
     */
    where: FRO_ABASTECIMENTOWhereUniqueInput
  }


  /**
   * FRO_ABASTECIMENTO findUniqueOrThrow
   */
  export type FRO_ABASTECIMENTOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_ABASTECIMENTO
     */
    select?: FRO_ABASTECIMENTOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_ABASTECIMENTO to fetch.
     */
    where: FRO_ABASTECIMENTOWhereUniqueInput
  }


  /**
   * FRO_ABASTECIMENTO findFirst
   */
  export type FRO_ABASTECIMENTOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_ABASTECIMENTO
     */
    select?: FRO_ABASTECIMENTOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_ABASTECIMENTO to fetch.
     */
    where?: FRO_ABASTECIMENTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_ABASTECIMENTOS to fetch.
     */
    orderBy?: FRO_ABASTECIMENTOOrderByWithRelationInput | FRO_ABASTECIMENTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FRO_ABASTECIMENTOS.
     */
    cursor?: FRO_ABASTECIMENTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_ABASTECIMENTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_ABASTECIMENTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FRO_ABASTECIMENTOS.
     */
    distinct?: FRO_ABASTECIMENTOScalarFieldEnum | FRO_ABASTECIMENTOScalarFieldEnum[]
  }


  /**
   * FRO_ABASTECIMENTO findFirstOrThrow
   */
  export type FRO_ABASTECIMENTOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_ABASTECIMENTO
     */
    select?: FRO_ABASTECIMENTOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_ABASTECIMENTO to fetch.
     */
    where?: FRO_ABASTECIMENTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_ABASTECIMENTOS to fetch.
     */
    orderBy?: FRO_ABASTECIMENTOOrderByWithRelationInput | FRO_ABASTECIMENTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FRO_ABASTECIMENTOS.
     */
    cursor?: FRO_ABASTECIMENTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_ABASTECIMENTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_ABASTECIMENTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FRO_ABASTECIMENTOS.
     */
    distinct?: FRO_ABASTECIMENTOScalarFieldEnum | FRO_ABASTECIMENTOScalarFieldEnum[]
  }


  /**
   * FRO_ABASTECIMENTO findMany
   */
  export type FRO_ABASTECIMENTOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_ABASTECIMENTO
     */
    select?: FRO_ABASTECIMENTOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_ABASTECIMENTOS to fetch.
     */
    where?: FRO_ABASTECIMENTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_ABASTECIMENTOS to fetch.
     */
    orderBy?: FRO_ABASTECIMENTOOrderByWithRelationInput | FRO_ABASTECIMENTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FRO_ABASTECIMENTOS.
     */
    cursor?: FRO_ABASTECIMENTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_ABASTECIMENTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_ABASTECIMENTOS.
     */
    skip?: number
    distinct?: FRO_ABASTECIMENTOScalarFieldEnum | FRO_ABASTECIMENTOScalarFieldEnum[]
  }


  /**
   * FRO_ABASTECIMENTO create
   */
  export type FRO_ABASTECIMENTOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_ABASTECIMENTO
     */
    select?: FRO_ABASTECIMENTOSelect<ExtArgs> | null
    /**
     * The data needed to create a FRO_ABASTECIMENTO.
     */
    data?: XOR<FRO_ABASTECIMENTOCreateInput, FRO_ABASTECIMENTOUncheckedCreateInput>
  }


  /**
   * FRO_ABASTECIMENTO createMany
   */
  export type FRO_ABASTECIMENTOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FRO_ABASTECIMENTOS.
     */
    data: FRO_ABASTECIMENTOCreateManyInput | FRO_ABASTECIMENTOCreateManyInput[]
  }


  /**
   * FRO_ABASTECIMENTO update
   */
  export type FRO_ABASTECIMENTOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_ABASTECIMENTO
     */
    select?: FRO_ABASTECIMENTOSelect<ExtArgs> | null
    /**
     * The data needed to update a FRO_ABASTECIMENTO.
     */
    data: XOR<FRO_ABASTECIMENTOUpdateInput, FRO_ABASTECIMENTOUncheckedUpdateInput>
    /**
     * Choose, which FRO_ABASTECIMENTO to update.
     */
    where: FRO_ABASTECIMENTOWhereUniqueInput
  }


  /**
   * FRO_ABASTECIMENTO updateMany
   */
  export type FRO_ABASTECIMENTOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FRO_ABASTECIMENTOS.
     */
    data: XOR<FRO_ABASTECIMENTOUpdateManyMutationInput, FRO_ABASTECIMENTOUncheckedUpdateManyInput>
    /**
     * Filter which FRO_ABASTECIMENTOS to update
     */
    where?: FRO_ABASTECIMENTOWhereInput
  }


  /**
   * FRO_ABASTECIMENTO upsert
   */
  export type FRO_ABASTECIMENTOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_ABASTECIMENTO
     */
    select?: FRO_ABASTECIMENTOSelect<ExtArgs> | null
    /**
     * The filter to search for the FRO_ABASTECIMENTO to update in case it exists.
     */
    where: FRO_ABASTECIMENTOWhereUniqueInput
    /**
     * In case the FRO_ABASTECIMENTO found by the `where` argument doesn't exist, create a new FRO_ABASTECIMENTO with this data.
     */
    create: XOR<FRO_ABASTECIMENTOCreateInput, FRO_ABASTECIMENTOUncheckedCreateInput>
    /**
     * In case the FRO_ABASTECIMENTO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FRO_ABASTECIMENTOUpdateInput, FRO_ABASTECIMENTOUncheckedUpdateInput>
  }


  /**
   * FRO_ABASTECIMENTO delete
   */
  export type FRO_ABASTECIMENTODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_ABASTECIMENTO
     */
    select?: FRO_ABASTECIMENTOSelect<ExtArgs> | null
    /**
     * Filter which FRO_ABASTECIMENTO to delete.
     */
    where: FRO_ABASTECIMENTOWhereUniqueInput
  }


  /**
   * FRO_ABASTECIMENTO deleteMany
   */
  export type FRO_ABASTECIMENTODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FRO_ABASTECIMENTOS to delete
     */
    where?: FRO_ABASTECIMENTOWhereInput
  }


  /**
   * FRO_ABASTECIMENTO without action
   */
  export type FRO_ABASTECIMENTODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_ABASTECIMENTO
     */
    select?: FRO_ABASTECIMENTOSelect<ExtArgs> | null
  }



  /**
   * Model FRO_DOCUMENTO
   */

  export type AggregateFRO_DOCUMENTO = {
    _count: FRO_DOCUMENTOCountAggregateOutputType | null
    _avg: FRO_DOCUMENTOAvgAggregateOutputType | null
    _sum: FRO_DOCUMENTOSumAggregateOutputType | null
    _min: FRO_DOCUMENTOMinAggregateOutputType | null
    _max: FRO_DOCUMENTOMaxAggregateOutputType | null
  }

  export type FRO_DOCUMENTOAvgAggregateOutputType = {
    DOC_SEQ: number | null
    DOC_VEI_SEQ: number | null
    DOC_TIPO: number | null
    DOC_VALOR: number | null
  }

  export type FRO_DOCUMENTOSumAggregateOutputType = {
    DOC_SEQ: number | null
    DOC_VEI_SEQ: number | null
    DOC_TIPO: number | null
    DOC_VALOR: number | null
  }

  export type FRO_DOCUMENTOMinAggregateOutputType = {
    DOC_SEQ: number | null
    DOC_VEI_SEQ: number | null
    DOC_TIPO: number | null
    DOC_NUMERO: string | null
    DOC_VALIDADE: Date | null
    DOC_VALOR: number | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
  }

  export type FRO_DOCUMENTOMaxAggregateOutputType = {
    DOC_SEQ: number | null
    DOC_VEI_SEQ: number | null
    DOC_TIPO: number | null
    DOC_NUMERO: string | null
    DOC_VALIDADE: Date | null
    DOC_VALOR: number | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
  }

  export type FRO_DOCUMENTOCountAggregateOutputType = {
    DOC_SEQ: number
    DOC_VEI_SEQ: number
    DOC_TIPO: number
    DOC_NUMERO: number
    DOC_VALIDADE: number
    DOC_VALOR: number
    USER_NAME: number
    MAQ_NAME: number
    DATA_HORA: number
    _all: number
  }


  export type FRO_DOCUMENTOAvgAggregateInputType = {
    DOC_SEQ?: true
    DOC_VEI_SEQ?: true
    DOC_TIPO?: true
    DOC_VALOR?: true
  }

  export type FRO_DOCUMENTOSumAggregateInputType = {
    DOC_SEQ?: true
    DOC_VEI_SEQ?: true
    DOC_TIPO?: true
    DOC_VALOR?: true
  }

  export type FRO_DOCUMENTOMinAggregateInputType = {
    DOC_SEQ?: true
    DOC_VEI_SEQ?: true
    DOC_TIPO?: true
    DOC_NUMERO?: true
    DOC_VALIDADE?: true
    DOC_VALOR?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
  }

  export type FRO_DOCUMENTOMaxAggregateInputType = {
    DOC_SEQ?: true
    DOC_VEI_SEQ?: true
    DOC_TIPO?: true
    DOC_NUMERO?: true
    DOC_VALIDADE?: true
    DOC_VALOR?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
  }

  export type FRO_DOCUMENTOCountAggregateInputType = {
    DOC_SEQ?: true
    DOC_VEI_SEQ?: true
    DOC_TIPO?: true
    DOC_NUMERO?: true
    DOC_VALIDADE?: true
    DOC_VALOR?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
    _all?: true
  }

  export type FRO_DOCUMENTOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FRO_DOCUMENTO to aggregate.
     */
    where?: FRO_DOCUMENTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_DOCUMENTOS to fetch.
     */
    orderBy?: FRO_DOCUMENTOOrderByWithRelationInput | FRO_DOCUMENTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FRO_DOCUMENTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_DOCUMENTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_DOCUMENTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FRO_DOCUMENTOS
    **/
    _count?: true | FRO_DOCUMENTOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FRO_DOCUMENTOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FRO_DOCUMENTOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FRO_DOCUMENTOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FRO_DOCUMENTOMaxAggregateInputType
  }

  export type GetFRO_DOCUMENTOAggregateType<T extends FRO_DOCUMENTOAggregateArgs> = {
        [P in keyof T & keyof AggregateFRO_DOCUMENTO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFRO_DOCUMENTO[P]>
      : GetScalarType<T[P], AggregateFRO_DOCUMENTO[P]>
  }




  export type FRO_DOCUMENTOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FRO_DOCUMENTOWhereInput
    orderBy?: FRO_DOCUMENTOOrderByWithAggregationInput | FRO_DOCUMENTOOrderByWithAggregationInput[]
    by: FRO_DOCUMENTOScalarFieldEnum[] | FRO_DOCUMENTOScalarFieldEnum
    having?: FRO_DOCUMENTOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FRO_DOCUMENTOCountAggregateInputType | true
    _avg?: FRO_DOCUMENTOAvgAggregateInputType
    _sum?: FRO_DOCUMENTOSumAggregateInputType
    _min?: FRO_DOCUMENTOMinAggregateInputType
    _max?: FRO_DOCUMENTOMaxAggregateInputType
  }

  export type FRO_DOCUMENTOGroupByOutputType = {
    DOC_SEQ: number
    DOC_VEI_SEQ: number
    DOC_TIPO: number | null
    DOC_NUMERO: string | null
    DOC_VALIDADE: Date | null
    DOC_VALOR: number | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
    _count: FRO_DOCUMENTOCountAggregateOutputType | null
    _avg: FRO_DOCUMENTOAvgAggregateOutputType | null
    _sum: FRO_DOCUMENTOSumAggregateOutputType | null
    _min: FRO_DOCUMENTOMinAggregateOutputType | null
    _max: FRO_DOCUMENTOMaxAggregateOutputType | null
  }

  type GetFRO_DOCUMENTOGroupByPayload<T extends FRO_DOCUMENTOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FRO_DOCUMENTOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FRO_DOCUMENTOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FRO_DOCUMENTOGroupByOutputType[P]>
            : GetScalarType<T[P], FRO_DOCUMENTOGroupByOutputType[P]>
        }
      >
    >


  export type FRO_DOCUMENTOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DOC_SEQ?: boolean
    DOC_VEI_SEQ?: boolean
    DOC_TIPO?: boolean
    DOC_NUMERO?: boolean
    DOC_VALIDADE?: boolean
    DOC_VALOR?: boolean
    USER_NAME?: boolean
    MAQ_NAME?: boolean
    DATA_HORA?: boolean
  }, ExtArgs["result"]["fRO_DOCUMENTO"]>

  export type FRO_DOCUMENTOSelectScalar = {
    DOC_SEQ?: boolean
    DOC_VEI_SEQ?: boolean
    DOC_TIPO?: boolean
    DOC_NUMERO?: boolean
    DOC_VALIDADE?: boolean
    DOC_VALOR?: boolean
    USER_NAME?: boolean
    MAQ_NAME?: boolean
    DATA_HORA?: boolean
  }


  export type $FRO_DOCUMENTOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FRO_DOCUMENTO"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      DOC_SEQ: number
      DOC_VEI_SEQ: number
      DOC_TIPO: number | null
      DOC_NUMERO: string | null
      DOC_VALIDADE: Date | null
      DOC_VALOR: number | null
      USER_NAME: string | null
      MAQ_NAME: string | null
      DATA_HORA: Date | null
    }, ExtArgs["result"]["fRO_DOCUMENTO"]>
    composites: {}
  }


  type FRO_DOCUMENTOGetPayload<S extends boolean | null | undefined | FRO_DOCUMENTODefaultArgs> = $Result.GetResult<Prisma.$FRO_DOCUMENTOPayload, S>

  type FRO_DOCUMENTOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FRO_DOCUMENTOFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FRO_DOCUMENTOCountAggregateInputType | true
    }

  export interface FRO_DOCUMENTODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FRO_DOCUMENTO'], meta: { name: 'FRO_DOCUMENTO' } }
    /**
     * Find zero or one FRO_DOCUMENTO that matches the filter.
     * @param {FRO_DOCUMENTOFindUniqueArgs} args - Arguments to find a FRO_DOCUMENTO
     * @example
     * // Get one FRO_DOCUMENTO
     * const fRO_DOCUMENTO = await prisma.fRO_DOCUMENTO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FRO_DOCUMENTOFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_DOCUMENTOFindUniqueArgs<ExtArgs>>
    ): Prisma__FRO_DOCUMENTOClient<$Result.GetResult<Prisma.$FRO_DOCUMENTOPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FRO_DOCUMENTO that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FRO_DOCUMENTOFindUniqueOrThrowArgs} args - Arguments to find a FRO_DOCUMENTO
     * @example
     * // Get one FRO_DOCUMENTO
     * const fRO_DOCUMENTO = await prisma.fRO_DOCUMENTO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FRO_DOCUMENTOFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_DOCUMENTOFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FRO_DOCUMENTOClient<$Result.GetResult<Prisma.$FRO_DOCUMENTOPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FRO_DOCUMENTO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_DOCUMENTOFindFirstArgs} args - Arguments to find a FRO_DOCUMENTO
     * @example
     * // Get one FRO_DOCUMENTO
     * const fRO_DOCUMENTO = await prisma.fRO_DOCUMENTO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FRO_DOCUMENTOFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_DOCUMENTOFindFirstArgs<ExtArgs>>
    ): Prisma__FRO_DOCUMENTOClient<$Result.GetResult<Prisma.$FRO_DOCUMENTOPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FRO_DOCUMENTO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_DOCUMENTOFindFirstOrThrowArgs} args - Arguments to find a FRO_DOCUMENTO
     * @example
     * // Get one FRO_DOCUMENTO
     * const fRO_DOCUMENTO = await prisma.fRO_DOCUMENTO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FRO_DOCUMENTOFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_DOCUMENTOFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FRO_DOCUMENTOClient<$Result.GetResult<Prisma.$FRO_DOCUMENTOPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FRO_DOCUMENTOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_DOCUMENTOFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FRO_DOCUMENTOS
     * const fRO_DOCUMENTOS = await prisma.fRO_DOCUMENTO.findMany()
     * 
     * // Get first 10 FRO_DOCUMENTOS
     * const fRO_DOCUMENTOS = await prisma.fRO_DOCUMENTO.findMany({ take: 10 })
     * 
     * // Only select the `DOC_SEQ`
     * const fRO_DOCUMENTOWithDOC_SEQOnly = await prisma.fRO_DOCUMENTO.findMany({ select: { DOC_SEQ: true } })
     * 
    **/
    findMany<T extends FRO_DOCUMENTOFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_DOCUMENTOFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FRO_DOCUMENTOPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FRO_DOCUMENTO.
     * @param {FRO_DOCUMENTOCreateArgs} args - Arguments to create a FRO_DOCUMENTO.
     * @example
     * // Create one FRO_DOCUMENTO
     * const FRO_DOCUMENTO = await prisma.fRO_DOCUMENTO.create({
     *   data: {
     *     // ... data to create a FRO_DOCUMENTO
     *   }
     * })
     * 
    **/
    create<T extends FRO_DOCUMENTOCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_DOCUMENTOCreateArgs<ExtArgs>>
    ): Prisma__FRO_DOCUMENTOClient<$Result.GetResult<Prisma.$FRO_DOCUMENTOPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FRO_DOCUMENTOS.
     *     @param {FRO_DOCUMENTOCreateManyArgs} args - Arguments to create many FRO_DOCUMENTOS.
     *     @example
     *     // Create many FRO_DOCUMENTOS
     *     const fRO_DOCUMENTO = await prisma.fRO_DOCUMENTO.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FRO_DOCUMENTOCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_DOCUMENTOCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FRO_DOCUMENTO.
     * @param {FRO_DOCUMENTODeleteArgs} args - Arguments to delete one FRO_DOCUMENTO.
     * @example
     * // Delete one FRO_DOCUMENTO
     * const FRO_DOCUMENTO = await prisma.fRO_DOCUMENTO.delete({
     *   where: {
     *     // ... filter to delete one FRO_DOCUMENTO
     *   }
     * })
     * 
    **/
    delete<T extends FRO_DOCUMENTODeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_DOCUMENTODeleteArgs<ExtArgs>>
    ): Prisma__FRO_DOCUMENTOClient<$Result.GetResult<Prisma.$FRO_DOCUMENTOPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FRO_DOCUMENTO.
     * @param {FRO_DOCUMENTOUpdateArgs} args - Arguments to update one FRO_DOCUMENTO.
     * @example
     * // Update one FRO_DOCUMENTO
     * const fRO_DOCUMENTO = await prisma.fRO_DOCUMENTO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FRO_DOCUMENTOUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_DOCUMENTOUpdateArgs<ExtArgs>>
    ): Prisma__FRO_DOCUMENTOClient<$Result.GetResult<Prisma.$FRO_DOCUMENTOPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FRO_DOCUMENTOS.
     * @param {FRO_DOCUMENTODeleteManyArgs} args - Arguments to filter FRO_DOCUMENTOS to delete.
     * @example
     * // Delete a few FRO_DOCUMENTOS
     * const { count } = await prisma.fRO_DOCUMENTO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FRO_DOCUMENTODeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_DOCUMENTODeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FRO_DOCUMENTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_DOCUMENTOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FRO_DOCUMENTOS
     * const fRO_DOCUMENTO = await prisma.fRO_DOCUMENTO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FRO_DOCUMENTOUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_DOCUMENTOUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FRO_DOCUMENTO.
     * @param {FRO_DOCUMENTOUpsertArgs} args - Arguments to update or create a FRO_DOCUMENTO.
     * @example
     * // Update or create a FRO_DOCUMENTO
     * const fRO_DOCUMENTO = await prisma.fRO_DOCUMENTO.upsert({
     *   create: {
     *     // ... data to create a FRO_DOCUMENTO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FRO_DOCUMENTO we want to update
     *   }
     * })
    **/
    upsert<T extends FRO_DOCUMENTOUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_DOCUMENTOUpsertArgs<ExtArgs>>
    ): Prisma__FRO_DOCUMENTOClient<$Result.GetResult<Prisma.$FRO_DOCUMENTOPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FRO_DOCUMENTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_DOCUMENTOCountArgs} args - Arguments to filter FRO_DOCUMENTOS to count.
     * @example
     * // Count the number of FRO_DOCUMENTOS
     * const count = await prisma.fRO_DOCUMENTO.count({
     *   where: {
     *     // ... the filter for the FRO_DOCUMENTOS we want to count
     *   }
     * })
    **/
    count<T extends FRO_DOCUMENTOCountArgs>(
      args?: Subset<T, FRO_DOCUMENTOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FRO_DOCUMENTOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FRO_DOCUMENTO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_DOCUMENTOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FRO_DOCUMENTOAggregateArgs>(args: Subset<T, FRO_DOCUMENTOAggregateArgs>): Prisma.PrismaPromise<GetFRO_DOCUMENTOAggregateType<T>>

    /**
     * Group by FRO_DOCUMENTO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_DOCUMENTOGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FRO_DOCUMENTOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FRO_DOCUMENTOGroupByArgs['orderBy'] }
        : { orderBy?: FRO_DOCUMENTOGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FRO_DOCUMENTOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFRO_DOCUMENTOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FRO_DOCUMENTO model
   */
  readonly fields: FRO_DOCUMENTOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FRO_DOCUMENTO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FRO_DOCUMENTOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FRO_DOCUMENTO model
   */ 
  interface FRO_DOCUMENTOFieldRefs {
    readonly DOC_SEQ: FieldRef<"FRO_DOCUMENTO", 'Int'>
    readonly DOC_VEI_SEQ: FieldRef<"FRO_DOCUMENTO", 'Int'>
    readonly DOC_TIPO: FieldRef<"FRO_DOCUMENTO", 'Int'>
    readonly DOC_NUMERO: FieldRef<"FRO_DOCUMENTO", 'String'>
    readonly DOC_VALIDADE: FieldRef<"FRO_DOCUMENTO", 'DateTime'>
    readonly DOC_VALOR: FieldRef<"FRO_DOCUMENTO", 'Float'>
    readonly USER_NAME: FieldRef<"FRO_DOCUMENTO", 'String'>
    readonly MAQ_NAME: FieldRef<"FRO_DOCUMENTO", 'String'>
    readonly DATA_HORA: FieldRef<"FRO_DOCUMENTO", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * FRO_DOCUMENTO findUnique
   */
  export type FRO_DOCUMENTOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_DOCUMENTO
     */
    select?: FRO_DOCUMENTOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_DOCUMENTO to fetch.
     */
    where: FRO_DOCUMENTOWhereUniqueInput
  }


  /**
   * FRO_DOCUMENTO findUniqueOrThrow
   */
  export type FRO_DOCUMENTOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_DOCUMENTO
     */
    select?: FRO_DOCUMENTOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_DOCUMENTO to fetch.
     */
    where: FRO_DOCUMENTOWhereUniqueInput
  }


  /**
   * FRO_DOCUMENTO findFirst
   */
  export type FRO_DOCUMENTOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_DOCUMENTO
     */
    select?: FRO_DOCUMENTOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_DOCUMENTO to fetch.
     */
    where?: FRO_DOCUMENTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_DOCUMENTOS to fetch.
     */
    orderBy?: FRO_DOCUMENTOOrderByWithRelationInput | FRO_DOCUMENTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FRO_DOCUMENTOS.
     */
    cursor?: FRO_DOCUMENTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_DOCUMENTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_DOCUMENTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FRO_DOCUMENTOS.
     */
    distinct?: FRO_DOCUMENTOScalarFieldEnum | FRO_DOCUMENTOScalarFieldEnum[]
  }


  /**
   * FRO_DOCUMENTO findFirstOrThrow
   */
  export type FRO_DOCUMENTOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_DOCUMENTO
     */
    select?: FRO_DOCUMENTOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_DOCUMENTO to fetch.
     */
    where?: FRO_DOCUMENTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_DOCUMENTOS to fetch.
     */
    orderBy?: FRO_DOCUMENTOOrderByWithRelationInput | FRO_DOCUMENTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FRO_DOCUMENTOS.
     */
    cursor?: FRO_DOCUMENTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_DOCUMENTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_DOCUMENTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FRO_DOCUMENTOS.
     */
    distinct?: FRO_DOCUMENTOScalarFieldEnum | FRO_DOCUMENTOScalarFieldEnum[]
  }


  /**
   * FRO_DOCUMENTO findMany
   */
  export type FRO_DOCUMENTOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_DOCUMENTO
     */
    select?: FRO_DOCUMENTOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_DOCUMENTOS to fetch.
     */
    where?: FRO_DOCUMENTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_DOCUMENTOS to fetch.
     */
    orderBy?: FRO_DOCUMENTOOrderByWithRelationInput | FRO_DOCUMENTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FRO_DOCUMENTOS.
     */
    cursor?: FRO_DOCUMENTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_DOCUMENTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_DOCUMENTOS.
     */
    skip?: number
    distinct?: FRO_DOCUMENTOScalarFieldEnum | FRO_DOCUMENTOScalarFieldEnum[]
  }


  /**
   * FRO_DOCUMENTO create
   */
  export type FRO_DOCUMENTOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_DOCUMENTO
     */
    select?: FRO_DOCUMENTOSelect<ExtArgs> | null
    /**
     * The data needed to create a FRO_DOCUMENTO.
     */
    data: XOR<FRO_DOCUMENTOCreateInput, FRO_DOCUMENTOUncheckedCreateInput>
  }


  /**
   * FRO_DOCUMENTO createMany
   */
  export type FRO_DOCUMENTOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FRO_DOCUMENTOS.
     */
    data: FRO_DOCUMENTOCreateManyInput | FRO_DOCUMENTOCreateManyInput[]
  }


  /**
   * FRO_DOCUMENTO update
   */
  export type FRO_DOCUMENTOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_DOCUMENTO
     */
    select?: FRO_DOCUMENTOSelect<ExtArgs> | null
    /**
     * The data needed to update a FRO_DOCUMENTO.
     */
    data: XOR<FRO_DOCUMENTOUpdateInput, FRO_DOCUMENTOUncheckedUpdateInput>
    /**
     * Choose, which FRO_DOCUMENTO to update.
     */
    where: FRO_DOCUMENTOWhereUniqueInput
  }


  /**
   * FRO_DOCUMENTO updateMany
   */
  export type FRO_DOCUMENTOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FRO_DOCUMENTOS.
     */
    data: XOR<FRO_DOCUMENTOUpdateManyMutationInput, FRO_DOCUMENTOUncheckedUpdateManyInput>
    /**
     * Filter which FRO_DOCUMENTOS to update
     */
    where?: FRO_DOCUMENTOWhereInput
  }


  /**
   * FRO_DOCUMENTO upsert
   */
  export type FRO_DOCUMENTOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_DOCUMENTO
     */
    select?: FRO_DOCUMENTOSelect<ExtArgs> | null
    /**
     * The filter to search for the FRO_DOCUMENTO to update in case it exists.
     */
    where: FRO_DOCUMENTOWhereUniqueInput
    /**
     * In case the FRO_DOCUMENTO found by the `where` argument doesn't exist, create a new FRO_DOCUMENTO with this data.
     */
    create: XOR<FRO_DOCUMENTOCreateInput, FRO_DOCUMENTOUncheckedCreateInput>
    /**
     * In case the FRO_DOCUMENTO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FRO_DOCUMENTOUpdateInput, FRO_DOCUMENTOUncheckedUpdateInput>
  }


  /**
   * FRO_DOCUMENTO delete
   */
  export type FRO_DOCUMENTODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_DOCUMENTO
     */
    select?: FRO_DOCUMENTOSelect<ExtArgs> | null
    /**
     * Filter which FRO_DOCUMENTO to delete.
     */
    where: FRO_DOCUMENTOWhereUniqueInput
  }


  /**
   * FRO_DOCUMENTO deleteMany
   */
  export type FRO_DOCUMENTODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FRO_DOCUMENTOS to delete
     */
    where?: FRO_DOCUMENTOWhereInput
  }


  /**
   * FRO_DOCUMENTO without action
   */
  export type FRO_DOCUMENTODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_DOCUMENTO
     */
    select?: FRO_DOCUMENTOSelect<ExtArgs> | null
  }



  /**
   * Model FRO_MANUTENCAO
   */

  export type AggregateFRO_MANUTENCAO = {
    _count: FRO_MANUTENCAOCountAggregateOutputType | null
    _avg: FRO_MANUTENCAOAvgAggregateOutputType | null
    _sum: FRO_MANUTENCAOSumAggregateOutputType | null
    _min: FRO_MANUTENCAOMinAggregateOutputType | null
    _max: FRO_MANUTENCAOMaxAggregateOutputType | null
  }

  export type FRO_MANUTENCAOAvgAggregateOutputType = {
    MAN_SEQ: number | null
    MAN_VEI_SEQ: number | null
    MAN_VALOR: number | null
  }

  export type FRO_MANUTENCAOSumAggregateOutputType = {
    MAN_SEQ: number | null
    MAN_VEI_SEQ: number | null
    MAN_VALOR: number | null
  }

  export type FRO_MANUTENCAOMinAggregateOutputType = {
    MAN_SEQ: number | null
    MAN_VEI_SEQ: number | null
    MAN_DATA: Date | null
    MAN_DEFEITO: string | null
    MAN_SOLUCAO: string | null
    MAN_VALOR: number | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
  }

  export type FRO_MANUTENCAOMaxAggregateOutputType = {
    MAN_SEQ: number | null
    MAN_VEI_SEQ: number | null
    MAN_DATA: Date | null
    MAN_DEFEITO: string | null
    MAN_SOLUCAO: string | null
    MAN_VALOR: number | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
  }

  export type FRO_MANUTENCAOCountAggregateOutputType = {
    MAN_SEQ: number
    MAN_VEI_SEQ: number
    MAN_DATA: number
    MAN_DEFEITO: number
    MAN_SOLUCAO: number
    MAN_VALOR: number
    USER_NAME: number
    MAQ_NAME: number
    DATA_HORA: number
    _all: number
  }


  export type FRO_MANUTENCAOAvgAggregateInputType = {
    MAN_SEQ?: true
    MAN_VEI_SEQ?: true
    MAN_VALOR?: true
  }

  export type FRO_MANUTENCAOSumAggregateInputType = {
    MAN_SEQ?: true
    MAN_VEI_SEQ?: true
    MAN_VALOR?: true
  }

  export type FRO_MANUTENCAOMinAggregateInputType = {
    MAN_SEQ?: true
    MAN_VEI_SEQ?: true
    MAN_DATA?: true
    MAN_DEFEITO?: true
    MAN_SOLUCAO?: true
    MAN_VALOR?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
  }

  export type FRO_MANUTENCAOMaxAggregateInputType = {
    MAN_SEQ?: true
    MAN_VEI_SEQ?: true
    MAN_DATA?: true
    MAN_DEFEITO?: true
    MAN_SOLUCAO?: true
    MAN_VALOR?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
  }

  export type FRO_MANUTENCAOCountAggregateInputType = {
    MAN_SEQ?: true
    MAN_VEI_SEQ?: true
    MAN_DATA?: true
    MAN_DEFEITO?: true
    MAN_SOLUCAO?: true
    MAN_VALOR?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
    _all?: true
  }

  export type FRO_MANUTENCAOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FRO_MANUTENCAO to aggregate.
     */
    where?: FRO_MANUTENCAOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_MANUTENCAOS to fetch.
     */
    orderBy?: FRO_MANUTENCAOOrderByWithRelationInput | FRO_MANUTENCAOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FRO_MANUTENCAOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_MANUTENCAOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_MANUTENCAOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FRO_MANUTENCAOS
    **/
    _count?: true | FRO_MANUTENCAOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FRO_MANUTENCAOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FRO_MANUTENCAOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FRO_MANUTENCAOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FRO_MANUTENCAOMaxAggregateInputType
  }

  export type GetFRO_MANUTENCAOAggregateType<T extends FRO_MANUTENCAOAggregateArgs> = {
        [P in keyof T & keyof AggregateFRO_MANUTENCAO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFRO_MANUTENCAO[P]>
      : GetScalarType<T[P], AggregateFRO_MANUTENCAO[P]>
  }




  export type FRO_MANUTENCAOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FRO_MANUTENCAOWhereInput
    orderBy?: FRO_MANUTENCAOOrderByWithAggregationInput | FRO_MANUTENCAOOrderByWithAggregationInput[]
    by: FRO_MANUTENCAOScalarFieldEnum[] | FRO_MANUTENCAOScalarFieldEnum
    having?: FRO_MANUTENCAOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FRO_MANUTENCAOCountAggregateInputType | true
    _avg?: FRO_MANUTENCAOAvgAggregateInputType
    _sum?: FRO_MANUTENCAOSumAggregateInputType
    _min?: FRO_MANUTENCAOMinAggregateInputType
    _max?: FRO_MANUTENCAOMaxAggregateInputType
  }

  export type FRO_MANUTENCAOGroupByOutputType = {
    MAN_SEQ: number
    MAN_VEI_SEQ: number
    MAN_DATA: Date | null
    MAN_DEFEITO: string | null
    MAN_SOLUCAO: string | null
    MAN_VALOR: number | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
    _count: FRO_MANUTENCAOCountAggregateOutputType | null
    _avg: FRO_MANUTENCAOAvgAggregateOutputType | null
    _sum: FRO_MANUTENCAOSumAggregateOutputType | null
    _min: FRO_MANUTENCAOMinAggregateOutputType | null
    _max: FRO_MANUTENCAOMaxAggregateOutputType | null
  }

  type GetFRO_MANUTENCAOGroupByPayload<T extends FRO_MANUTENCAOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FRO_MANUTENCAOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FRO_MANUTENCAOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FRO_MANUTENCAOGroupByOutputType[P]>
            : GetScalarType<T[P], FRO_MANUTENCAOGroupByOutputType[P]>
        }
      >
    >


  export type FRO_MANUTENCAOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MAN_SEQ?: boolean
    MAN_VEI_SEQ?: boolean
    MAN_DATA?: boolean
    MAN_DEFEITO?: boolean
    MAN_SOLUCAO?: boolean
    MAN_VALOR?: boolean
    USER_NAME?: boolean
    MAQ_NAME?: boolean
    DATA_HORA?: boolean
  }, ExtArgs["result"]["fRO_MANUTENCAO"]>

  export type FRO_MANUTENCAOSelectScalar = {
    MAN_SEQ?: boolean
    MAN_VEI_SEQ?: boolean
    MAN_DATA?: boolean
    MAN_DEFEITO?: boolean
    MAN_SOLUCAO?: boolean
    MAN_VALOR?: boolean
    USER_NAME?: boolean
    MAQ_NAME?: boolean
    DATA_HORA?: boolean
  }


  export type $FRO_MANUTENCAOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FRO_MANUTENCAO"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      MAN_SEQ: number
      MAN_VEI_SEQ: number
      MAN_DATA: Date | null
      MAN_DEFEITO: string | null
      MAN_SOLUCAO: string | null
      MAN_VALOR: number | null
      USER_NAME: string | null
      MAQ_NAME: string | null
      DATA_HORA: Date | null
    }, ExtArgs["result"]["fRO_MANUTENCAO"]>
    composites: {}
  }


  type FRO_MANUTENCAOGetPayload<S extends boolean | null | undefined | FRO_MANUTENCAODefaultArgs> = $Result.GetResult<Prisma.$FRO_MANUTENCAOPayload, S>

  type FRO_MANUTENCAOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FRO_MANUTENCAOFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FRO_MANUTENCAOCountAggregateInputType | true
    }

  export interface FRO_MANUTENCAODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FRO_MANUTENCAO'], meta: { name: 'FRO_MANUTENCAO' } }
    /**
     * Find zero or one FRO_MANUTENCAO that matches the filter.
     * @param {FRO_MANUTENCAOFindUniqueArgs} args - Arguments to find a FRO_MANUTENCAO
     * @example
     * // Get one FRO_MANUTENCAO
     * const fRO_MANUTENCAO = await prisma.fRO_MANUTENCAO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FRO_MANUTENCAOFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_MANUTENCAOFindUniqueArgs<ExtArgs>>
    ): Prisma__FRO_MANUTENCAOClient<$Result.GetResult<Prisma.$FRO_MANUTENCAOPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FRO_MANUTENCAO that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FRO_MANUTENCAOFindUniqueOrThrowArgs} args - Arguments to find a FRO_MANUTENCAO
     * @example
     * // Get one FRO_MANUTENCAO
     * const fRO_MANUTENCAO = await prisma.fRO_MANUTENCAO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FRO_MANUTENCAOFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_MANUTENCAOFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FRO_MANUTENCAOClient<$Result.GetResult<Prisma.$FRO_MANUTENCAOPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FRO_MANUTENCAO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_MANUTENCAOFindFirstArgs} args - Arguments to find a FRO_MANUTENCAO
     * @example
     * // Get one FRO_MANUTENCAO
     * const fRO_MANUTENCAO = await prisma.fRO_MANUTENCAO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FRO_MANUTENCAOFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_MANUTENCAOFindFirstArgs<ExtArgs>>
    ): Prisma__FRO_MANUTENCAOClient<$Result.GetResult<Prisma.$FRO_MANUTENCAOPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FRO_MANUTENCAO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_MANUTENCAOFindFirstOrThrowArgs} args - Arguments to find a FRO_MANUTENCAO
     * @example
     * // Get one FRO_MANUTENCAO
     * const fRO_MANUTENCAO = await prisma.fRO_MANUTENCAO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FRO_MANUTENCAOFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_MANUTENCAOFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FRO_MANUTENCAOClient<$Result.GetResult<Prisma.$FRO_MANUTENCAOPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FRO_MANUTENCAOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_MANUTENCAOFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FRO_MANUTENCAOS
     * const fRO_MANUTENCAOS = await prisma.fRO_MANUTENCAO.findMany()
     * 
     * // Get first 10 FRO_MANUTENCAOS
     * const fRO_MANUTENCAOS = await prisma.fRO_MANUTENCAO.findMany({ take: 10 })
     * 
     * // Only select the `MAN_SEQ`
     * const fRO_MANUTENCAOWithMAN_SEQOnly = await prisma.fRO_MANUTENCAO.findMany({ select: { MAN_SEQ: true } })
     * 
    **/
    findMany<T extends FRO_MANUTENCAOFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_MANUTENCAOFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FRO_MANUTENCAOPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FRO_MANUTENCAO.
     * @param {FRO_MANUTENCAOCreateArgs} args - Arguments to create a FRO_MANUTENCAO.
     * @example
     * // Create one FRO_MANUTENCAO
     * const FRO_MANUTENCAO = await prisma.fRO_MANUTENCAO.create({
     *   data: {
     *     // ... data to create a FRO_MANUTENCAO
     *   }
     * })
     * 
    **/
    create<T extends FRO_MANUTENCAOCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_MANUTENCAOCreateArgs<ExtArgs>>
    ): Prisma__FRO_MANUTENCAOClient<$Result.GetResult<Prisma.$FRO_MANUTENCAOPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FRO_MANUTENCAOS.
     *     @param {FRO_MANUTENCAOCreateManyArgs} args - Arguments to create many FRO_MANUTENCAOS.
     *     @example
     *     // Create many FRO_MANUTENCAOS
     *     const fRO_MANUTENCAO = await prisma.fRO_MANUTENCAO.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FRO_MANUTENCAOCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_MANUTENCAOCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FRO_MANUTENCAO.
     * @param {FRO_MANUTENCAODeleteArgs} args - Arguments to delete one FRO_MANUTENCAO.
     * @example
     * // Delete one FRO_MANUTENCAO
     * const FRO_MANUTENCAO = await prisma.fRO_MANUTENCAO.delete({
     *   where: {
     *     // ... filter to delete one FRO_MANUTENCAO
     *   }
     * })
     * 
    **/
    delete<T extends FRO_MANUTENCAODeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_MANUTENCAODeleteArgs<ExtArgs>>
    ): Prisma__FRO_MANUTENCAOClient<$Result.GetResult<Prisma.$FRO_MANUTENCAOPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FRO_MANUTENCAO.
     * @param {FRO_MANUTENCAOUpdateArgs} args - Arguments to update one FRO_MANUTENCAO.
     * @example
     * // Update one FRO_MANUTENCAO
     * const fRO_MANUTENCAO = await prisma.fRO_MANUTENCAO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FRO_MANUTENCAOUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_MANUTENCAOUpdateArgs<ExtArgs>>
    ): Prisma__FRO_MANUTENCAOClient<$Result.GetResult<Prisma.$FRO_MANUTENCAOPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FRO_MANUTENCAOS.
     * @param {FRO_MANUTENCAODeleteManyArgs} args - Arguments to filter FRO_MANUTENCAOS to delete.
     * @example
     * // Delete a few FRO_MANUTENCAOS
     * const { count } = await prisma.fRO_MANUTENCAO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FRO_MANUTENCAODeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_MANUTENCAODeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FRO_MANUTENCAOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_MANUTENCAOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FRO_MANUTENCAOS
     * const fRO_MANUTENCAO = await prisma.fRO_MANUTENCAO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FRO_MANUTENCAOUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_MANUTENCAOUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FRO_MANUTENCAO.
     * @param {FRO_MANUTENCAOUpsertArgs} args - Arguments to update or create a FRO_MANUTENCAO.
     * @example
     * // Update or create a FRO_MANUTENCAO
     * const fRO_MANUTENCAO = await prisma.fRO_MANUTENCAO.upsert({
     *   create: {
     *     // ... data to create a FRO_MANUTENCAO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FRO_MANUTENCAO we want to update
     *   }
     * })
    **/
    upsert<T extends FRO_MANUTENCAOUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_MANUTENCAOUpsertArgs<ExtArgs>>
    ): Prisma__FRO_MANUTENCAOClient<$Result.GetResult<Prisma.$FRO_MANUTENCAOPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FRO_MANUTENCAOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_MANUTENCAOCountArgs} args - Arguments to filter FRO_MANUTENCAOS to count.
     * @example
     * // Count the number of FRO_MANUTENCAOS
     * const count = await prisma.fRO_MANUTENCAO.count({
     *   where: {
     *     // ... the filter for the FRO_MANUTENCAOS we want to count
     *   }
     * })
    **/
    count<T extends FRO_MANUTENCAOCountArgs>(
      args?: Subset<T, FRO_MANUTENCAOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FRO_MANUTENCAOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FRO_MANUTENCAO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_MANUTENCAOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FRO_MANUTENCAOAggregateArgs>(args: Subset<T, FRO_MANUTENCAOAggregateArgs>): Prisma.PrismaPromise<GetFRO_MANUTENCAOAggregateType<T>>

    /**
     * Group by FRO_MANUTENCAO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_MANUTENCAOGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FRO_MANUTENCAOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FRO_MANUTENCAOGroupByArgs['orderBy'] }
        : { orderBy?: FRO_MANUTENCAOGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FRO_MANUTENCAOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFRO_MANUTENCAOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FRO_MANUTENCAO model
   */
  readonly fields: FRO_MANUTENCAOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FRO_MANUTENCAO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FRO_MANUTENCAOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FRO_MANUTENCAO model
   */ 
  interface FRO_MANUTENCAOFieldRefs {
    readonly MAN_SEQ: FieldRef<"FRO_MANUTENCAO", 'Int'>
    readonly MAN_VEI_SEQ: FieldRef<"FRO_MANUTENCAO", 'Int'>
    readonly MAN_DATA: FieldRef<"FRO_MANUTENCAO", 'DateTime'>
    readonly MAN_DEFEITO: FieldRef<"FRO_MANUTENCAO", 'String'>
    readonly MAN_SOLUCAO: FieldRef<"FRO_MANUTENCAO", 'String'>
    readonly MAN_VALOR: FieldRef<"FRO_MANUTENCAO", 'Float'>
    readonly USER_NAME: FieldRef<"FRO_MANUTENCAO", 'String'>
    readonly MAQ_NAME: FieldRef<"FRO_MANUTENCAO", 'String'>
    readonly DATA_HORA: FieldRef<"FRO_MANUTENCAO", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * FRO_MANUTENCAO findUnique
   */
  export type FRO_MANUTENCAOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_MANUTENCAO
     */
    select?: FRO_MANUTENCAOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_MANUTENCAO to fetch.
     */
    where: FRO_MANUTENCAOWhereUniqueInput
  }


  /**
   * FRO_MANUTENCAO findUniqueOrThrow
   */
  export type FRO_MANUTENCAOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_MANUTENCAO
     */
    select?: FRO_MANUTENCAOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_MANUTENCAO to fetch.
     */
    where: FRO_MANUTENCAOWhereUniqueInput
  }


  /**
   * FRO_MANUTENCAO findFirst
   */
  export type FRO_MANUTENCAOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_MANUTENCAO
     */
    select?: FRO_MANUTENCAOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_MANUTENCAO to fetch.
     */
    where?: FRO_MANUTENCAOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_MANUTENCAOS to fetch.
     */
    orderBy?: FRO_MANUTENCAOOrderByWithRelationInput | FRO_MANUTENCAOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FRO_MANUTENCAOS.
     */
    cursor?: FRO_MANUTENCAOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_MANUTENCAOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_MANUTENCAOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FRO_MANUTENCAOS.
     */
    distinct?: FRO_MANUTENCAOScalarFieldEnum | FRO_MANUTENCAOScalarFieldEnum[]
  }


  /**
   * FRO_MANUTENCAO findFirstOrThrow
   */
  export type FRO_MANUTENCAOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_MANUTENCAO
     */
    select?: FRO_MANUTENCAOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_MANUTENCAO to fetch.
     */
    where?: FRO_MANUTENCAOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_MANUTENCAOS to fetch.
     */
    orderBy?: FRO_MANUTENCAOOrderByWithRelationInput | FRO_MANUTENCAOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FRO_MANUTENCAOS.
     */
    cursor?: FRO_MANUTENCAOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_MANUTENCAOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_MANUTENCAOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FRO_MANUTENCAOS.
     */
    distinct?: FRO_MANUTENCAOScalarFieldEnum | FRO_MANUTENCAOScalarFieldEnum[]
  }


  /**
   * FRO_MANUTENCAO findMany
   */
  export type FRO_MANUTENCAOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_MANUTENCAO
     */
    select?: FRO_MANUTENCAOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_MANUTENCAOS to fetch.
     */
    where?: FRO_MANUTENCAOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_MANUTENCAOS to fetch.
     */
    orderBy?: FRO_MANUTENCAOOrderByWithRelationInput | FRO_MANUTENCAOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FRO_MANUTENCAOS.
     */
    cursor?: FRO_MANUTENCAOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_MANUTENCAOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_MANUTENCAOS.
     */
    skip?: number
    distinct?: FRO_MANUTENCAOScalarFieldEnum | FRO_MANUTENCAOScalarFieldEnum[]
  }


  /**
   * FRO_MANUTENCAO create
   */
  export type FRO_MANUTENCAOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_MANUTENCAO
     */
    select?: FRO_MANUTENCAOSelect<ExtArgs> | null
    /**
     * The data needed to create a FRO_MANUTENCAO.
     */
    data: XOR<FRO_MANUTENCAOCreateInput, FRO_MANUTENCAOUncheckedCreateInput>
  }


  /**
   * FRO_MANUTENCAO createMany
   */
  export type FRO_MANUTENCAOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FRO_MANUTENCAOS.
     */
    data: FRO_MANUTENCAOCreateManyInput | FRO_MANUTENCAOCreateManyInput[]
  }


  /**
   * FRO_MANUTENCAO update
   */
  export type FRO_MANUTENCAOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_MANUTENCAO
     */
    select?: FRO_MANUTENCAOSelect<ExtArgs> | null
    /**
     * The data needed to update a FRO_MANUTENCAO.
     */
    data: XOR<FRO_MANUTENCAOUpdateInput, FRO_MANUTENCAOUncheckedUpdateInput>
    /**
     * Choose, which FRO_MANUTENCAO to update.
     */
    where: FRO_MANUTENCAOWhereUniqueInput
  }


  /**
   * FRO_MANUTENCAO updateMany
   */
  export type FRO_MANUTENCAOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FRO_MANUTENCAOS.
     */
    data: XOR<FRO_MANUTENCAOUpdateManyMutationInput, FRO_MANUTENCAOUncheckedUpdateManyInput>
    /**
     * Filter which FRO_MANUTENCAOS to update
     */
    where?: FRO_MANUTENCAOWhereInput
  }


  /**
   * FRO_MANUTENCAO upsert
   */
  export type FRO_MANUTENCAOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_MANUTENCAO
     */
    select?: FRO_MANUTENCAOSelect<ExtArgs> | null
    /**
     * The filter to search for the FRO_MANUTENCAO to update in case it exists.
     */
    where: FRO_MANUTENCAOWhereUniqueInput
    /**
     * In case the FRO_MANUTENCAO found by the `where` argument doesn't exist, create a new FRO_MANUTENCAO with this data.
     */
    create: XOR<FRO_MANUTENCAOCreateInput, FRO_MANUTENCAOUncheckedCreateInput>
    /**
     * In case the FRO_MANUTENCAO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FRO_MANUTENCAOUpdateInput, FRO_MANUTENCAOUncheckedUpdateInput>
  }


  /**
   * FRO_MANUTENCAO delete
   */
  export type FRO_MANUTENCAODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_MANUTENCAO
     */
    select?: FRO_MANUTENCAOSelect<ExtArgs> | null
    /**
     * Filter which FRO_MANUTENCAO to delete.
     */
    where: FRO_MANUTENCAOWhereUniqueInput
  }


  /**
   * FRO_MANUTENCAO deleteMany
   */
  export type FRO_MANUTENCAODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FRO_MANUTENCAOS to delete
     */
    where?: FRO_MANUTENCAOWhereInput
  }


  /**
   * FRO_MANUTENCAO without action
   */
  export type FRO_MANUTENCAODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_MANUTENCAO
     */
    select?: FRO_MANUTENCAOSelect<ExtArgs> | null
  }



  /**
   * Model FRO_OCORRENCIA
   */

  export type AggregateFRO_OCORRENCIA = {
    _count: FRO_OCORRENCIACountAggregateOutputType | null
    _avg: FRO_OCORRENCIAAvgAggregateOutputType | null
    _sum: FRO_OCORRENCIASumAggregateOutputType | null
    _min: FRO_OCORRENCIAMinAggregateOutputType | null
    _max: FRO_OCORRENCIAMaxAggregateOutputType | null
  }

  export type FRO_OCORRENCIAAvgAggregateOutputType = {
    OCO_SEQ: number | null
    OCO_VEI_SEQ: number | null
  }

  export type FRO_OCORRENCIASumAggregateOutputType = {
    OCO_SEQ: number | null
    OCO_VEI_SEQ: number | null
  }

  export type FRO_OCORRENCIAMinAggregateOutputType = {
    OCO_SEQ: number | null
    OCO_VEI_SEQ: number | null
    OCO_DATA: Date | null
    OCO_DESCRICAO: string | null
    OCO_SOLUCAO: string | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
  }

  export type FRO_OCORRENCIAMaxAggregateOutputType = {
    OCO_SEQ: number | null
    OCO_VEI_SEQ: number | null
    OCO_DATA: Date | null
    OCO_DESCRICAO: string | null
    OCO_SOLUCAO: string | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
  }

  export type FRO_OCORRENCIACountAggregateOutputType = {
    OCO_SEQ: number
    OCO_VEI_SEQ: number
    OCO_DATA: number
    OCO_DESCRICAO: number
    OCO_SOLUCAO: number
    USER_NAME: number
    MAQ_NAME: number
    DATA_HORA: number
    _all: number
  }


  export type FRO_OCORRENCIAAvgAggregateInputType = {
    OCO_SEQ?: true
    OCO_VEI_SEQ?: true
  }

  export type FRO_OCORRENCIASumAggregateInputType = {
    OCO_SEQ?: true
    OCO_VEI_SEQ?: true
  }

  export type FRO_OCORRENCIAMinAggregateInputType = {
    OCO_SEQ?: true
    OCO_VEI_SEQ?: true
    OCO_DATA?: true
    OCO_DESCRICAO?: true
    OCO_SOLUCAO?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
  }

  export type FRO_OCORRENCIAMaxAggregateInputType = {
    OCO_SEQ?: true
    OCO_VEI_SEQ?: true
    OCO_DATA?: true
    OCO_DESCRICAO?: true
    OCO_SOLUCAO?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
  }

  export type FRO_OCORRENCIACountAggregateInputType = {
    OCO_SEQ?: true
    OCO_VEI_SEQ?: true
    OCO_DATA?: true
    OCO_DESCRICAO?: true
    OCO_SOLUCAO?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
    _all?: true
  }

  export type FRO_OCORRENCIAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FRO_OCORRENCIA to aggregate.
     */
    where?: FRO_OCORRENCIAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_OCORRENCIAS to fetch.
     */
    orderBy?: FRO_OCORRENCIAOrderByWithRelationInput | FRO_OCORRENCIAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FRO_OCORRENCIAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_OCORRENCIAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_OCORRENCIAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FRO_OCORRENCIAS
    **/
    _count?: true | FRO_OCORRENCIACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FRO_OCORRENCIAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FRO_OCORRENCIASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FRO_OCORRENCIAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FRO_OCORRENCIAMaxAggregateInputType
  }

  export type GetFRO_OCORRENCIAAggregateType<T extends FRO_OCORRENCIAAggregateArgs> = {
        [P in keyof T & keyof AggregateFRO_OCORRENCIA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFRO_OCORRENCIA[P]>
      : GetScalarType<T[P], AggregateFRO_OCORRENCIA[P]>
  }




  export type FRO_OCORRENCIAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FRO_OCORRENCIAWhereInput
    orderBy?: FRO_OCORRENCIAOrderByWithAggregationInput | FRO_OCORRENCIAOrderByWithAggregationInput[]
    by: FRO_OCORRENCIAScalarFieldEnum[] | FRO_OCORRENCIAScalarFieldEnum
    having?: FRO_OCORRENCIAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FRO_OCORRENCIACountAggregateInputType | true
    _avg?: FRO_OCORRENCIAAvgAggregateInputType
    _sum?: FRO_OCORRENCIASumAggregateInputType
    _min?: FRO_OCORRENCIAMinAggregateInputType
    _max?: FRO_OCORRENCIAMaxAggregateInputType
  }

  export type FRO_OCORRENCIAGroupByOutputType = {
    OCO_SEQ: number
    OCO_VEI_SEQ: number
    OCO_DATA: Date | null
    OCO_DESCRICAO: string | null
    OCO_SOLUCAO: string | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
    _count: FRO_OCORRENCIACountAggregateOutputType | null
    _avg: FRO_OCORRENCIAAvgAggregateOutputType | null
    _sum: FRO_OCORRENCIASumAggregateOutputType | null
    _min: FRO_OCORRENCIAMinAggregateOutputType | null
    _max: FRO_OCORRENCIAMaxAggregateOutputType | null
  }

  type GetFRO_OCORRENCIAGroupByPayload<T extends FRO_OCORRENCIAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FRO_OCORRENCIAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FRO_OCORRENCIAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FRO_OCORRENCIAGroupByOutputType[P]>
            : GetScalarType<T[P], FRO_OCORRENCIAGroupByOutputType[P]>
        }
      >
    >


  export type FRO_OCORRENCIASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OCO_SEQ?: boolean
    OCO_VEI_SEQ?: boolean
    OCO_DATA?: boolean
    OCO_DESCRICAO?: boolean
    OCO_SOLUCAO?: boolean
    USER_NAME?: boolean
    MAQ_NAME?: boolean
    DATA_HORA?: boolean
  }, ExtArgs["result"]["fRO_OCORRENCIA"]>

  export type FRO_OCORRENCIASelectScalar = {
    OCO_SEQ?: boolean
    OCO_VEI_SEQ?: boolean
    OCO_DATA?: boolean
    OCO_DESCRICAO?: boolean
    OCO_SOLUCAO?: boolean
    USER_NAME?: boolean
    MAQ_NAME?: boolean
    DATA_HORA?: boolean
  }


  export type $FRO_OCORRENCIAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FRO_OCORRENCIA"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      OCO_SEQ: number
      OCO_VEI_SEQ: number
      OCO_DATA: Date | null
      OCO_DESCRICAO: string | null
      OCO_SOLUCAO: string | null
      USER_NAME: string | null
      MAQ_NAME: string | null
      DATA_HORA: Date | null
    }, ExtArgs["result"]["fRO_OCORRENCIA"]>
    composites: {}
  }


  type FRO_OCORRENCIAGetPayload<S extends boolean | null | undefined | FRO_OCORRENCIADefaultArgs> = $Result.GetResult<Prisma.$FRO_OCORRENCIAPayload, S>

  type FRO_OCORRENCIACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FRO_OCORRENCIAFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FRO_OCORRENCIACountAggregateInputType | true
    }

  export interface FRO_OCORRENCIADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FRO_OCORRENCIA'], meta: { name: 'FRO_OCORRENCIA' } }
    /**
     * Find zero or one FRO_OCORRENCIA that matches the filter.
     * @param {FRO_OCORRENCIAFindUniqueArgs} args - Arguments to find a FRO_OCORRENCIA
     * @example
     * // Get one FRO_OCORRENCIA
     * const fRO_OCORRENCIA = await prisma.fRO_OCORRENCIA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FRO_OCORRENCIAFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_OCORRENCIAFindUniqueArgs<ExtArgs>>
    ): Prisma__FRO_OCORRENCIAClient<$Result.GetResult<Prisma.$FRO_OCORRENCIAPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FRO_OCORRENCIA that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FRO_OCORRENCIAFindUniqueOrThrowArgs} args - Arguments to find a FRO_OCORRENCIA
     * @example
     * // Get one FRO_OCORRENCIA
     * const fRO_OCORRENCIA = await prisma.fRO_OCORRENCIA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FRO_OCORRENCIAFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_OCORRENCIAFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FRO_OCORRENCIAClient<$Result.GetResult<Prisma.$FRO_OCORRENCIAPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FRO_OCORRENCIA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_OCORRENCIAFindFirstArgs} args - Arguments to find a FRO_OCORRENCIA
     * @example
     * // Get one FRO_OCORRENCIA
     * const fRO_OCORRENCIA = await prisma.fRO_OCORRENCIA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FRO_OCORRENCIAFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_OCORRENCIAFindFirstArgs<ExtArgs>>
    ): Prisma__FRO_OCORRENCIAClient<$Result.GetResult<Prisma.$FRO_OCORRENCIAPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FRO_OCORRENCIA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_OCORRENCIAFindFirstOrThrowArgs} args - Arguments to find a FRO_OCORRENCIA
     * @example
     * // Get one FRO_OCORRENCIA
     * const fRO_OCORRENCIA = await prisma.fRO_OCORRENCIA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FRO_OCORRENCIAFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_OCORRENCIAFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FRO_OCORRENCIAClient<$Result.GetResult<Prisma.$FRO_OCORRENCIAPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FRO_OCORRENCIAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_OCORRENCIAFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FRO_OCORRENCIAS
     * const fRO_OCORRENCIAS = await prisma.fRO_OCORRENCIA.findMany()
     * 
     * // Get first 10 FRO_OCORRENCIAS
     * const fRO_OCORRENCIAS = await prisma.fRO_OCORRENCIA.findMany({ take: 10 })
     * 
     * // Only select the `OCO_SEQ`
     * const fRO_OCORRENCIAWithOCO_SEQOnly = await prisma.fRO_OCORRENCIA.findMany({ select: { OCO_SEQ: true } })
     * 
    **/
    findMany<T extends FRO_OCORRENCIAFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_OCORRENCIAFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FRO_OCORRENCIAPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FRO_OCORRENCIA.
     * @param {FRO_OCORRENCIACreateArgs} args - Arguments to create a FRO_OCORRENCIA.
     * @example
     * // Create one FRO_OCORRENCIA
     * const FRO_OCORRENCIA = await prisma.fRO_OCORRENCIA.create({
     *   data: {
     *     // ... data to create a FRO_OCORRENCIA
     *   }
     * })
     * 
    **/
    create<T extends FRO_OCORRENCIACreateArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_OCORRENCIACreateArgs<ExtArgs>>
    ): Prisma__FRO_OCORRENCIAClient<$Result.GetResult<Prisma.$FRO_OCORRENCIAPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FRO_OCORRENCIAS.
     *     @param {FRO_OCORRENCIACreateManyArgs} args - Arguments to create many FRO_OCORRENCIAS.
     *     @example
     *     // Create many FRO_OCORRENCIAS
     *     const fRO_OCORRENCIA = await prisma.fRO_OCORRENCIA.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FRO_OCORRENCIACreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_OCORRENCIACreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FRO_OCORRENCIA.
     * @param {FRO_OCORRENCIADeleteArgs} args - Arguments to delete one FRO_OCORRENCIA.
     * @example
     * // Delete one FRO_OCORRENCIA
     * const FRO_OCORRENCIA = await prisma.fRO_OCORRENCIA.delete({
     *   where: {
     *     // ... filter to delete one FRO_OCORRENCIA
     *   }
     * })
     * 
    **/
    delete<T extends FRO_OCORRENCIADeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_OCORRENCIADeleteArgs<ExtArgs>>
    ): Prisma__FRO_OCORRENCIAClient<$Result.GetResult<Prisma.$FRO_OCORRENCIAPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FRO_OCORRENCIA.
     * @param {FRO_OCORRENCIAUpdateArgs} args - Arguments to update one FRO_OCORRENCIA.
     * @example
     * // Update one FRO_OCORRENCIA
     * const fRO_OCORRENCIA = await prisma.fRO_OCORRENCIA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FRO_OCORRENCIAUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_OCORRENCIAUpdateArgs<ExtArgs>>
    ): Prisma__FRO_OCORRENCIAClient<$Result.GetResult<Prisma.$FRO_OCORRENCIAPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FRO_OCORRENCIAS.
     * @param {FRO_OCORRENCIADeleteManyArgs} args - Arguments to filter FRO_OCORRENCIAS to delete.
     * @example
     * // Delete a few FRO_OCORRENCIAS
     * const { count } = await prisma.fRO_OCORRENCIA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FRO_OCORRENCIADeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_OCORRENCIADeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FRO_OCORRENCIAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_OCORRENCIAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FRO_OCORRENCIAS
     * const fRO_OCORRENCIA = await prisma.fRO_OCORRENCIA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FRO_OCORRENCIAUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_OCORRENCIAUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FRO_OCORRENCIA.
     * @param {FRO_OCORRENCIAUpsertArgs} args - Arguments to update or create a FRO_OCORRENCIA.
     * @example
     * // Update or create a FRO_OCORRENCIA
     * const fRO_OCORRENCIA = await prisma.fRO_OCORRENCIA.upsert({
     *   create: {
     *     // ... data to create a FRO_OCORRENCIA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FRO_OCORRENCIA we want to update
     *   }
     * })
    **/
    upsert<T extends FRO_OCORRENCIAUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_OCORRENCIAUpsertArgs<ExtArgs>>
    ): Prisma__FRO_OCORRENCIAClient<$Result.GetResult<Prisma.$FRO_OCORRENCIAPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FRO_OCORRENCIAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_OCORRENCIACountArgs} args - Arguments to filter FRO_OCORRENCIAS to count.
     * @example
     * // Count the number of FRO_OCORRENCIAS
     * const count = await prisma.fRO_OCORRENCIA.count({
     *   where: {
     *     // ... the filter for the FRO_OCORRENCIAS we want to count
     *   }
     * })
    **/
    count<T extends FRO_OCORRENCIACountArgs>(
      args?: Subset<T, FRO_OCORRENCIACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FRO_OCORRENCIACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FRO_OCORRENCIA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_OCORRENCIAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FRO_OCORRENCIAAggregateArgs>(args: Subset<T, FRO_OCORRENCIAAggregateArgs>): Prisma.PrismaPromise<GetFRO_OCORRENCIAAggregateType<T>>

    /**
     * Group by FRO_OCORRENCIA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_OCORRENCIAGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FRO_OCORRENCIAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FRO_OCORRENCIAGroupByArgs['orderBy'] }
        : { orderBy?: FRO_OCORRENCIAGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FRO_OCORRENCIAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFRO_OCORRENCIAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FRO_OCORRENCIA model
   */
  readonly fields: FRO_OCORRENCIAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FRO_OCORRENCIA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FRO_OCORRENCIAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FRO_OCORRENCIA model
   */ 
  interface FRO_OCORRENCIAFieldRefs {
    readonly OCO_SEQ: FieldRef<"FRO_OCORRENCIA", 'Int'>
    readonly OCO_VEI_SEQ: FieldRef<"FRO_OCORRENCIA", 'Int'>
    readonly OCO_DATA: FieldRef<"FRO_OCORRENCIA", 'DateTime'>
    readonly OCO_DESCRICAO: FieldRef<"FRO_OCORRENCIA", 'String'>
    readonly OCO_SOLUCAO: FieldRef<"FRO_OCORRENCIA", 'String'>
    readonly USER_NAME: FieldRef<"FRO_OCORRENCIA", 'String'>
    readonly MAQ_NAME: FieldRef<"FRO_OCORRENCIA", 'String'>
    readonly DATA_HORA: FieldRef<"FRO_OCORRENCIA", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * FRO_OCORRENCIA findUnique
   */
  export type FRO_OCORRENCIAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_OCORRENCIA
     */
    select?: FRO_OCORRENCIASelect<ExtArgs> | null
    /**
     * Filter, which FRO_OCORRENCIA to fetch.
     */
    where: FRO_OCORRENCIAWhereUniqueInput
  }


  /**
   * FRO_OCORRENCIA findUniqueOrThrow
   */
  export type FRO_OCORRENCIAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_OCORRENCIA
     */
    select?: FRO_OCORRENCIASelect<ExtArgs> | null
    /**
     * Filter, which FRO_OCORRENCIA to fetch.
     */
    where: FRO_OCORRENCIAWhereUniqueInput
  }


  /**
   * FRO_OCORRENCIA findFirst
   */
  export type FRO_OCORRENCIAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_OCORRENCIA
     */
    select?: FRO_OCORRENCIASelect<ExtArgs> | null
    /**
     * Filter, which FRO_OCORRENCIA to fetch.
     */
    where?: FRO_OCORRENCIAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_OCORRENCIAS to fetch.
     */
    orderBy?: FRO_OCORRENCIAOrderByWithRelationInput | FRO_OCORRENCIAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FRO_OCORRENCIAS.
     */
    cursor?: FRO_OCORRENCIAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_OCORRENCIAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_OCORRENCIAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FRO_OCORRENCIAS.
     */
    distinct?: FRO_OCORRENCIAScalarFieldEnum | FRO_OCORRENCIAScalarFieldEnum[]
  }


  /**
   * FRO_OCORRENCIA findFirstOrThrow
   */
  export type FRO_OCORRENCIAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_OCORRENCIA
     */
    select?: FRO_OCORRENCIASelect<ExtArgs> | null
    /**
     * Filter, which FRO_OCORRENCIA to fetch.
     */
    where?: FRO_OCORRENCIAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_OCORRENCIAS to fetch.
     */
    orderBy?: FRO_OCORRENCIAOrderByWithRelationInput | FRO_OCORRENCIAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FRO_OCORRENCIAS.
     */
    cursor?: FRO_OCORRENCIAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_OCORRENCIAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_OCORRENCIAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FRO_OCORRENCIAS.
     */
    distinct?: FRO_OCORRENCIAScalarFieldEnum | FRO_OCORRENCIAScalarFieldEnum[]
  }


  /**
   * FRO_OCORRENCIA findMany
   */
  export type FRO_OCORRENCIAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_OCORRENCIA
     */
    select?: FRO_OCORRENCIASelect<ExtArgs> | null
    /**
     * Filter, which FRO_OCORRENCIAS to fetch.
     */
    where?: FRO_OCORRENCIAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_OCORRENCIAS to fetch.
     */
    orderBy?: FRO_OCORRENCIAOrderByWithRelationInput | FRO_OCORRENCIAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FRO_OCORRENCIAS.
     */
    cursor?: FRO_OCORRENCIAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_OCORRENCIAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_OCORRENCIAS.
     */
    skip?: number
    distinct?: FRO_OCORRENCIAScalarFieldEnum | FRO_OCORRENCIAScalarFieldEnum[]
  }


  /**
   * FRO_OCORRENCIA create
   */
  export type FRO_OCORRENCIACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_OCORRENCIA
     */
    select?: FRO_OCORRENCIASelect<ExtArgs> | null
    /**
     * The data needed to create a FRO_OCORRENCIA.
     */
    data: XOR<FRO_OCORRENCIACreateInput, FRO_OCORRENCIAUncheckedCreateInput>
  }


  /**
   * FRO_OCORRENCIA createMany
   */
  export type FRO_OCORRENCIACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FRO_OCORRENCIAS.
     */
    data: FRO_OCORRENCIACreateManyInput | FRO_OCORRENCIACreateManyInput[]
  }


  /**
   * FRO_OCORRENCIA update
   */
  export type FRO_OCORRENCIAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_OCORRENCIA
     */
    select?: FRO_OCORRENCIASelect<ExtArgs> | null
    /**
     * The data needed to update a FRO_OCORRENCIA.
     */
    data: XOR<FRO_OCORRENCIAUpdateInput, FRO_OCORRENCIAUncheckedUpdateInput>
    /**
     * Choose, which FRO_OCORRENCIA to update.
     */
    where: FRO_OCORRENCIAWhereUniqueInput
  }


  /**
   * FRO_OCORRENCIA updateMany
   */
  export type FRO_OCORRENCIAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FRO_OCORRENCIAS.
     */
    data: XOR<FRO_OCORRENCIAUpdateManyMutationInput, FRO_OCORRENCIAUncheckedUpdateManyInput>
    /**
     * Filter which FRO_OCORRENCIAS to update
     */
    where?: FRO_OCORRENCIAWhereInput
  }


  /**
   * FRO_OCORRENCIA upsert
   */
  export type FRO_OCORRENCIAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_OCORRENCIA
     */
    select?: FRO_OCORRENCIASelect<ExtArgs> | null
    /**
     * The filter to search for the FRO_OCORRENCIA to update in case it exists.
     */
    where: FRO_OCORRENCIAWhereUniqueInput
    /**
     * In case the FRO_OCORRENCIA found by the `where` argument doesn't exist, create a new FRO_OCORRENCIA with this data.
     */
    create: XOR<FRO_OCORRENCIACreateInput, FRO_OCORRENCIAUncheckedCreateInput>
    /**
     * In case the FRO_OCORRENCIA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FRO_OCORRENCIAUpdateInput, FRO_OCORRENCIAUncheckedUpdateInput>
  }


  /**
   * FRO_OCORRENCIA delete
   */
  export type FRO_OCORRENCIADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_OCORRENCIA
     */
    select?: FRO_OCORRENCIASelect<ExtArgs> | null
    /**
     * Filter which FRO_OCORRENCIA to delete.
     */
    where: FRO_OCORRENCIAWhereUniqueInput
  }


  /**
   * FRO_OCORRENCIA deleteMany
   */
  export type FRO_OCORRENCIADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FRO_OCORRENCIAS to delete
     */
    where?: FRO_OCORRENCIAWhereInput
  }


  /**
   * FRO_OCORRENCIA without action
   */
  export type FRO_OCORRENCIADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_OCORRENCIA
     */
    select?: FRO_OCORRENCIASelect<ExtArgs> | null
  }



  /**
   * Model FRO_SERVICO
   */

  export type AggregateFRO_SERVICO = {
    _count: FRO_SERVICOCountAggregateOutputType | null
    _avg: FRO_SERVICOAvgAggregateOutputType | null
    _sum: FRO_SERVICOSumAggregateOutputType | null
    _min: FRO_SERVICOMinAggregateOutputType | null
    _max: FRO_SERVICOMaxAggregateOutputType | null
  }

  export type FRO_SERVICOAvgAggregateOutputType = {
    SER_SEQ: number | null
  }

  export type FRO_SERVICOSumAggregateOutputType = {
    SER_SEQ: number | null
  }

  export type FRO_SERVICOMinAggregateOutputType = {
    SER_SEQ: number | null
    SER_DATA_INICIO: Date | null
    SER_DATA_FIM: Date | null
    SER_DESTINO: string | null
    SER_MOTIVO: string | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
  }

  export type FRO_SERVICOMaxAggregateOutputType = {
    SER_SEQ: number | null
    SER_DATA_INICIO: Date | null
    SER_DATA_FIM: Date | null
    SER_DESTINO: string | null
    SER_MOTIVO: string | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
  }

  export type FRO_SERVICOCountAggregateOutputType = {
    SER_SEQ: number
    SER_DATA_INICIO: number
    SER_DATA_FIM: number
    SER_DESTINO: number
    SER_MOTIVO: number
    USER_NAME: number
    MAQ_NAME: number
    DATA_HORA: number
    _all: number
  }


  export type FRO_SERVICOAvgAggregateInputType = {
    SER_SEQ?: true
  }

  export type FRO_SERVICOSumAggregateInputType = {
    SER_SEQ?: true
  }

  export type FRO_SERVICOMinAggregateInputType = {
    SER_SEQ?: true
    SER_DATA_INICIO?: true
    SER_DATA_FIM?: true
    SER_DESTINO?: true
    SER_MOTIVO?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
  }

  export type FRO_SERVICOMaxAggregateInputType = {
    SER_SEQ?: true
    SER_DATA_INICIO?: true
    SER_DATA_FIM?: true
    SER_DESTINO?: true
    SER_MOTIVO?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
  }

  export type FRO_SERVICOCountAggregateInputType = {
    SER_SEQ?: true
    SER_DATA_INICIO?: true
    SER_DATA_FIM?: true
    SER_DESTINO?: true
    SER_MOTIVO?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
    _all?: true
  }

  export type FRO_SERVICOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FRO_SERVICO to aggregate.
     */
    where?: FRO_SERVICOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_SERVICOS to fetch.
     */
    orderBy?: FRO_SERVICOOrderByWithRelationInput | FRO_SERVICOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FRO_SERVICOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_SERVICOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_SERVICOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FRO_SERVICOS
    **/
    _count?: true | FRO_SERVICOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FRO_SERVICOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FRO_SERVICOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FRO_SERVICOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FRO_SERVICOMaxAggregateInputType
  }

  export type GetFRO_SERVICOAggregateType<T extends FRO_SERVICOAggregateArgs> = {
        [P in keyof T & keyof AggregateFRO_SERVICO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFRO_SERVICO[P]>
      : GetScalarType<T[P], AggregateFRO_SERVICO[P]>
  }




  export type FRO_SERVICOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FRO_SERVICOWhereInput
    orderBy?: FRO_SERVICOOrderByWithAggregationInput | FRO_SERVICOOrderByWithAggregationInput[]
    by: FRO_SERVICOScalarFieldEnum[] | FRO_SERVICOScalarFieldEnum
    having?: FRO_SERVICOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FRO_SERVICOCountAggregateInputType | true
    _avg?: FRO_SERVICOAvgAggregateInputType
    _sum?: FRO_SERVICOSumAggregateInputType
    _min?: FRO_SERVICOMinAggregateInputType
    _max?: FRO_SERVICOMaxAggregateInputType
  }

  export type FRO_SERVICOGroupByOutputType = {
    SER_SEQ: number
    SER_DATA_INICIO: Date | null
    SER_DATA_FIM: Date | null
    SER_DESTINO: string | null
    SER_MOTIVO: string | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
    _count: FRO_SERVICOCountAggregateOutputType | null
    _avg: FRO_SERVICOAvgAggregateOutputType | null
    _sum: FRO_SERVICOSumAggregateOutputType | null
    _min: FRO_SERVICOMinAggregateOutputType | null
    _max: FRO_SERVICOMaxAggregateOutputType | null
  }

  type GetFRO_SERVICOGroupByPayload<T extends FRO_SERVICOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FRO_SERVICOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FRO_SERVICOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FRO_SERVICOGroupByOutputType[P]>
            : GetScalarType<T[P], FRO_SERVICOGroupByOutputType[P]>
        }
      >
    >


  export type FRO_SERVICOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SER_SEQ?: boolean
    SER_DATA_INICIO?: boolean
    SER_DATA_FIM?: boolean
    SER_DESTINO?: boolean
    SER_MOTIVO?: boolean
    USER_NAME?: boolean
    MAQ_NAME?: boolean
    DATA_HORA?: boolean
  }, ExtArgs["result"]["fRO_SERVICO"]>

  export type FRO_SERVICOSelectScalar = {
    SER_SEQ?: boolean
    SER_DATA_INICIO?: boolean
    SER_DATA_FIM?: boolean
    SER_DESTINO?: boolean
    SER_MOTIVO?: boolean
    USER_NAME?: boolean
    MAQ_NAME?: boolean
    DATA_HORA?: boolean
  }


  export type $FRO_SERVICOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FRO_SERVICO"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      SER_SEQ: number
      SER_DATA_INICIO: Date | null
      SER_DATA_FIM: Date | null
      SER_DESTINO: string | null
      SER_MOTIVO: string | null
      USER_NAME: string | null
      MAQ_NAME: string | null
      DATA_HORA: Date | null
    }, ExtArgs["result"]["fRO_SERVICO"]>
    composites: {}
  }


  type FRO_SERVICOGetPayload<S extends boolean | null | undefined | FRO_SERVICODefaultArgs> = $Result.GetResult<Prisma.$FRO_SERVICOPayload, S>

  type FRO_SERVICOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FRO_SERVICOFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FRO_SERVICOCountAggregateInputType | true
    }

  export interface FRO_SERVICODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FRO_SERVICO'], meta: { name: 'FRO_SERVICO' } }
    /**
     * Find zero or one FRO_SERVICO that matches the filter.
     * @param {FRO_SERVICOFindUniqueArgs} args - Arguments to find a FRO_SERVICO
     * @example
     * // Get one FRO_SERVICO
     * const fRO_SERVICO = await prisma.fRO_SERVICO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FRO_SERVICOFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_SERVICOFindUniqueArgs<ExtArgs>>
    ): Prisma__FRO_SERVICOClient<$Result.GetResult<Prisma.$FRO_SERVICOPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FRO_SERVICO that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FRO_SERVICOFindUniqueOrThrowArgs} args - Arguments to find a FRO_SERVICO
     * @example
     * // Get one FRO_SERVICO
     * const fRO_SERVICO = await prisma.fRO_SERVICO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FRO_SERVICOFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_SERVICOFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FRO_SERVICOClient<$Result.GetResult<Prisma.$FRO_SERVICOPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FRO_SERVICO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_SERVICOFindFirstArgs} args - Arguments to find a FRO_SERVICO
     * @example
     * // Get one FRO_SERVICO
     * const fRO_SERVICO = await prisma.fRO_SERVICO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FRO_SERVICOFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_SERVICOFindFirstArgs<ExtArgs>>
    ): Prisma__FRO_SERVICOClient<$Result.GetResult<Prisma.$FRO_SERVICOPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FRO_SERVICO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_SERVICOFindFirstOrThrowArgs} args - Arguments to find a FRO_SERVICO
     * @example
     * // Get one FRO_SERVICO
     * const fRO_SERVICO = await prisma.fRO_SERVICO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FRO_SERVICOFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_SERVICOFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FRO_SERVICOClient<$Result.GetResult<Prisma.$FRO_SERVICOPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FRO_SERVICOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_SERVICOFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FRO_SERVICOS
     * const fRO_SERVICOS = await prisma.fRO_SERVICO.findMany()
     * 
     * // Get first 10 FRO_SERVICOS
     * const fRO_SERVICOS = await prisma.fRO_SERVICO.findMany({ take: 10 })
     * 
     * // Only select the `SER_SEQ`
     * const fRO_SERVICOWithSER_SEQOnly = await prisma.fRO_SERVICO.findMany({ select: { SER_SEQ: true } })
     * 
    **/
    findMany<T extends FRO_SERVICOFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_SERVICOFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FRO_SERVICOPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FRO_SERVICO.
     * @param {FRO_SERVICOCreateArgs} args - Arguments to create a FRO_SERVICO.
     * @example
     * // Create one FRO_SERVICO
     * const FRO_SERVICO = await prisma.fRO_SERVICO.create({
     *   data: {
     *     // ... data to create a FRO_SERVICO
     *   }
     * })
     * 
    **/
    create<T extends FRO_SERVICOCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_SERVICOCreateArgs<ExtArgs>>
    ): Prisma__FRO_SERVICOClient<$Result.GetResult<Prisma.$FRO_SERVICOPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FRO_SERVICOS.
     *     @param {FRO_SERVICOCreateManyArgs} args - Arguments to create many FRO_SERVICOS.
     *     @example
     *     // Create many FRO_SERVICOS
     *     const fRO_SERVICO = await prisma.fRO_SERVICO.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FRO_SERVICOCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_SERVICOCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FRO_SERVICO.
     * @param {FRO_SERVICODeleteArgs} args - Arguments to delete one FRO_SERVICO.
     * @example
     * // Delete one FRO_SERVICO
     * const FRO_SERVICO = await prisma.fRO_SERVICO.delete({
     *   where: {
     *     // ... filter to delete one FRO_SERVICO
     *   }
     * })
     * 
    **/
    delete<T extends FRO_SERVICODeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_SERVICODeleteArgs<ExtArgs>>
    ): Prisma__FRO_SERVICOClient<$Result.GetResult<Prisma.$FRO_SERVICOPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FRO_SERVICO.
     * @param {FRO_SERVICOUpdateArgs} args - Arguments to update one FRO_SERVICO.
     * @example
     * // Update one FRO_SERVICO
     * const fRO_SERVICO = await prisma.fRO_SERVICO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FRO_SERVICOUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_SERVICOUpdateArgs<ExtArgs>>
    ): Prisma__FRO_SERVICOClient<$Result.GetResult<Prisma.$FRO_SERVICOPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FRO_SERVICOS.
     * @param {FRO_SERVICODeleteManyArgs} args - Arguments to filter FRO_SERVICOS to delete.
     * @example
     * // Delete a few FRO_SERVICOS
     * const { count } = await prisma.fRO_SERVICO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FRO_SERVICODeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_SERVICODeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FRO_SERVICOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_SERVICOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FRO_SERVICOS
     * const fRO_SERVICO = await prisma.fRO_SERVICO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FRO_SERVICOUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_SERVICOUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FRO_SERVICO.
     * @param {FRO_SERVICOUpsertArgs} args - Arguments to update or create a FRO_SERVICO.
     * @example
     * // Update or create a FRO_SERVICO
     * const fRO_SERVICO = await prisma.fRO_SERVICO.upsert({
     *   create: {
     *     // ... data to create a FRO_SERVICO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FRO_SERVICO we want to update
     *   }
     * })
    **/
    upsert<T extends FRO_SERVICOUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_SERVICOUpsertArgs<ExtArgs>>
    ): Prisma__FRO_SERVICOClient<$Result.GetResult<Prisma.$FRO_SERVICOPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FRO_SERVICOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_SERVICOCountArgs} args - Arguments to filter FRO_SERVICOS to count.
     * @example
     * // Count the number of FRO_SERVICOS
     * const count = await prisma.fRO_SERVICO.count({
     *   where: {
     *     // ... the filter for the FRO_SERVICOS we want to count
     *   }
     * })
    **/
    count<T extends FRO_SERVICOCountArgs>(
      args?: Subset<T, FRO_SERVICOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FRO_SERVICOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FRO_SERVICO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_SERVICOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FRO_SERVICOAggregateArgs>(args: Subset<T, FRO_SERVICOAggregateArgs>): Prisma.PrismaPromise<GetFRO_SERVICOAggregateType<T>>

    /**
     * Group by FRO_SERVICO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_SERVICOGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FRO_SERVICOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FRO_SERVICOGroupByArgs['orderBy'] }
        : { orderBy?: FRO_SERVICOGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FRO_SERVICOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFRO_SERVICOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FRO_SERVICO model
   */
  readonly fields: FRO_SERVICOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FRO_SERVICO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FRO_SERVICOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FRO_SERVICO model
   */ 
  interface FRO_SERVICOFieldRefs {
    readonly SER_SEQ: FieldRef<"FRO_SERVICO", 'Int'>
    readonly SER_DATA_INICIO: FieldRef<"FRO_SERVICO", 'DateTime'>
    readonly SER_DATA_FIM: FieldRef<"FRO_SERVICO", 'DateTime'>
    readonly SER_DESTINO: FieldRef<"FRO_SERVICO", 'String'>
    readonly SER_MOTIVO: FieldRef<"FRO_SERVICO", 'String'>
    readonly USER_NAME: FieldRef<"FRO_SERVICO", 'String'>
    readonly MAQ_NAME: FieldRef<"FRO_SERVICO", 'String'>
    readonly DATA_HORA: FieldRef<"FRO_SERVICO", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * FRO_SERVICO findUnique
   */
  export type FRO_SERVICOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_SERVICO
     */
    select?: FRO_SERVICOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_SERVICO to fetch.
     */
    where: FRO_SERVICOWhereUniqueInput
  }


  /**
   * FRO_SERVICO findUniqueOrThrow
   */
  export type FRO_SERVICOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_SERVICO
     */
    select?: FRO_SERVICOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_SERVICO to fetch.
     */
    where: FRO_SERVICOWhereUniqueInput
  }


  /**
   * FRO_SERVICO findFirst
   */
  export type FRO_SERVICOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_SERVICO
     */
    select?: FRO_SERVICOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_SERVICO to fetch.
     */
    where?: FRO_SERVICOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_SERVICOS to fetch.
     */
    orderBy?: FRO_SERVICOOrderByWithRelationInput | FRO_SERVICOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FRO_SERVICOS.
     */
    cursor?: FRO_SERVICOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_SERVICOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_SERVICOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FRO_SERVICOS.
     */
    distinct?: FRO_SERVICOScalarFieldEnum | FRO_SERVICOScalarFieldEnum[]
  }


  /**
   * FRO_SERVICO findFirstOrThrow
   */
  export type FRO_SERVICOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_SERVICO
     */
    select?: FRO_SERVICOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_SERVICO to fetch.
     */
    where?: FRO_SERVICOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_SERVICOS to fetch.
     */
    orderBy?: FRO_SERVICOOrderByWithRelationInput | FRO_SERVICOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FRO_SERVICOS.
     */
    cursor?: FRO_SERVICOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_SERVICOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_SERVICOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FRO_SERVICOS.
     */
    distinct?: FRO_SERVICOScalarFieldEnum | FRO_SERVICOScalarFieldEnum[]
  }


  /**
   * FRO_SERVICO findMany
   */
  export type FRO_SERVICOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_SERVICO
     */
    select?: FRO_SERVICOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_SERVICOS to fetch.
     */
    where?: FRO_SERVICOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_SERVICOS to fetch.
     */
    orderBy?: FRO_SERVICOOrderByWithRelationInput | FRO_SERVICOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FRO_SERVICOS.
     */
    cursor?: FRO_SERVICOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_SERVICOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_SERVICOS.
     */
    skip?: number
    distinct?: FRO_SERVICOScalarFieldEnum | FRO_SERVICOScalarFieldEnum[]
  }


  /**
   * FRO_SERVICO create
   */
  export type FRO_SERVICOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_SERVICO
     */
    select?: FRO_SERVICOSelect<ExtArgs> | null
    /**
     * The data needed to create a FRO_SERVICO.
     */
    data?: XOR<FRO_SERVICOCreateInput, FRO_SERVICOUncheckedCreateInput>
  }


  /**
   * FRO_SERVICO createMany
   */
  export type FRO_SERVICOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FRO_SERVICOS.
     */
    data: FRO_SERVICOCreateManyInput | FRO_SERVICOCreateManyInput[]
  }


  /**
   * FRO_SERVICO update
   */
  export type FRO_SERVICOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_SERVICO
     */
    select?: FRO_SERVICOSelect<ExtArgs> | null
    /**
     * The data needed to update a FRO_SERVICO.
     */
    data: XOR<FRO_SERVICOUpdateInput, FRO_SERVICOUncheckedUpdateInput>
    /**
     * Choose, which FRO_SERVICO to update.
     */
    where: FRO_SERVICOWhereUniqueInput
  }


  /**
   * FRO_SERVICO updateMany
   */
  export type FRO_SERVICOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FRO_SERVICOS.
     */
    data: XOR<FRO_SERVICOUpdateManyMutationInput, FRO_SERVICOUncheckedUpdateManyInput>
    /**
     * Filter which FRO_SERVICOS to update
     */
    where?: FRO_SERVICOWhereInput
  }


  /**
   * FRO_SERVICO upsert
   */
  export type FRO_SERVICOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_SERVICO
     */
    select?: FRO_SERVICOSelect<ExtArgs> | null
    /**
     * The filter to search for the FRO_SERVICO to update in case it exists.
     */
    where: FRO_SERVICOWhereUniqueInput
    /**
     * In case the FRO_SERVICO found by the `where` argument doesn't exist, create a new FRO_SERVICO with this data.
     */
    create: XOR<FRO_SERVICOCreateInput, FRO_SERVICOUncheckedCreateInput>
    /**
     * In case the FRO_SERVICO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FRO_SERVICOUpdateInput, FRO_SERVICOUncheckedUpdateInput>
  }


  /**
   * FRO_SERVICO delete
   */
  export type FRO_SERVICODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_SERVICO
     */
    select?: FRO_SERVICOSelect<ExtArgs> | null
    /**
     * Filter which FRO_SERVICO to delete.
     */
    where: FRO_SERVICOWhereUniqueInput
  }


  /**
   * FRO_SERVICO deleteMany
   */
  export type FRO_SERVICODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FRO_SERVICOS to delete
     */
    where?: FRO_SERVICOWhereInput
  }


  /**
   * FRO_SERVICO without action
   */
  export type FRO_SERVICODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_SERVICO
     */
    select?: FRO_SERVICOSelect<ExtArgs> | null
  }



  /**
   * Model FRO_VEICULO
   */

  export type AggregateFRO_VEICULO = {
    _count: FRO_VEICULOCountAggregateOutputType | null
    _avg: FRO_VEICULOAvgAggregateOutputType | null
    _sum: FRO_VEICULOSumAggregateOutputType | null
    _min: FRO_VEICULOMinAggregateOutputType | null
    _max: FRO_VEICULOMaxAggregateOutputType | null
  }

  export type FRO_VEICULOAvgAggregateOutputType = {
    VEI_SEQ: number | null
    VEI_KM: number | null
  }

  export type FRO_VEICULOSumAggregateOutputType = {
    VEI_SEQ: number | null
    VEI_KM: number | null
  }

  export type FRO_VEICULOMinAggregateOutputType = {
    VEI_SEQ: number | null
    VEI_PLACA: string | null
    VEI_MARCA: string | null
    VEI_MODELO: string | null
    VEI_COR: string | null
    VEI_FOTO: string | null
    VEI_DETALHES: string | null
    VEI_KM: number | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
  }

  export type FRO_VEICULOMaxAggregateOutputType = {
    VEI_SEQ: number | null
    VEI_PLACA: string | null
    VEI_MARCA: string | null
    VEI_MODELO: string | null
    VEI_COR: string | null
    VEI_FOTO: string | null
    VEI_DETALHES: string | null
    VEI_KM: number | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
  }

  export type FRO_VEICULOCountAggregateOutputType = {
    VEI_SEQ: number
    VEI_PLACA: number
    VEI_MARCA: number
    VEI_MODELO: number
    VEI_COR: number
    VEI_FOTO: number
    VEI_DETALHES: number
    VEI_KM: number
    USER_NAME: number
    MAQ_NAME: number
    DATA_HORA: number
    _all: number
  }


  export type FRO_VEICULOAvgAggregateInputType = {
    VEI_SEQ?: true
    VEI_KM?: true
  }

  export type FRO_VEICULOSumAggregateInputType = {
    VEI_SEQ?: true
    VEI_KM?: true
  }

  export type FRO_VEICULOMinAggregateInputType = {
    VEI_SEQ?: true
    VEI_PLACA?: true
    VEI_MARCA?: true
    VEI_MODELO?: true
    VEI_COR?: true
    VEI_FOTO?: true
    VEI_DETALHES?: true
    VEI_KM?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
  }

  export type FRO_VEICULOMaxAggregateInputType = {
    VEI_SEQ?: true
    VEI_PLACA?: true
    VEI_MARCA?: true
    VEI_MODELO?: true
    VEI_COR?: true
    VEI_FOTO?: true
    VEI_DETALHES?: true
    VEI_KM?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
  }

  export type FRO_VEICULOCountAggregateInputType = {
    VEI_SEQ?: true
    VEI_PLACA?: true
    VEI_MARCA?: true
    VEI_MODELO?: true
    VEI_COR?: true
    VEI_FOTO?: true
    VEI_DETALHES?: true
    VEI_KM?: true
    USER_NAME?: true
    MAQ_NAME?: true
    DATA_HORA?: true
    _all?: true
  }

  export type FRO_VEICULOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FRO_VEICULO to aggregate.
     */
    where?: FRO_VEICULOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_VEICULOS to fetch.
     */
    orderBy?: FRO_VEICULOOrderByWithRelationInput | FRO_VEICULOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FRO_VEICULOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_VEICULOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_VEICULOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FRO_VEICULOS
    **/
    _count?: true | FRO_VEICULOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FRO_VEICULOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FRO_VEICULOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FRO_VEICULOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FRO_VEICULOMaxAggregateInputType
  }

  export type GetFRO_VEICULOAggregateType<T extends FRO_VEICULOAggregateArgs> = {
        [P in keyof T & keyof AggregateFRO_VEICULO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFRO_VEICULO[P]>
      : GetScalarType<T[P], AggregateFRO_VEICULO[P]>
  }




  export type FRO_VEICULOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FRO_VEICULOWhereInput
    orderBy?: FRO_VEICULOOrderByWithAggregationInput | FRO_VEICULOOrderByWithAggregationInput[]
    by: FRO_VEICULOScalarFieldEnum[] | FRO_VEICULOScalarFieldEnum
    having?: FRO_VEICULOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FRO_VEICULOCountAggregateInputType | true
    _avg?: FRO_VEICULOAvgAggregateInputType
    _sum?: FRO_VEICULOSumAggregateInputType
    _min?: FRO_VEICULOMinAggregateInputType
    _max?: FRO_VEICULOMaxAggregateInputType
  }

  export type FRO_VEICULOGroupByOutputType = {
    VEI_SEQ: number
    VEI_PLACA: string | null
    VEI_MARCA: string | null
    VEI_MODELO: string | null
    VEI_COR: string | null
    VEI_FOTO: string | null
    VEI_DETALHES: string | null
    VEI_KM: number | null
    USER_NAME: string | null
    MAQ_NAME: string | null
    DATA_HORA: Date | null
    _count: FRO_VEICULOCountAggregateOutputType | null
    _avg: FRO_VEICULOAvgAggregateOutputType | null
    _sum: FRO_VEICULOSumAggregateOutputType | null
    _min: FRO_VEICULOMinAggregateOutputType | null
    _max: FRO_VEICULOMaxAggregateOutputType | null
  }

  type GetFRO_VEICULOGroupByPayload<T extends FRO_VEICULOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FRO_VEICULOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FRO_VEICULOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FRO_VEICULOGroupByOutputType[P]>
            : GetScalarType<T[P], FRO_VEICULOGroupByOutputType[P]>
        }
      >
    >


  export type FRO_VEICULOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    VEI_SEQ?: boolean
    VEI_PLACA?: boolean
    VEI_MARCA?: boolean
    VEI_MODELO?: boolean
    VEI_COR?: boolean
    VEI_FOTO?: boolean
    VEI_DETALHES?: boolean
    VEI_KM?: boolean
    USER_NAME?: boolean
    MAQ_NAME?: boolean
    DATA_HORA?: boolean
  }, ExtArgs["result"]["fRO_VEICULO"]>

  export type FRO_VEICULOSelectScalar = {
    VEI_SEQ?: boolean
    VEI_PLACA?: boolean
    VEI_MARCA?: boolean
    VEI_MODELO?: boolean
    VEI_COR?: boolean
    VEI_FOTO?: boolean
    VEI_DETALHES?: boolean
    VEI_KM?: boolean
    USER_NAME?: boolean
    MAQ_NAME?: boolean
    DATA_HORA?: boolean
  }


  export type $FRO_VEICULOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FRO_VEICULO"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      VEI_SEQ: number
      VEI_PLACA: string | null
      VEI_MARCA: string | null
      VEI_MODELO: string | null
      VEI_COR: string | null
      VEI_FOTO: string | null
      VEI_DETALHES: string | null
      VEI_KM: number | null
      USER_NAME: string | null
      MAQ_NAME: string | null
      DATA_HORA: Date | null
    }, ExtArgs["result"]["fRO_VEICULO"]>
    composites: {}
  }


  type FRO_VEICULOGetPayload<S extends boolean | null | undefined | FRO_VEICULODefaultArgs> = $Result.GetResult<Prisma.$FRO_VEICULOPayload, S>

  type FRO_VEICULOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FRO_VEICULOFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FRO_VEICULOCountAggregateInputType | true
    }

  export interface FRO_VEICULODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FRO_VEICULO'], meta: { name: 'FRO_VEICULO' } }
    /**
     * Find zero or one FRO_VEICULO that matches the filter.
     * @param {FRO_VEICULOFindUniqueArgs} args - Arguments to find a FRO_VEICULO
     * @example
     * // Get one FRO_VEICULO
     * const fRO_VEICULO = await prisma.fRO_VEICULO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FRO_VEICULOFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_VEICULOFindUniqueArgs<ExtArgs>>
    ): Prisma__FRO_VEICULOClient<$Result.GetResult<Prisma.$FRO_VEICULOPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FRO_VEICULO that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FRO_VEICULOFindUniqueOrThrowArgs} args - Arguments to find a FRO_VEICULO
     * @example
     * // Get one FRO_VEICULO
     * const fRO_VEICULO = await prisma.fRO_VEICULO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FRO_VEICULOFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_VEICULOFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FRO_VEICULOClient<$Result.GetResult<Prisma.$FRO_VEICULOPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FRO_VEICULO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_VEICULOFindFirstArgs} args - Arguments to find a FRO_VEICULO
     * @example
     * // Get one FRO_VEICULO
     * const fRO_VEICULO = await prisma.fRO_VEICULO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FRO_VEICULOFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_VEICULOFindFirstArgs<ExtArgs>>
    ): Prisma__FRO_VEICULOClient<$Result.GetResult<Prisma.$FRO_VEICULOPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FRO_VEICULO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_VEICULOFindFirstOrThrowArgs} args - Arguments to find a FRO_VEICULO
     * @example
     * // Get one FRO_VEICULO
     * const fRO_VEICULO = await prisma.fRO_VEICULO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FRO_VEICULOFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_VEICULOFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FRO_VEICULOClient<$Result.GetResult<Prisma.$FRO_VEICULOPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FRO_VEICULOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_VEICULOFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FRO_VEICULOS
     * const fRO_VEICULOS = await prisma.fRO_VEICULO.findMany()
     * 
     * // Get first 10 FRO_VEICULOS
     * const fRO_VEICULOS = await prisma.fRO_VEICULO.findMany({ take: 10 })
     * 
     * // Only select the `VEI_SEQ`
     * const fRO_VEICULOWithVEI_SEQOnly = await prisma.fRO_VEICULO.findMany({ select: { VEI_SEQ: true } })
     * 
    **/
    findMany<T extends FRO_VEICULOFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_VEICULOFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FRO_VEICULOPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FRO_VEICULO.
     * @param {FRO_VEICULOCreateArgs} args - Arguments to create a FRO_VEICULO.
     * @example
     * // Create one FRO_VEICULO
     * const FRO_VEICULO = await prisma.fRO_VEICULO.create({
     *   data: {
     *     // ... data to create a FRO_VEICULO
     *   }
     * })
     * 
    **/
    create<T extends FRO_VEICULOCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_VEICULOCreateArgs<ExtArgs>>
    ): Prisma__FRO_VEICULOClient<$Result.GetResult<Prisma.$FRO_VEICULOPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FRO_VEICULOS.
     *     @param {FRO_VEICULOCreateManyArgs} args - Arguments to create many FRO_VEICULOS.
     *     @example
     *     // Create many FRO_VEICULOS
     *     const fRO_VEICULO = await prisma.fRO_VEICULO.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FRO_VEICULOCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_VEICULOCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FRO_VEICULO.
     * @param {FRO_VEICULODeleteArgs} args - Arguments to delete one FRO_VEICULO.
     * @example
     * // Delete one FRO_VEICULO
     * const FRO_VEICULO = await prisma.fRO_VEICULO.delete({
     *   where: {
     *     // ... filter to delete one FRO_VEICULO
     *   }
     * })
     * 
    **/
    delete<T extends FRO_VEICULODeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_VEICULODeleteArgs<ExtArgs>>
    ): Prisma__FRO_VEICULOClient<$Result.GetResult<Prisma.$FRO_VEICULOPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FRO_VEICULO.
     * @param {FRO_VEICULOUpdateArgs} args - Arguments to update one FRO_VEICULO.
     * @example
     * // Update one FRO_VEICULO
     * const fRO_VEICULO = await prisma.fRO_VEICULO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FRO_VEICULOUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_VEICULOUpdateArgs<ExtArgs>>
    ): Prisma__FRO_VEICULOClient<$Result.GetResult<Prisma.$FRO_VEICULOPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FRO_VEICULOS.
     * @param {FRO_VEICULODeleteManyArgs} args - Arguments to filter FRO_VEICULOS to delete.
     * @example
     * // Delete a few FRO_VEICULOS
     * const { count } = await prisma.fRO_VEICULO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FRO_VEICULODeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FRO_VEICULODeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FRO_VEICULOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_VEICULOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FRO_VEICULOS
     * const fRO_VEICULO = await prisma.fRO_VEICULO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FRO_VEICULOUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_VEICULOUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FRO_VEICULO.
     * @param {FRO_VEICULOUpsertArgs} args - Arguments to update or create a FRO_VEICULO.
     * @example
     * // Update or create a FRO_VEICULO
     * const fRO_VEICULO = await prisma.fRO_VEICULO.upsert({
     *   create: {
     *     // ... data to create a FRO_VEICULO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FRO_VEICULO we want to update
     *   }
     * })
    **/
    upsert<T extends FRO_VEICULOUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FRO_VEICULOUpsertArgs<ExtArgs>>
    ): Prisma__FRO_VEICULOClient<$Result.GetResult<Prisma.$FRO_VEICULOPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FRO_VEICULOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_VEICULOCountArgs} args - Arguments to filter FRO_VEICULOS to count.
     * @example
     * // Count the number of FRO_VEICULOS
     * const count = await prisma.fRO_VEICULO.count({
     *   where: {
     *     // ... the filter for the FRO_VEICULOS we want to count
     *   }
     * })
    **/
    count<T extends FRO_VEICULOCountArgs>(
      args?: Subset<T, FRO_VEICULOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FRO_VEICULOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FRO_VEICULO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_VEICULOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FRO_VEICULOAggregateArgs>(args: Subset<T, FRO_VEICULOAggregateArgs>): Prisma.PrismaPromise<GetFRO_VEICULOAggregateType<T>>

    /**
     * Group by FRO_VEICULO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRO_VEICULOGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FRO_VEICULOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FRO_VEICULOGroupByArgs['orderBy'] }
        : { orderBy?: FRO_VEICULOGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FRO_VEICULOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFRO_VEICULOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FRO_VEICULO model
   */
  readonly fields: FRO_VEICULOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FRO_VEICULO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FRO_VEICULOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FRO_VEICULO model
   */ 
  interface FRO_VEICULOFieldRefs {
    readonly VEI_SEQ: FieldRef<"FRO_VEICULO", 'Int'>
    readonly VEI_PLACA: FieldRef<"FRO_VEICULO", 'String'>
    readonly VEI_MARCA: FieldRef<"FRO_VEICULO", 'String'>
    readonly VEI_MODELO: FieldRef<"FRO_VEICULO", 'String'>
    readonly VEI_COR: FieldRef<"FRO_VEICULO", 'String'>
    readonly VEI_FOTO: FieldRef<"FRO_VEICULO", 'String'>
    readonly VEI_DETALHES: FieldRef<"FRO_VEICULO", 'String'>
    readonly VEI_KM: FieldRef<"FRO_VEICULO", 'Int'>
    readonly USER_NAME: FieldRef<"FRO_VEICULO", 'String'>
    readonly MAQ_NAME: FieldRef<"FRO_VEICULO", 'String'>
    readonly DATA_HORA: FieldRef<"FRO_VEICULO", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * FRO_VEICULO findUnique
   */
  export type FRO_VEICULOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_VEICULO
     */
    select?: FRO_VEICULOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_VEICULO to fetch.
     */
    where: FRO_VEICULOWhereUniqueInput
  }


  /**
   * FRO_VEICULO findUniqueOrThrow
   */
  export type FRO_VEICULOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_VEICULO
     */
    select?: FRO_VEICULOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_VEICULO to fetch.
     */
    where: FRO_VEICULOWhereUniqueInput
  }


  /**
   * FRO_VEICULO findFirst
   */
  export type FRO_VEICULOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_VEICULO
     */
    select?: FRO_VEICULOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_VEICULO to fetch.
     */
    where?: FRO_VEICULOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_VEICULOS to fetch.
     */
    orderBy?: FRO_VEICULOOrderByWithRelationInput | FRO_VEICULOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FRO_VEICULOS.
     */
    cursor?: FRO_VEICULOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_VEICULOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_VEICULOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FRO_VEICULOS.
     */
    distinct?: FRO_VEICULOScalarFieldEnum | FRO_VEICULOScalarFieldEnum[]
  }


  /**
   * FRO_VEICULO findFirstOrThrow
   */
  export type FRO_VEICULOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_VEICULO
     */
    select?: FRO_VEICULOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_VEICULO to fetch.
     */
    where?: FRO_VEICULOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_VEICULOS to fetch.
     */
    orderBy?: FRO_VEICULOOrderByWithRelationInput | FRO_VEICULOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FRO_VEICULOS.
     */
    cursor?: FRO_VEICULOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_VEICULOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_VEICULOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FRO_VEICULOS.
     */
    distinct?: FRO_VEICULOScalarFieldEnum | FRO_VEICULOScalarFieldEnum[]
  }


  /**
   * FRO_VEICULO findMany
   */
  export type FRO_VEICULOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_VEICULO
     */
    select?: FRO_VEICULOSelect<ExtArgs> | null
    /**
     * Filter, which FRO_VEICULOS to fetch.
     */
    where?: FRO_VEICULOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRO_VEICULOS to fetch.
     */
    orderBy?: FRO_VEICULOOrderByWithRelationInput | FRO_VEICULOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FRO_VEICULOS.
     */
    cursor?: FRO_VEICULOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRO_VEICULOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRO_VEICULOS.
     */
    skip?: number
    distinct?: FRO_VEICULOScalarFieldEnum | FRO_VEICULOScalarFieldEnum[]
  }


  /**
   * FRO_VEICULO create
   */
  export type FRO_VEICULOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_VEICULO
     */
    select?: FRO_VEICULOSelect<ExtArgs> | null
    /**
     * The data needed to create a FRO_VEICULO.
     */
    data?: XOR<FRO_VEICULOCreateInput, FRO_VEICULOUncheckedCreateInput>
  }


  /**
   * FRO_VEICULO createMany
   */
  export type FRO_VEICULOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FRO_VEICULOS.
     */
    data: FRO_VEICULOCreateManyInput | FRO_VEICULOCreateManyInput[]
  }


  /**
   * FRO_VEICULO update
   */
  export type FRO_VEICULOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_VEICULO
     */
    select?: FRO_VEICULOSelect<ExtArgs> | null
    /**
     * The data needed to update a FRO_VEICULO.
     */
    data: XOR<FRO_VEICULOUpdateInput, FRO_VEICULOUncheckedUpdateInput>
    /**
     * Choose, which FRO_VEICULO to update.
     */
    where: FRO_VEICULOWhereUniqueInput
  }


  /**
   * FRO_VEICULO updateMany
   */
  export type FRO_VEICULOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FRO_VEICULOS.
     */
    data: XOR<FRO_VEICULOUpdateManyMutationInput, FRO_VEICULOUncheckedUpdateManyInput>
    /**
     * Filter which FRO_VEICULOS to update
     */
    where?: FRO_VEICULOWhereInput
  }


  /**
   * FRO_VEICULO upsert
   */
  export type FRO_VEICULOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_VEICULO
     */
    select?: FRO_VEICULOSelect<ExtArgs> | null
    /**
     * The filter to search for the FRO_VEICULO to update in case it exists.
     */
    where: FRO_VEICULOWhereUniqueInput
    /**
     * In case the FRO_VEICULO found by the `where` argument doesn't exist, create a new FRO_VEICULO with this data.
     */
    create: XOR<FRO_VEICULOCreateInput, FRO_VEICULOUncheckedCreateInput>
    /**
     * In case the FRO_VEICULO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FRO_VEICULOUpdateInput, FRO_VEICULOUncheckedUpdateInput>
  }


  /**
   * FRO_VEICULO delete
   */
  export type FRO_VEICULODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_VEICULO
     */
    select?: FRO_VEICULOSelect<ExtArgs> | null
    /**
     * Filter which FRO_VEICULO to delete.
     */
    where: FRO_VEICULOWhereUniqueInput
  }


  /**
   * FRO_VEICULO deleteMany
   */
  export type FRO_VEICULODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FRO_VEICULOS to delete
     */
    where?: FRO_VEICULOWhereInput
  }


  /**
   * FRO_VEICULO without action
   */
  export type FRO_VEICULODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRO_VEICULO
     */
    select?: FRO_VEICULOSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FRO_ABASTECIMENTOScalarFieldEnum: {
    ABA_SEQ: 'ABA_SEQ',
    ABA_VEI_SEQ: 'ABA_VEI_SEQ',
    ABA_VALOR: 'ABA_VALOR',
    ABA_DATA: 'ABA_DATA',
    USER_NAME: 'USER_NAME',
    MAQ_NAME: 'MAQ_NAME',
    DATA_HORA: 'DATA_HORA'
  };

  export type FRO_ABASTECIMENTOScalarFieldEnum = (typeof FRO_ABASTECIMENTOScalarFieldEnum)[keyof typeof FRO_ABASTECIMENTOScalarFieldEnum]


  export const FRO_DOCUMENTOScalarFieldEnum: {
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

  export type FRO_DOCUMENTOScalarFieldEnum = (typeof FRO_DOCUMENTOScalarFieldEnum)[keyof typeof FRO_DOCUMENTOScalarFieldEnum]


  export const FRO_MANUTENCAOScalarFieldEnum: {
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

  export type FRO_MANUTENCAOScalarFieldEnum = (typeof FRO_MANUTENCAOScalarFieldEnum)[keyof typeof FRO_MANUTENCAOScalarFieldEnum]


  export const FRO_OCORRENCIAScalarFieldEnum: {
    OCO_SEQ: 'OCO_SEQ',
    OCO_VEI_SEQ: 'OCO_VEI_SEQ',
    OCO_DATA: 'OCO_DATA',
    OCO_DESCRICAO: 'OCO_DESCRICAO',
    OCO_SOLUCAO: 'OCO_SOLUCAO',
    USER_NAME: 'USER_NAME',
    MAQ_NAME: 'MAQ_NAME',
    DATA_HORA: 'DATA_HORA'
  };

  export type FRO_OCORRENCIAScalarFieldEnum = (typeof FRO_OCORRENCIAScalarFieldEnum)[keyof typeof FRO_OCORRENCIAScalarFieldEnum]


  export const FRO_SERVICOScalarFieldEnum: {
    SER_SEQ: 'SER_SEQ',
    SER_DATA_INICIO: 'SER_DATA_INICIO',
    SER_DATA_FIM: 'SER_DATA_FIM',
    SER_DESTINO: 'SER_DESTINO',
    SER_MOTIVO: 'SER_MOTIVO',
    USER_NAME: 'USER_NAME',
    MAQ_NAME: 'MAQ_NAME',
    DATA_HORA: 'DATA_HORA'
  };

  export type FRO_SERVICOScalarFieldEnum = (typeof FRO_SERVICOScalarFieldEnum)[keyof typeof FRO_SERVICOScalarFieldEnum]


  export const FRO_VEICULOScalarFieldEnum: {
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

  export type FRO_VEICULOScalarFieldEnum = (typeof FRO_VEICULOScalarFieldEnum)[keyof typeof FRO_VEICULOScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    
  /**
   * Deep Input Types
   */


  export type FRO_ABASTECIMENTOWhereInput = {
    AND?: FRO_ABASTECIMENTOWhereInput | FRO_ABASTECIMENTOWhereInput[]
    OR?: FRO_ABASTECIMENTOWhereInput[]
    NOT?: FRO_ABASTECIMENTOWhereInput | FRO_ABASTECIMENTOWhereInput[]
    ABA_SEQ?: IntFilter<"FRO_ABASTECIMENTO"> | number
    ABA_VEI_SEQ?: IntNullableFilter<"FRO_ABASTECIMENTO"> | number | null
    ABA_VALOR?: FloatNullableFilter<"FRO_ABASTECIMENTO"> | number | null
    ABA_DATA?: DateTimeNullableFilter<"FRO_ABASTECIMENTO"> | Date | string | null
    USER_NAME?: StringNullableFilter<"FRO_ABASTECIMENTO"> | string | null
    MAQ_NAME?: StringNullableFilter<"FRO_ABASTECIMENTO"> | string | null
    DATA_HORA?: DateTimeNullableFilter<"FRO_ABASTECIMENTO"> | Date | string | null
  }

  export type FRO_ABASTECIMENTOOrderByWithRelationInput = {
    ABA_SEQ?: SortOrder
    ABA_VEI_SEQ?: SortOrderInput | SortOrder
    ABA_VALOR?: SortOrderInput | SortOrder
    ABA_DATA?: SortOrderInput | SortOrder
    USER_NAME?: SortOrderInput | SortOrder
    MAQ_NAME?: SortOrderInput | SortOrder
    DATA_HORA?: SortOrderInput | SortOrder
  }

  export type FRO_ABASTECIMENTOWhereUniqueInput = Prisma.AtLeast<{
    ABA_SEQ?: number
    AND?: FRO_ABASTECIMENTOWhereInput | FRO_ABASTECIMENTOWhereInput[]
    OR?: FRO_ABASTECIMENTOWhereInput[]
    NOT?: FRO_ABASTECIMENTOWhereInput | FRO_ABASTECIMENTOWhereInput[]
    ABA_VEI_SEQ?: IntNullableFilter<"FRO_ABASTECIMENTO"> | number | null
    ABA_VALOR?: FloatNullableFilter<"FRO_ABASTECIMENTO"> | number | null
    ABA_DATA?: DateTimeNullableFilter<"FRO_ABASTECIMENTO"> | Date | string | null
    USER_NAME?: StringNullableFilter<"FRO_ABASTECIMENTO"> | string | null
    MAQ_NAME?: StringNullableFilter<"FRO_ABASTECIMENTO"> | string | null
    DATA_HORA?: DateTimeNullableFilter<"FRO_ABASTECIMENTO"> | Date | string | null
  }, "ABA_SEQ">

  export type FRO_ABASTECIMENTOOrderByWithAggregationInput = {
    ABA_SEQ?: SortOrder
    ABA_VEI_SEQ?: SortOrderInput | SortOrder
    ABA_VALOR?: SortOrderInput | SortOrder
    ABA_DATA?: SortOrderInput | SortOrder
    USER_NAME?: SortOrderInput | SortOrder
    MAQ_NAME?: SortOrderInput | SortOrder
    DATA_HORA?: SortOrderInput | SortOrder
    _count?: FRO_ABASTECIMENTOCountOrderByAggregateInput
    _avg?: FRO_ABASTECIMENTOAvgOrderByAggregateInput
    _max?: FRO_ABASTECIMENTOMaxOrderByAggregateInput
    _min?: FRO_ABASTECIMENTOMinOrderByAggregateInput
    _sum?: FRO_ABASTECIMENTOSumOrderByAggregateInput
  }

  export type FRO_ABASTECIMENTOScalarWhereWithAggregatesInput = {
    AND?: FRO_ABASTECIMENTOScalarWhereWithAggregatesInput | FRO_ABASTECIMENTOScalarWhereWithAggregatesInput[]
    OR?: FRO_ABASTECIMENTOScalarWhereWithAggregatesInput[]
    NOT?: FRO_ABASTECIMENTOScalarWhereWithAggregatesInput | FRO_ABASTECIMENTOScalarWhereWithAggregatesInput[]
    ABA_SEQ?: IntWithAggregatesFilter<"FRO_ABASTECIMENTO"> | number
    ABA_VEI_SEQ?: IntNullableWithAggregatesFilter<"FRO_ABASTECIMENTO"> | number | null
    ABA_VALOR?: FloatNullableWithAggregatesFilter<"FRO_ABASTECIMENTO"> | number | null
    ABA_DATA?: DateTimeNullableWithAggregatesFilter<"FRO_ABASTECIMENTO"> | Date | string | null
    USER_NAME?: StringNullableWithAggregatesFilter<"FRO_ABASTECIMENTO"> | string | null
    MAQ_NAME?: StringNullableWithAggregatesFilter<"FRO_ABASTECIMENTO"> | string | null
    DATA_HORA?: DateTimeNullableWithAggregatesFilter<"FRO_ABASTECIMENTO"> | Date | string | null
  }

  export type FRO_DOCUMENTOWhereInput = {
    AND?: FRO_DOCUMENTOWhereInput | FRO_DOCUMENTOWhereInput[]
    OR?: FRO_DOCUMENTOWhereInput[]
    NOT?: FRO_DOCUMENTOWhereInput | FRO_DOCUMENTOWhereInput[]
    DOC_SEQ?: IntFilter<"FRO_DOCUMENTO"> | number
    DOC_VEI_SEQ?: IntFilter<"FRO_DOCUMENTO"> | number
    DOC_TIPO?: IntNullableFilter<"FRO_DOCUMENTO"> | number | null
    DOC_NUMERO?: StringNullableFilter<"FRO_DOCUMENTO"> | string | null
    DOC_VALIDADE?: DateTimeNullableFilter<"FRO_DOCUMENTO"> | Date | string | null
    DOC_VALOR?: FloatNullableFilter<"FRO_DOCUMENTO"> | number | null
    USER_NAME?: StringNullableFilter<"FRO_DOCUMENTO"> | string | null
    MAQ_NAME?: StringNullableFilter<"FRO_DOCUMENTO"> | string | null
    DATA_HORA?: DateTimeNullableFilter<"FRO_DOCUMENTO"> | Date | string | null
  }

  export type FRO_DOCUMENTOOrderByWithRelationInput = {
    DOC_SEQ?: SortOrder
    DOC_VEI_SEQ?: SortOrder
    DOC_TIPO?: SortOrderInput | SortOrder
    DOC_NUMERO?: SortOrderInput | SortOrder
    DOC_VALIDADE?: SortOrderInput | SortOrder
    DOC_VALOR?: SortOrderInput | SortOrder
    USER_NAME?: SortOrderInput | SortOrder
    MAQ_NAME?: SortOrderInput | SortOrder
    DATA_HORA?: SortOrderInput | SortOrder
  }

  export type FRO_DOCUMENTOWhereUniqueInput = Prisma.AtLeast<{
    DOC_SEQ?: number
    AND?: FRO_DOCUMENTOWhereInput | FRO_DOCUMENTOWhereInput[]
    OR?: FRO_DOCUMENTOWhereInput[]
    NOT?: FRO_DOCUMENTOWhereInput | FRO_DOCUMENTOWhereInput[]
    DOC_VEI_SEQ?: IntFilter<"FRO_DOCUMENTO"> | number
    DOC_TIPO?: IntNullableFilter<"FRO_DOCUMENTO"> | number | null
    DOC_NUMERO?: StringNullableFilter<"FRO_DOCUMENTO"> | string | null
    DOC_VALIDADE?: DateTimeNullableFilter<"FRO_DOCUMENTO"> | Date | string | null
    DOC_VALOR?: FloatNullableFilter<"FRO_DOCUMENTO"> | number | null
    USER_NAME?: StringNullableFilter<"FRO_DOCUMENTO"> | string | null
    MAQ_NAME?: StringNullableFilter<"FRO_DOCUMENTO"> | string | null
    DATA_HORA?: DateTimeNullableFilter<"FRO_DOCUMENTO"> | Date | string | null
  }, "DOC_SEQ">

  export type FRO_DOCUMENTOOrderByWithAggregationInput = {
    DOC_SEQ?: SortOrder
    DOC_VEI_SEQ?: SortOrder
    DOC_TIPO?: SortOrderInput | SortOrder
    DOC_NUMERO?: SortOrderInput | SortOrder
    DOC_VALIDADE?: SortOrderInput | SortOrder
    DOC_VALOR?: SortOrderInput | SortOrder
    USER_NAME?: SortOrderInput | SortOrder
    MAQ_NAME?: SortOrderInput | SortOrder
    DATA_HORA?: SortOrderInput | SortOrder
    _count?: FRO_DOCUMENTOCountOrderByAggregateInput
    _avg?: FRO_DOCUMENTOAvgOrderByAggregateInput
    _max?: FRO_DOCUMENTOMaxOrderByAggregateInput
    _min?: FRO_DOCUMENTOMinOrderByAggregateInput
    _sum?: FRO_DOCUMENTOSumOrderByAggregateInput
  }

  export type FRO_DOCUMENTOScalarWhereWithAggregatesInput = {
    AND?: FRO_DOCUMENTOScalarWhereWithAggregatesInput | FRO_DOCUMENTOScalarWhereWithAggregatesInput[]
    OR?: FRO_DOCUMENTOScalarWhereWithAggregatesInput[]
    NOT?: FRO_DOCUMENTOScalarWhereWithAggregatesInput | FRO_DOCUMENTOScalarWhereWithAggregatesInput[]
    DOC_SEQ?: IntWithAggregatesFilter<"FRO_DOCUMENTO"> | number
    DOC_VEI_SEQ?: IntWithAggregatesFilter<"FRO_DOCUMENTO"> | number
    DOC_TIPO?: IntNullableWithAggregatesFilter<"FRO_DOCUMENTO"> | number | null
    DOC_NUMERO?: StringNullableWithAggregatesFilter<"FRO_DOCUMENTO"> | string | null
    DOC_VALIDADE?: DateTimeNullableWithAggregatesFilter<"FRO_DOCUMENTO"> | Date | string | null
    DOC_VALOR?: FloatNullableWithAggregatesFilter<"FRO_DOCUMENTO"> | number | null
    USER_NAME?: StringNullableWithAggregatesFilter<"FRO_DOCUMENTO"> | string | null
    MAQ_NAME?: StringNullableWithAggregatesFilter<"FRO_DOCUMENTO"> | string | null
    DATA_HORA?: DateTimeNullableWithAggregatesFilter<"FRO_DOCUMENTO"> | Date | string | null
  }

  export type FRO_MANUTENCAOWhereInput = {
    AND?: FRO_MANUTENCAOWhereInput | FRO_MANUTENCAOWhereInput[]
    OR?: FRO_MANUTENCAOWhereInput[]
    NOT?: FRO_MANUTENCAOWhereInput | FRO_MANUTENCAOWhereInput[]
    MAN_SEQ?: IntFilter<"FRO_MANUTENCAO"> | number
    MAN_VEI_SEQ?: IntFilter<"FRO_MANUTENCAO"> | number
    MAN_DATA?: DateTimeNullableFilter<"FRO_MANUTENCAO"> | Date | string | null
    MAN_DEFEITO?: StringNullableFilter<"FRO_MANUTENCAO"> | string | null
    MAN_SOLUCAO?: StringNullableFilter<"FRO_MANUTENCAO"> | string | null
    MAN_VALOR?: FloatNullableFilter<"FRO_MANUTENCAO"> | number | null
    USER_NAME?: StringNullableFilter<"FRO_MANUTENCAO"> | string | null
    MAQ_NAME?: StringNullableFilter<"FRO_MANUTENCAO"> | string | null
    DATA_HORA?: DateTimeNullableFilter<"FRO_MANUTENCAO"> | Date | string | null
  }

  export type FRO_MANUTENCAOOrderByWithRelationInput = {
    MAN_SEQ?: SortOrder
    MAN_VEI_SEQ?: SortOrder
    MAN_DATA?: SortOrderInput | SortOrder
    MAN_DEFEITO?: SortOrderInput | SortOrder
    MAN_SOLUCAO?: SortOrderInput | SortOrder
    MAN_VALOR?: SortOrderInput | SortOrder
    USER_NAME?: SortOrderInput | SortOrder
    MAQ_NAME?: SortOrderInput | SortOrder
    DATA_HORA?: SortOrderInput | SortOrder
  }

  export type FRO_MANUTENCAOWhereUniqueInput = Prisma.AtLeast<{
    MAN_SEQ?: number
    AND?: FRO_MANUTENCAOWhereInput | FRO_MANUTENCAOWhereInput[]
    OR?: FRO_MANUTENCAOWhereInput[]
    NOT?: FRO_MANUTENCAOWhereInput | FRO_MANUTENCAOWhereInput[]
    MAN_VEI_SEQ?: IntFilter<"FRO_MANUTENCAO"> | number
    MAN_DATA?: DateTimeNullableFilter<"FRO_MANUTENCAO"> | Date | string | null
    MAN_DEFEITO?: StringNullableFilter<"FRO_MANUTENCAO"> | string | null
    MAN_SOLUCAO?: StringNullableFilter<"FRO_MANUTENCAO"> | string | null
    MAN_VALOR?: FloatNullableFilter<"FRO_MANUTENCAO"> | number | null
    USER_NAME?: StringNullableFilter<"FRO_MANUTENCAO"> | string | null
    MAQ_NAME?: StringNullableFilter<"FRO_MANUTENCAO"> | string | null
    DATA_HORA?: DateTimeNullableFilter<"FRO_MANUTENCAO"> | Date | string | null
  }, "MAN_SEQ">

  export type FRO_MANUTENCAOOrderByWithAggregationInput = {
    MAN_SEQ?: SortOrder
    MAN_VEI_SEQ?: SortOrder
    MAN_DATA?: SortOrderInput | SortOrder
    MAN_DEFEITO?: SortOrderInput | SortOrder
    MAN_SOLUCAO?: SortOrderInput | SortOrder
    MAN_VALOR?: SortOrderInput | SortOrder
    USER_NAME?: SortOrderInput | SortOrder
    MAQ_NAME?: SortOrderInput | SortOrder
    DATA_HORA?: SortOrderInput | SortOrder
    _count?: FRO_MANUTENCAOCountOrderByAggregateInput
    _avg?: FRO_MANUTENCAOAvgOrderByAggregateInput
    _max?: FRO_MANUTENCAOMaxOrderByAggregateInput
    _min?: FRO_MANUTENCAOMinOrderByAggregateInput
    _sum?: FRO_MANUTENCAOSumOrderByAggregateInput
  }

  export type FRO_MANUTENCAOScalarWhereWithAggregatesInput = {
    AND?: FRO_MANUTENCAOScalarWhereWithAggregatesInput | FRO_MANUTENCAOScalarWhereWithAggregatesInput[]
    OR?: FRO_MANUTENCAOScalarWhereWithAggregatesInput[]
    NOT?: FRO_MANUTENCAOScalarWhereWithAggregatesInput | FRO_MANUTENCAOScalarWhereWithAggregatesInput[]
    MAN_SEQ?: IntWithAggregatesFilter<"FRO_MANUTENCAO"> | number
    MAN_VEI_SEQ?: IntWithAggregatesFilter<"FRO_MANUTENCAO"> | number
    MAN_DATA?: DateTimeNullableWithAggregatesFilter<"FRO_MANUTENCAO"> | Date | string | null
    MAN_DEFEITO?: StringNullableWithAggregatesFilter<"FRO_MANUTENCAO"> | string | null
    MAN_SOLUCAO?: StringNullableWithAggregatesFilter<"FRO_MANUTENCAO"> | string | null
    MAN_VALOR?: FloatNullableWithAggregatesFilter<"FRO_MANUTENCAO"> | number | null
    USER_NAME?: StringNullableWithAggregatesFilter<"FRO_MANUTENCAO"> | string | null
    MAQ_NAME?: StringNullableWithAggregatesFilter<"FRO_MANUTENCAO"> | string | null
    DATA_HORA?: DateTimeNullableWithAggregatesFilter<"FRO_MANUTENCAO"> | Date | string | null
  }

  export type FRO_OCORRENCIAWhereInput = {
    AND?: FRO_OCORRENCIAWhereInput | FRO_OCORRENCIAWhereInput[]
    OR?: FRO_OCORRENCIAWhereInput[]
    NOT?: FRO_OCORRENCIAWhereInput | FRO_OCORRENCIAWhereInput[]
    OCO_SEQ?: IntFilter<"FRO_OCORRENCIA"> | number
    OCO_VEI_SEQ?: IntFilter<"FRO_OCORRENCIA"> | number
    OCO_DATA?: DateTimeNullableFilter<"FRO_OCORRENCIA"> | Date | string | null
    OCO_DESCRICAO?: StringNullableFilter<"FRO_OCORRENCIA"> | string | null
    OCO_SOLUCAO?: StringNullableFilter<"FRO_OCORRENCIA"> | string | null
    USER_NAME?: StringNullableFilter<"FRO_OCORRENCIA"> | string | null
    MAQ_NAME?: StringNullableFilter<"FRO_OCORRENCIA"> | string | null
    DATA_HORA?: DateTimeNullableFilter<"FRO_OCORRENCIA"> | Date | string | null
  }

  export type FRO_OCORRENCIAOrderByWithRelationInput = {
    OCO_SEQ?: SortOrder
    OCO_VEI_SEQ?: SortOrder
    OCO_DATA?: SortOrderInput | SortOrder
    OCO_DESCRICAO?: SortOrderInput | SortOrder
    OCO_SOLUCAO?: SortOrderInput | SortOrder
    USER_NAME?: SortOrderInput | SortOrder
    MAQ_NAME?: SortOrderInput | SortOrder
    DATA_HORA?: SortOrderInput | SortOrder
  }

  export type FRO_OCORRENCIAWhereUniqueInput = Prisma.AtLeast<{
    OCO_SEQ?: number
    AND?: FRO_OCORRENCIAWhereInput | FRO_OCORRENCIAWhereInput[]
    OR?: FRO_OCORRENCIAWhereInput[]
    NOT?: FRO_OCORRENCIAWhereInput | FRO_OCORRENCIAWhereInput[]
    OCO_VEI_SEQ?: IntFilter<"FRO_OCORRENCIA"> | number
    OCO_DATA?: DateTimeNullableFilter<"FRO_OCORRENCIA"> | Date | string | null
    OCO_DESCRICAO?: StringNullableFilter<"FRO_OCORRENCIA"> | string | null
    OCO_SOLUCAO?: StringNullableFilter<"FRO_OCORRENCIA"> | string | null
    USER_NAME?: StringNullableFilter<"FRO_OCORRENCIA"> | string | null
    MAQ_NAME?: StringNullableFilter<"FRO_OCORRENCIA"> | string | null
    DATA_HORA?: DateTimeNullableFilter<"FRO_OCORRENCIA"> | Date | string | null
  }, "OCO_SEQ">

  export type FRO_OCORRENCIAOrderByWithAggregationInput = {
    OCO_SEQ?: SortOrder
    OCO_VEI_SEQ?: SortOrder
    OCO_DATA?: SortOrderInput | SortOrder
    OCO_DESCRICAO?: SortOrderInput | SortOrder
    OCO_SOLUCAO?: SortOrderInput | SortOrder
    USER_NAME?: SortOrderInput | SortOrder
    MAQ_NAME?: SortOrderInput | SortOrder
    DATA_HORA?: SortOrderInput | SortOrder
    _count?: FRO_OCORRENCIACountOrderByAggregateInput
    _avg?: FRO_OCORRENCIAAvgOrderByAggregateInput
    _max?: FRO_OCORRENCIAMaxOrderByAggregateInput
    _min?: FRO_OCORRENCIAMinOrderByAggregateInput
    _sum?: FRO_OCORRENCIASumOrderByAggregateInput
  }

  export type FRO_OCORRENCIAScalarWhereWithAggregatesInput = {
    AND?: FRO_OCORRENCIAScalarWhereWithAggregatesInput | FRO_OCORRENCIAScalarWhereWithAggregatesInput[]
    OR?: FRO_OCORRENCIAScalarWhereWithAggregatesInput[]
    NOT?: FRO_OCORRENCIAScalarWhereWithAggregatesInput | FRO_OCORRENCIAScalarWhereWithAggregatesInput[]
    OCO_SEQ?: IntWithAggregatesFilter<"FRO_OCORRENCIA"> | number
    OCO_VEI_SEQ?: IntWithAggregatesFilter<"FRO_OCORRENCIA"> | number
    OCO_DATA?: DateTimeNullableWithAggregatesFilter<"FRO_OCORRENCIA"> | Date | string | null
    OCO_DESCRICAO?: StringNullableWithAggregatesFilter<"FRO_OCORRENCIA"> | string | null
    OCO_SOLUCAO?: StringNullableWithAggregatesFilter<"FRO_OCORRENCIA"> | string | null
    USER_NAME?: StringNullableWithAggregatesFilter<"FRO_OCORRENCIA"> | string | null
    MAQ_NAME?: StringNullableWithAggregatesFilter<"FRO_OCORRENCIA"> | string | null
    DATA_HORA?: DateTimeNullableWithAggregatesFilter<"FRO_OCORRENCIA"> | Date | string | null
  }

  export type FRO_SERVICOWhereInput = {
    AND?: FRO_SERVICOWhereInput | FRO_SERVICOWhereInput[]
    OR?: FRO_SERVICOWhereInput[]
    NOT?: FRO_SERVICOWhereInput | FRO_SERVICOWhereInput[]
    SER_SEQ?: IntFilter<"FRO_SERVICO"> | number
    SER_DATA_INICIO?: DateTimeNullableFilter<"FRO_SERVICO"> | Date | string | null
    SER_DATA_FIM?: DateTimeNullableFilter<"FRO_SERVICO"> | Date | string | null
    SER_DESTINO?: StringNullableFilter<"FRO_SERVICO"> | string | null
    SER_MOTIVO?: StringNullableFilter<"FRO_SERVICO"> | string | null
    USER_NAME?: StringNullableFilter<"FRO_SERVICO"> | string | null
    MAQ_NAME?: StringNullableFilter<"FRO_SERVICO"> | string | null
    DATA_HORA?: DateTimeNullableFilter<"FRO_SERVICO"> | Date | string | null
  }

  export type FRO_SERVICOOrderByWithRelationInput = {
    SER_SEQ?: SortOrder
    SER_DATA_INICIO?: SortOrderInput | SortOrder
    SER_DATA_FIM?: SortOrderInput | SortOrder
    SER_DESTINO?: SortOrderInput | SortOrder
    SER_MOTIVO?: SortOrderInput | SortOrder
    USER_NAME?: SortOrderInput | SortOrder
    MAQ_NAME?: SortOrderInput | SortOrder
    DATA_HORA?: SortOrderInput | SortOrder
  }

  export type FRO_SERVICOWhereUniqueInput = Prisma.AtLeast<{
    SER_SEQ?: number
    AND?: FRO_SERVICOWhereInput | FRO_SERVICOWhereInput[]
    OR?: FRO_SERVICOWhereInput[]
    NOT?: FRO_SERVICOWhereInput | FRO_SERVICOWhereInput[]
    SER_DATA_INICIO?: DateTimeNullableFilter<"FRO_SERVICO"> | Date | string | null
    SER_DATA_FIM?: DateTimeNullableFilter<"FRO_SERVICO"> | Date | string | null
    SER_DESTINO?: StringNullableFilter<"FRO_SERVICO"> | string | null
    SER_MOTIVO?: StringNullableFilter<"FRO_SERVICO"> | string | null
    USER_NAME?: StringNullableFilter<"FRO_SERVICO"> | string | null
    MAQ_NAME?: StringNullableFilter<"FRO_SERVICO"> | string | null
    DATA_HORA?: DateTimeNullableFilter<"FRO_SERVICO"> | Date | string | null
  }, "SER_SEQ">

  export type FRO_SERVICOOrderByWithAggregationInput = {
    SER_SEQ?: SortOrder
    SER_DATA_INICIO?: SortOrderInput | SortOrder
    SER_DATA_FIM?: SortOrderInput | SortOrder
    SER_DESTINO?: SortOrderInput | SortOrder
    SER_MOTIVO?: SortOrderInput | SortOrder
    USER_NAME?: SortOrderInput | SortOrder
    MAQ_NAME?: SortOrderInput | SortOrder
    DATA_HORA?: SortOrderInput | SortOrder
    _count?: FRO_SERVICOCountOrderByAggregateInput
    _avg?: FRO_SERVICOAvgOrderByAggregateInput
    _max?: FRO_SERVICOMaxOrderByAggregateInput
    _min?: FRO_SERVICOMinOrderByAggregateInput
    _sum?: FRO_SERVICOSumOrderByAggregateInput
  }

  export type FRO_SERVICOScalarWhereWithAggregatesInput = {
    AND?: FRO_SERVICOScalarWhereWithAggregatesInput | FRO_SERVICOScalarWhereWithAggregatesInput[]
    OR?: FRO_SERVICOScalarWhereWithAggregatesInput[]
    NOT?: FRO_SERVICOScalarWhereWithAggregatesInput | FRO_SERVICOScalarWhereWithAggregatesInput[]
    SER_SEQ?: IntWithAggregatesFilter<"FRO_SERVICO"> | number
    SER_DATA_INICIO?: DateTimeNullableWithAggregatesFilter<"FRO_SERVICO"> | Date | string | null
    SER_DATA_FIM?: DateTimeNullableWithAggregatesFilter<"FRO_SERVICO"> | Date | string | null
    SER_DESTINO?: StringNullableWithAggregatesFilter<"FRO_SERVICO"> | string | null
    SER_MOTIVO?: StringNullableWithAggregatesFilter<"FRO_SERVICO"> | string | null
    USER_NAME?: StringNullableWithAggregatesFilter<"FRO_SERVICO"> | string | null
    MAQ_NAME?: StringNullableWithAggregatesFilter<"FRO_SERVICO"> | string | null
    DATA_HORA?: DateTimeNullableWithAggregatesFilter<"FRO_SERVICO"> | Date | string | null
  }

  export type FRO_VEICULOWhereInput = {
    AND?: FRO_VEICULOWhereInput | FRO_VEICULOWhereInput[]
    OR?: FRO_VEICULOWhereInput[]
    NOT?: FRO_VEICULOWhereInput | FRO_VEICULOWhereInput[]
    VEI_SEQ?: IntFilter<"FRO_VEICULO"> | number
    VEI_PLACA?: StringNullableFilter<"FRO_VEICULO"> | string | null
    VEI_MARCA?: StringNullableFilter<"FRO_VEICULO"> | string | null
    VEI_MODELO?: StringNullableFilter<"FRO_VEICULO"> | string | null
    VEI_COR?: StringNullableFilter<"FRO_VEICULO"> | string | null
    VEI_FOTO?: StringNullableFilter<"FRO_VEICULO"> | string | null
    VEI_DETALHES?: StringNullableFilter<"FRO_VEICULO"> | string | null
    VEI_KM?: IntNullableFilter<"FRO_VEICULO"> | number | null
    USER_NAME?: StringNullableFilter<"FRO_VEICULO"> | string | null
    MAQ_NAME?: StringNullableFilter<"FRO_VEICULO"> | string | null
    DATA_HORA?: DateTimeNullableFilter<"FRO_VEICULO"> | Date | string | null
  }

  export type FRO_VEICULOOrderByWithRelationInput = {
    VEI_SEQ?: SortOrder
    VEI_PLACA?: SortOrderInput | SortOrder
    VEI_MARCA?: SortOrderInput | SortOrder
    VEI_MODELO?: SortOrderInput | SortOrder
    VEI_COR?: SortOrderInput | SortOrder
    VEI_FOTO?: SortOrderInput | SortOrder
    VEI_DETALHES?: SortOrderInput | SortOrder
    VEI_KM?: SortOrderInput | SortOrder
    USER_NAME?: SortOrderInput | SortOrder
    MAQ_NAME?: SortOrderInput | SortOrder
    DATA_HORA?: SortOrderInput | SortOrder
  }

  export type FRO_VEICULOWhereUniqueInput = Prisma.AtLeast<{
    VEI_SEQ?: number
    AND?: FRO_VEICULOWhereInput | FRO_VEICULOWhereInput[]
    OR?: FRO_VEICULOWhereInput[]
    NOT?: FRO_VEICULOWhereInput | FRO_VEICULOWhereInput[]
    VEI_PLACA?: StringNullableFilter<"FRO_VEICULO"> | string | null
    VEI_MARCA?: StringNullableFilter<"FRO_VEICULO"> | string | null
    VEI_MODELO?: StringNullableFilter<"FRO_VEICULO"> | string | null
    VEI_COR?: StringNullableFilter<"FRO_VEICULO"> | string | null
    VEI_FOTO?: StringNullableFilter<"FRO_VEICULO"> | string | null
    VEI_DETALHES?: StringNullableFilter<"FRO_VEICULO"> | string | null
    VEI_KM?: IntNullableFilter<"FRO_VEICULO"> | number | null
    USER_NAME?: StringNullableFilter<"FRO_VEICULO"> | string | null
    MAQ_NAME?: StringNullableFilter<"FRO_VEICULO"> | string | null
    DATA_HORA?: DateTimeNullableFilter<"FRO_VEICULO"> | Date | string | null
  }, "VEI_SEQ">

  export type FRO_VEICULOOrderByWithAggregationInput = {
    VEI_SEQ?: SortOrder
    VEI_PLACA?: SortOrderInput | SortOrder
    VEI_MARCA?: SortOrderInput | SortOrder
    VEI_MODELO?: SortOrderInput | SortOrder
    VEI_COR?: SortOrderInput | SortOrder
    VEI_FOTO?: SortOrderInput | SortOrder
    VEI_DETALHES?: SortOrderInput | SortOrder
    VEI_KM?: SortOrderInput | SortOrder
    USER_NAME?: SortOrderInput | SortOrder
    MAQ_NAME?: SortOrderInput | SortOrder
    DATA_HORA?: SortOrderInput | SortOrder
    _count?: FRO_VEICULOCountOrderByAggregateInput
    _avg?: FRO_VEICULOAvgOrderByAggregateInput
    _max?: FRO_VEICULOMaxOrderByAggregateInput
    _min?: FRO_VEICULOMinOrderByAggregateInput
    _sum?: FRO_VEICULOSumOrderByAggregateInput
  }

  export type FRO_VEICULOScalarWhereWithAggregatesInput = {
    AND?: FRO_VEICULOScalarWhereWithAggregatesInput | FRO_VEICULOScalarWhereWithAggregatesInput[]
    OR?: FRO_VEICULOScalarWhereWithAggregatesInput[]
    NOT?: FRO_VEICULOScalarWhereWithAggregatesInput | FRO_VEICULOScalarWhereWithAggregatesInput[]
    VEI_SEQ?: IntWithAggregatesFilter<"FRO_VEICULO"> | number
    VEI_PLACA?: StringNullableWithAggregatesFilter<"FRO_VEICULO"> | string | null
    VEI_MARCA?: StringNullableWithAggregatesFilter<"FRO_VEICULO"> | string | null
    VEI_MODELO?: StringNullableWithAggregatesFilter<"FRO_VEICULO"> | string | null
    VEI_COR?: StringNullableWithAggregatesFilter<"FRO_VEICULO"> | string | null
    VEI_FOTO?: StringNullableWithAggregatesFilter<"FRO_VEICULO"> | string | null
    VEI_DETALHES?: StringNullableWithAggregatesFilter<"FRO_VEICULO"> | string | null
    VEI_KM?: IntNullableWithAggregatesFilter<"FRO_VEICULO"> | number | null
    USER_NAME?: StringNullableWithAggregatesFilter<"FRO_VEICULO"> | string | null
    MAQ_NAME?: StringNullableWithAggregatesFilter<"FRO_VEICULO"> | string | null
    DATA_HORA?: DateTimeNullableWithAggregatesFilter<"FRO_VEICULO"> | Date | string | null
  }

  export type FRO_ABASTECIMENTOCreateInput = {
    ABA_VEI_SEQ?: number | null
    ABA_VALOR?: number | null
    ABA_DATA?: Date | string | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_ABASTECIMENTOUncheckedCreateInput = {
    ABA_SEQ?: number
    ABA_VEI_SEQ?: number | null
    ABA_VALOR?: number | null
    ABA_DATA?: Date | string | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_ABASTECIMENTOUpdateInput = {
    ABA_VEI_SEQ?: NullableIntFieldUpdateOperationsInput | number | null
    ABA_VALOR?: NullableFloatFieldUpdateOperationsInput | number | null
    ABA_DATA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_ABASTECIMENTOUncheckedUpdateInput = {
    ABA_SEQ?: IntFieldUpdateOperationsInput | number
    ABA_VEI_SEQ?: NullableIntFieldUpdateOperationsInput | number | null
    ABA_VALOR?: NullableFloatFieldUpdateOperationsInput | number | null
    ABA_DATA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_ABASTECIMENTOCreateManyInput = {
    ABA_VEI_SEQ?: number | null
    ABA_VALOR?: number | null
    ABA_DATA?: Date | string | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_ABASTECIMENTOUpdateManyMutationInput = {
    ABA_VEI_SEQ?: NullableIntFieldUpdateOperationsInput | number | null
    ABA_VALOR?: NullableFloatFieldUpdateOperationsInput | number | null
    ABA_DATA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_ABASTECIMENTOUncheckedUpdateManyInput = {
    ABA_SEQ?: IntFieldUpdateOperationsInput | number
    ABA_VEI_SEQ?: NullableIntFieldUpdateOperationsInput | number | null
    ABA_VALOR?: NullableFloatFieldUpdateOperationsInput | number | null
    ABA_DATA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_DOCUMENTOCreateInput = {
    DOC_VEI_SEQ: number
    DOC_TIPO?: number | null
    DOC_NUMERO?: string | null
    DOC_VALIDADE?: Date | string | null
    DOC_VALOR?: number | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_DOCUMENTOUncheckedCreateInput = {
    DOC_SEQ?: number
    DOC_VEI_SEQ: number
    DOC_TIPO?: number | null
    DOC_NUMERO?: string | null
    DOC_VALIDADE?: Date | string | null
    DOC_VALOR?: number | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_DOCUMENTOUpdateInput = {
    DOC_VEI_SEQ?: IntFieldUpdateOperationsInput | number
    DOC_TIPO?: NullableIntFieldUpdateOperationsInput | number | null
    DOC_NUMERO?: NullableStringFieldUpdateOperationsInput | string | null
    DOC_VALIDADE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DOC_VALOR?: NullableFloatFieldUpdateOperationsInput | number | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_DOCUMENTOUncheckedUpdateInput = {
    DOC_SEQ?: IntFieldUpdateOperationsInput | number
    DOC_VEI_SEQ?: IntFieldUpdateOperationsInput | number
    DOC_TIPO?: NullableIntFieldUpdateOperationsInput | number | null
    DOC_NUMERO?: NullableStringFieldUpdateOperationsInput | string | null
    DOC_VALIDADE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DOC_VALOR?: NullableFloatFieldUpdateOperationsInput | number | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_DOCUMENTOCreateManyInput = {
    DOC_VEI_SEQ: number
    DOC_TIPO?: number | null
    DOC_NUMERO?: string | null
    DOC_VALIDADE?: Date | string | null
    DOC_VALOR?: number | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_DOCUMENTOUpdateManyMutationInput = {
    DOC_VEI_SEQ?: IntFieldUpdateOperationsInput | number
    DOC_TIPO?: NullableIntFieldUpdateOperationsInput | number | null
    DOC_NUMERO?: NullableStringFieldUpdateOperationsInput | string | null
    DOC_VALIDADE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DOC_VALOR?: NullableFloatFieldUpdateOperationsInput | number | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_DOCUMENTOUncheckedUpdateManyInput = {
    DOC_SEQ?: IntFieldUpdateOperationsInput | number
    DOC_VEI_SEQ?: IntFieldUpdateOperationsInput | number
    DOC_TIPO?: NullableIntFieldUpdateOperationsInput | number | null
    DOC_NUMERO?: NullableStringFieldUpdateOperationsInput | string | null
    DOC_VALIDADE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DOC_VALOR?: NullableFloatFieldUpdateOperationsInput | number | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_MANUTENCAOCreateInput = {
    MAN_VEI_SEQ: number
    MAN_DATA?: Date | string | null
    MAN_DEFEITO?: string | null
    MAN_SOLUCAO?: string | null
    MAN_VALOR?: number | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_MANUTENCAOUncheckedCreateInput = {
    MAN_SEQ?: number
    MAN_VEI_SEQ: number
    MAN_DATA?: Date | string | null
    MAN_DEFEITO?: string | null
    MAN_SOLUCAO?: string | null
    MAN_VALOR?: number | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_MANUTENCAOUpdateInput = {
    MAN_VEI_SEQ?: IntFieldUpdateOperationsInput | number
    MAN_DATA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    MAN_DEFEITO?: NullableStringFieldUpdateOperationsInput | string | null
    MAN_SOLUCAO?: NullableStringFieldUpdateOperationsInput | string | null
    MAN_VALOR?: NullableFloatFieldUpdateOperationsInput | number | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_MANUTENCAOUncheckedUpdateInput = {
    MAN_SEQ?: IntFieldUpdateOperationsInput | number
    MAN_VEI_SEQ?: IntFieldUpdateOperationsInput | number
    MAN_DATA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    MAN_DEFEITO?: NullableStringFieldUpdateOperationsInput | string | null
    MAN_SOLUCAO?: NullableStringFieldUpdateOperationsInput | string | null
    MAN_VALOR?: NullableFloatFieldUpdateOperationsInput | number | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_MANUTENCAOCreateManyInput = {
    MAN_VEI_SEQ: number
    MAN_DATA?: Date | string | null
    MAN_DEFEITO?: string | null
    MAN_SOLUCAO?: string | null
    MAN_VALOR?: number | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_MANUTENCAOUpdateManyMutationInput = {
    MAN_VEI_SEQ?: IntFieldUpdateOperationsInput | number
    MAN_DATA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    MAN_DEFEITO?: NullableStringFieldUpdateOperationsInput | string | null
    MAN_SOLUCAO?: NullableStringFieldUpdateOperationsInput | string | null
    MAN_VALOR?: NullableFloatFieldUpdateOperationsInput | number | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_MANUTENCAOUncheckedUpdateManyInput = {
    MAN_SEQ?: IntFieldUpdateOperationsInput | number
    MAN_VEI_SEQ?: IntFieldUpdateOperationsInput | number
    MAN_DATA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    MAN_DEFEITO?: NullableStringFieldUpdateOperationsInput | string | null
    MAN_SOLUCAO?: NullableStringFieldUpdateOperationsInput | string | null
    MAN_VALOR?: NullableFloatFieldUpdateOperationsInput | number | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_OCORRENCIACreateInput = {
    OCO_VEI_SEQ: number
    OCO_DATA?: Date | string | null
    OCO_DESCRICAO?: string | null
    OCO_SOLUCAO?: string | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_OCORRENCIAUncheckedCreateInput = {
    OCO_SEQ?: number
    OCO_VEI_SEQ: number
    OCO_DATA?: Date | string | null
    OCO_DESCRICAO?: string | null
    OCO_SOLUCAO?: string | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_OCORRENCIAUpdateInput = {
    OCO_VEI_SEQ?: IntFieldUpdateOperationsInput | number
    OCO_DATA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OCO_DESCRICAO?: NullableStringFieldUpdateOperationsInput | string | null
    OCO_SOLUCAO?: NullableStringFieldUpdateOperationsInput | string | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_OCORRENCIAUncheckedUpdateInput = {
    OCO_SEQ?: IntFieldUpdateOperationsInput | number
    OCO_VEI_SEQ?: IntFieldUpdateOperationsInput | number
    OCO_DATA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OCO_DESCRICAO?: NullableStringFieldUpdateOperationsInput | string | null
    OCO_SOLUCAO?: NullableStringFieldUpdateOperationsInput | string | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_OCORRENCIACreateManyInput = {
    OCO_VEI_SEQ: number
    OCO_DATA?: Date | string | null
    OCO_DESCRICAO?: string | null
    OCO_SOLUCAO?: string | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_OCORRENCIAUpdateManyMutationInput = {
    OCO_VEI_SEQ?: IntFieldUpdateOperationsInput | number
    OCO_DATA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OCO_DESCRICAO?: NullableStringFieldUpdateOperationsInput | string | null
    OCO_SOLUCAO?: NullableStringFieldUpdateOperationsInput | string | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_OCORRENCIAUncheckedUpdateManyInput = {
    OCO_SEQ?: IntFieldUpdateOperationsInput | number
    OCO_VEI_SEQ?: IntFieldUpdateOperationsInput | number
    OCO_DATA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OCO_DESCRICAO?: NullableStringFieldUpdateOperationsInput | string | null
    OCO_SOLUCAO?: NullableStringFieldUpdateOperationsInput | string | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_SERVICOCreateInput = {
    SER_DATA_INICIO?: Date | string | null
    SER_DATA_FIM?: Date | string | null
    SER_DESTINO?: string | null
    SER_MOTIVO?: string | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_SERVICOUncheckedCreateInput = {
    SER_SEQ?: number
    SER_DATA_INICIO?: Date | string | null
    SER_DATA_FIM?: Date | string | null
    SER_DESTINO?: string | null
    SER_MOTIVO?: string | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_SERVICOUpdateInput = {
    SER_DATA_INICIO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SER_DATA_FIM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SER_DESTINO?: NullableStringFieldUpdateOperationsInput | string | null
    SER_MOTIVO?: NullableStringFieldUpdateOperationsInput | string | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_SERVICOUncheckedUpdateInput = {
    SER_SEQ?: IntFieldUpdateOperationsInput | number
    SER_DATA_INICIO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SER_DATA_FIM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SER_DESTINO?: NullableStringFieldUpdateOperationsInput | string | null
    SER_MOTIVO?: NullableStringFieldUpdateOperationsInput | string | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_SERVICOCreateManyInput = {
    SER_DATA_INICIO?: Date | string | null
    SER_DATA_FIM?: Date | string | null
    SER_DESTINO?: string | null
    SER_MOTIVO?: string | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_SERVICOUpdateManyMutationInput = {
    SER_DATA_INICIO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SER_DATA_FIM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SER_DESTINO?: NullableStringFieldUpdateOperationsInput | string | null
    SER_MOTIVO?: NullableStringFieldUpdateOperationsInput | string | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_SERVICOUncheckedUpdateManyInput = {
    SER_SEQ?: IntFieldUpdateOperationsInput | number
    SER_DATA_INICIO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SER_DATA_FIM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SER_DESTINO?: NullableStringFieldUpdateOperationsInput | string | null
    SER_MOTIVO?: NullableStringFieldUpdateOperationsInput | string | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_VEICULOCreateInput = {
    VEI_PLACA?: string | null
    VEI_MARCA?: string | null
    VEI_MODELO?: string | null
    VEI_COR?: string | null
    VEI_FOTO?: string | null
    VEI_DETALHES?: string | null
    VEI_KM?: number | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_VEICULOUncheckedCreateInput = {
    VEI_SEQ?: number
    VEI_PLACA?: string | null
    VEI_MARCA?: string | null
    VEI_MODELO?: string | null
    VEI_COR?: string | null
    VEI_FOTO?: string | null
    VEI_DETALHES?: string | null
    VEI_KM?: number | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_VEICULOUpdateInput = {
    VEI_PLACA?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_MARCA?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_MODELO?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_COR?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_FOTO?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_DETALHES?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_KM?: NullableIntFieldUpdateOperationsInput | number | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_VEICULOUncheckedUpdateInput = {
    VEI_SEQ?: IntFieldUpdateOperationsInput | number
    VEI_PLACA?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_MARCA?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_MODELO?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_COR?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_FOTO?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_DETALHES?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_KM?: NullableIntFieldUpdateOperationsInput | number | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_VEICULOCreateManyInput = {
    VEI_PLACA?: string | null
    VEI_MARCA?: string | null
    VEI_MODELO?: string | null
    VEI_COR?: string | null
    VEI_FOTO?: string | null
    VEI_DETALHES?: string | null
    VEI_KM?: number | null
    USER_NAME?: string | null
    MAQ_NAME?: string | null
    DATA_HORA?: Date | string | null
  }

  export type FRO_VEICULOUpdateManyMutationInput = {
    VEI_PLACA?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_MARCA?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_MODELO?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_COR?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_FOTO?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_DETALHES?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_KM?: NullableIntFieldUpdateOperationsInput | number | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FRO_VEICULOUncheckedUpdateManyInput = {
    VEI_SEQ?: IntFieldUpdateOperationsInput | number
    VEI_PLACA?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_MARCA?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_MODELO?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_COR?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_FOTO?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_DETALHES?: NullableStringFieldUpdateOperationsInput | string | null
    VEI_KM?: NullableIntFieldUpdateOperationsInput | number | null
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    MAQ_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DATA_HORA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FRO_ABASTECIMENTOCountOrderByAggregateInput = {
    ABA_SEQ?: SortOrder
    ABA_VEI_SEQ?: SortOrder
    ABA_VALOR?: SortOrder
    ABA_DATA?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_ABASTECIMENTOAvgOrderByAggregateInput = {
    ABA_SEQ?: SortOrder
    ABA_VEI_SEQ?: SortOrder
    ABA_VALOR?: SortOrder
  }

  export type FRO_ABASTECIMENTOMaxOrderByAggregateInput = {
    ABA_SEQ?: SortOrder
    ABA_VEI_SEQ?: SortOrder
    ABA_VALOR?: SortOrder
    ABA_DATA?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_ABASTECIMENTOMinOrderByAggregateInput = {
    ABA_SEQ?: SortOrder
    ABA_VEI_SEQ?: SortOrder
    ABA_VALOR?: SortOrder
    ABA_DATA?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_ABASTECIMENTOSumOrderByAggregateInput = {
    ABA_SEQ?: SortOrder
    ABA_VEI_SEQ?: SortOrder
    ABA_VALOR?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FRO_DOCUMENTOCountOrderByAggregateInput = {
    DOC_SEQ?: SortOrder
    DOC_VEI_SEQ?: SortOrder
    DOC_TIPO?: SortOrder
    DOC_NUMERO?: SortOrder
    DOC_VALIDADE?: SortOrder
    DOC_VALOR?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_DOCUMENTOAvgOrderByAggregateInput = {
    DOC_SEQ?: SortOrder
    DOC_VEI_SEQ?: SortOrder
    DOC_TIPO?: SortOrder
    DOC_VALOR?: SortOrder
  }

  export type FRO_DOCUMENTOMaxOrderByAggregateInput = {
    DOC_SEQ?: SortOrder
    DOC_VEI_SEQ?: SortOrder
    DOC_TIPO?: SortOrder
    DOC_NUMERO?: SortOrder
    DOC_VALIDADE?: SortOrder
    DOC_VALOR?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_DOCUMENTOMinOrderByAggregateInput = {
    DOC_SEQ?: SortOrder
    DOC_VEI_SEQ?: SortOrder
    DOC_TIPO?: SortOrder
    DOC_NUMERO?: SortOrder
    DOC_VALIDADE?: SortOrder
    DOC_VALOR?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_DOCUMENTOSumOrderByAggregateInput = {
    DOC_SEQ?: SortOrder
    DOC_VEI_SEQ?: SortOrder
    DOC_TIPO?: SortOrder
    DOC_VALOR?: SortOrder
  }

  export type FRO_MANUTENCAOCountOrderByAggregateInput = {
    MAN_SEQ?: SortOrder
    MAN_VEI_SEQ?: SortOrder
    MAN_DATA?: SortOrder
    MAN_DEFEITO?: SortOrder
    MAN_SOLUCAO?: SortOrder
    MAN_VALOR?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_MANUTENCAOAvgOrderByAggregateInput = {
    MAN_SEQ?: SortOrder
    MAN_VEI_SEQ?: SortOrder
    MAN_VALOR?: SortOrder
  }

  export type FRO_MANUTENCAOMaxOrderByAggregateInput = {
    MAN_SEQ?: SortOrder
    MAN_VEI_SEQ?: SortOrder
    MAN_DATA?: SortOrder
    MAN_DEFEITO?: SortOrder
    MAN_SOLUCAO?: SortOrder
    MAN_VALOR?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_MANUTENCAOMinOrderByAggregateInput = {
    MAN_SEQ?: SortOrder
    MAN_VEI_SEQ?: SortOrder
    MAN_DATA?: SortOrder
    MAN_DEFEITO?: SortOrder
    MAN_SOLUCAO?: SortOrder
    MAN_VALOR?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_MANUTENCAOSumOrderByAggregateInput = {
    MAN_SEQ?: SortOrder
    MAN_VEI_SEQ?: SortOrder
    MAN_VALOR?: SortOrder
  }

  export type FRO_OCORRENCIACountOrderByAggregateInput = {
    OCO_SEQ?: SortOrder
    OCO_VEI_SEQ?: SortOrder
    OCO_DATA?: SortOrder
    OCO_DESCRICAO?: SortOrder
    OCO_SOLUCAO?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_OCORRENCIAAvgOrderByAggregateInput = {
    OCO_SEQ?: SortOrder
    OCO_VEI_SEQ?: SortOrder
  }

  export type FRO_OCORRENCIAMaxOrderByAggregateInput = {
    OCO_SEQ?: SortOrder
    OCO_VEI_SEQ?: SortOrder
    OCO_DATA?: SortOrder
    OCO_DESCRICAO?: SortOrder
    OCO_SOLUCAO?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_OCORRENCIAMinOrderByAggregateInput = {
    OCO_SEQ?: SortOrder
    OCO_VEI_SEQ?: SortOrder
    OCO_DATA?: SortOrder
    OCO_DESCRICAO?: SortOrder
    OCO_SOLUCAO?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_OCORRENCIASumOrderByAggregateInput = {
    OCO_SEQ?: SortOrder
    OCO_VEI_SEQ?: SortOrder
  }

  export type FRO_SERVICOCountOrderByAggregateInput = {
    SER_SEQ?: SortOrder
    SER_DATA_INICIO?: SortOrder
    SER_DATA_FIM?: SortOrder
    SER_DESTINO?: SortOrder
    SER_MOTIVO?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_SERVICOAvgOrderByAggregateInput = {
    SER_SEQ?: SortOrder
  }

  export type FRO_SERVICOMaxOrderByAggregateInput = {
    SER_SEQ?: SortOrder
    SER_DATA_INICIO?: SortOrder
    SER_DATA_FIM?: SortOrder
    SER_DESTINO?: SortOrder
    SER_MOTIVO?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_SERVICOMinOrderByAggregateInput = {
    SER_SEQ?: SortOrder
    SER_DATA_INICIO?: SortOrder
    SER_DATA_FIM?: SortOrder
    SER_DESTINO?: SortOrder
    SER_MOTIVO?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_SERVICOSumOrderByAggregateInput = {
    SER_SEQ?: SortOrder
  }

  export type FRO_VEICULOCountOrderByAggregateInput = {
    VEI_SEQ?: SortOrder
    VEI_PLACA?: SortOrder
    VEI_MARCA?: SortOrder
    VEI_MODELO?: SortOrder
    VEI_COR?: SortOrder
    VEI_FOTO?: SortOrder
    VEI_DETALHES?: SortOrder
    VEI_KM?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_VEICULOAvgOrderByAggregateInput = {
    VEI_SEQ?: SortOrder
    VEI_KM?: SortOrder
  }

  export type FRO_VEICULOMaxOrderByAggregateInput = {
    VEI_SEQ?: SortOrder
    VEI_PLACA?: SortOrder
    VEI_MARCA?: SortOrder
    VEI_MODELO?: SortOrder
    VEI_COR?: SortOrder
    VEI_FOTO?: SortOrder
    VEI_DETALHES?: SortOrder
    VEI_KM?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_VEICULOMinOrderByAggregateInput = {
    VEI_SEQ?: SortOrder
    VEI_PLACA?: SortOrder
    VEI_MARCA?: SortOrder
    VEI_MODELO?: SortOrder
    VEI_COR?: SortOrder
    VEI_FOTO?: SortOrder
    VEI_DETALHES?: SortOrder
    VEI_KM?: SortOrder
    USER_NAME?: SortOrder
    MAQ_NAME?: SortOrder
    DATA_HORA?: SortOrder
  }

  export type FRO_VEICULOSumOrderByAggregateInput = {
    VEI_SEQ?: SortOrder
    VEI_KM?: SortOrder
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use FRO_ABASTECIMENTODefaultArgs instead
     */
    export type FRO_ABASTECIMENTOArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FRO_ABASTECIMENTODefaultArgs<ExtArgs>
    /**
     * @deprecated Use FRO_DOCUMENTODefaultArgs instead
     */
    export type FRO_DOCUMENTOArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FRO_DOCUMENTODefaultArgs<ExtArgs>
    /**
     * @deprecated Use FRO_MANUTENCAODefaultArgs instead
     */
    export type FRO_MANUTENCAOArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FRO_MANUTENCAODefaultArgs<ExtArgs>
    /**
     * @deprecated Use FRO_OCORRENCIADefaultArgs instead
     */
    export type FRO_OCORRENCIAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FRO_OCORRENCIADefaultArgs<ExtArgs>
    /**
     * @deprecated Use FRO_SERVICODefaultArgs instead
     */
    export type FRO_SERVICOArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FRO_SERVICODefaultArgs<ExtArgs>
    /**
     * @deprecated Use FRO_VEICULODefaultArgs instead
     */
    export type FRO_VEICULOArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FRO_VEICULODefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}