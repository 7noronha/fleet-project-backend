
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
 * Model TAB_002_USUARIO_ACESSO
 * 
 */
export type TAB_002_USUARIO_ACESSO = $Result.DefaultSelection<Prisma.$TAB_002_USUARIO_ACESSOPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TAB_002_USUARIO_ACESSOS
 * const tAB_002_USUARIO_ACESSOS = await prisma.tAB_002_USUARIO_ACESSO.findMany()
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
   * // Fetch zero or more TAB_002_USUARIO_ACESSOS
   * const tAB_002_USUARIO_ACESSOS = await prisma.tAB_002_USUARIO_ACESSO.findMany()
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
   * `prisma.tAB_002_USUARIO_ACESSO`: Exposes CRUD operations for the **TAB_002_USUARIO_ACESSO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TAB_002_USUARIO_ACESSOS
    * const tAB_002_USUARIO_ACESSOS = await prisma.tAB_002_USUARIO_ACESSO.findMany()
    * ```
    */
  get tAB_002_USUARIO_ACESSO(): Prisma.TAB_002_USUARIO_ACESSODelegate<ExtArgs>;
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
    TAB_002_USUARIO_ACESSO: 'TAB_002_USUARIO_ACESSO'
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
      modelProps: 'tAB_002_USUARIO_ACESSO'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      TAB_002_USUARIO_ACESSO: {
        payload: Prisma.$TAB_002_USUARIO_ACESSOPayload<ExtArgs>
        fields: Prisma.TAB_002_USUARIO_ACESSOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TAB_002_USUARIO_ACESSOFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TAB_002_USUARIO_ACESSOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TAB_002_USUARIO_ACESSOFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TAB_002_USUARIO_ACESSOPayload>
          }
          findFirst: {
            args: Prisma.TAB_002_USUARIO_ACESSOFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TAB_002_USUARIO_ACESSOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TAB_002_USUARIO_ACESSOFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TAB_002_USUARIO_ACESSOPayload>
          }
          findMany: {
            args: Prisma.TAB_002_USUARIO_ACESSOFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TAB_002_USUARIO_ACESSOPayload>[]
          }
          create: {
            args: Prisma.TAB_002_USUARIO_ACESSOCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TAB_002_USUARIO_ACESSOPayload>
          }
          createMany: {
            args: Prisma.TAB_002_USUARIO_ACESSOCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TAB_002_USUARIO_ACESSODeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TAB_002_USUARIO_ACESSOPayload>
          }
          update: {
            args: Prisma.TAB_002_USUARIO_ACESSOUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TAB_002_USUARIO_ACESSOPayload>
          }
          deleteMany: {
            args: Prisma.TAB_002_USUARIO_ACESSODeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TAB_002_USUARIO_ACESSOUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TAB_002_USUARIO_ACESSOUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TAB_002_USUARIO_ACESSOPayload>
          }
          aggregate: {
            args: Prisma.TAB_002_USUARIO_ACESSOAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTAB_002_USUARIO_ACESSO>
          }
          groupBy: {
            args: Prisma.TAB_002_USUARIO_ACESSOGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TAB_002_USUARIO_ACESSOGroupByOutputType>[]
          }
          count: {
            args: Prisma.TAB_002_USUARIO_ACESSOCountArgs<ExtArgs>,
            result: $Utils.Optional<TAB_002_USUARIO_ACESSOCountAggregateOutputType> | number
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
   * Model TAB_002_USUARIO_ACESSO
   */

  export type AggregateTAB_002_USUARIO_ACESSO = {
    _count: TAB_002_USUARIO_ACESSOCountAggregateOutputType | null
    _avg: TAB_002_USUARIO_ACESSOAvgAggregateOutputType | null
    _sum: TAB_002_USUARIO_ACESSOSumAggregateOutputType | null
    _min: TAB_002_USUARIO_ACESSOMinAggregateOutputType | null
    _max: TAB_002_USUARIO_ACESSOMaxAggregateOutputType | null
  }

  export type TAB_002_USUARIO_ACESSOAvgAggregateOutputType = {
    UserCod: number | null
    ACESSO: number | null
    GRUPO: number | null
  }

  export type TAB_002_USUARIO_ACESSOSumAggregateOutputType = {
    UserCod: number | null
    ACESSO: number | null
    GRUPO: number | null
  }

  export type TAB_002_USUARIO_ACESSOMinAggregateOutputType = {
    UserCod: number | null
    USUARIO: string | null
    DEPTO: string | null
    SENHA: string | null
    ACESSO: number | null
    GRUPO: number | null
    MaqNumberAtual: string | null
    MaqUserAtual: string | null
    MaqIP: string | null
    DataUltLog: Date | null
    HoraUltLog: Date | null
    DataHoraDig: Date | null
    ACESS_CLOUD: boolean | null
    REFRESH_TOKEN: string | null
  }

  export type TAB_002_USUARIO_ACESSOMaxAggregateOutputType = {
    UserCod: number | null
    USUARIO: string | null
    DEPTO: string | null
    SENHA: string | null
    ACESSO: number | null
    GRUPO: number | null
    MaqNumberAtual: string | null
    MaqUserAtual: string | null
    MaqIP: string | null
    DataUltLog: Date | null
    HoraUltLog: Date | null
    DataHoraDig: Date | null
    ACESS_CLOUD: boolean | null
    REFRESH_TOKEN: string | null
  }

  export type TAB_002_USUARIO_ACESSOCountAggregateOutputType = {
    UserCod: number
    USUARIO: number
    DEPTO: number
    SENHA: number
    ACESSO: number
    GRUPO: number
    MaqNumberAtual: number
    MaqUserAtual: number
    MaqIP: number
    DataUltLog: number
    HoraUltLog: number
    DataHoraDig: number
    ACESS_CLOUD: number
    REFRESH_TOKEN: number
    _all: number
  }


  export type TAB_002_USUARIO_ACESSOAvgAggregateInputType = {
    UserCod?: true
    ACESSO?: true
    GRUPO?: true
  }

  export type TAB_002_USUARIO_ACESSOSumAggregateInputType = {
    UserCod?: true
    ACESSO?: true
    GRUPO?: true
  }

  export type TAB_002_USUARIO_ACESSOMinAggregateInputType = {
    UserCod?: true
    USUARIO?: true
    DEPTO?: true
    SENHA?: true
    ACESSO?: true
    GRUPO?: true
    MaqNumberAtual?: true
    MaqUserAtual?: true
    MaqIP?: true
    DataUltLog?: true
    HoraUltLog?: true
    DataHoraDig?: true
    ACESS_CLOUD?: true
    REFRESH_TOKEN?: true
  }

  export type TAB_002_USUARIO_ACESSOMaxAggregateInputType = {
    UserCod?: true
    USUARIO?: true
    DEPTO?: true
    SENHA?: true
    ACESSO?: true
    GRUPO?: true
    MaqNumberAtual?: true
    MaqUserAtual?: true
    MaqIP?: true
    DataUltLog?: true
    HoraUltLog?: true
    DataHoraDig?: true
    ACESS_CLOUD?: true
    REFRESH_TOKEN?: true
  }

  export type TAB_002_USUARIO_ACESSOCountAggregateInputType = {
    UserCod?: true
    USUARIO?: true
    DEPTO?: true
    SENHA?: true
    ACESSO?: true
    GRUPO?: true
    MaqNumberAtual?: true
    MaqUserAtual?: true
    MaqIP?: true
    DataUltLog?: true
    HoraUltLog?: true
    DataHoraDig?: true
    ACESS_CLOUD?: true
    REFRESH_TOKEN?: true
    _all?: true
  }

  export type TAB_002_USUARIO_ACESSOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TAB_002_USUARIO_ACESSO to aggregate.
     */
    where?: TAB_002_USUARIO_ACESSOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TAB_002_USUARIO_ACESSOS to fetch.
     */
    orderBy?: TAB_002_USUARIO_ACESSOOrderByWithRelationInput | TAB_002_USUARIO_ACESSOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TAB_002_USUARIO_ACESSOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TAB_002_USUARIO_ACESSOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TAB_002_USUARIO_ACESSOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TAB_002_USUARIO_ACESSOS
    **/
    _count?: true | TAB_002_USUARIO_ACESSOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TAB_002_USUARIO_ACESSOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TAB_002_USUARIO_ACESSOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TAB_002_USUARIO_ACESSOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TAB_002_USUARIO_ACESSOMaxAggregateInputType
  }

  export type GetTAB_002_USUARIO_ACESSOAggregateType<T extends TAB_002_USUARIO_ACESSOAggregateArgs> = {
        [P in keyof T & keyof AggregateTAB_002_USUARIO_ACESSO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTAB_002_USUARIO_ACESSO[P]>
      : GetScalarType<T[P], AggregateTAB_002_USUARIO_ACESSO[P]>
  }




  export type TAB_002_USUARIO_ACESSOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TAB_002_USUARIO_ACESSOWhereInput
    orderBy?: TAB_002_USUARIO_ACESSOOrderByWithAggregationInput | TAB_002_USUARIO_ACESSOOrderByWithAggregationInput[]
    by: TAB_002_USUARIO_ACESSOScalarFieldEnum[] | TAB_002_USUARIO_ACESSOScalarFieldEnum
    having?: TAB_002_USUARIO_ACESSOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TAB_002_USUARIO_ACESSOCountAggregateInputType | true
    _avg?: TAB_002_USUARIO_ACESSOAvgAggregateInputType
    _sum?: TAB_002_USUARIO_ACESSOSumAggregateInputType
    _min?: TAB_002_USUARIO_ACESSOMinAggregateInputType
    _max?: TAB_002_USUARIO_ACESSOMaxAggregateInputType
  }

  export type TAB_002_USUARIO_ACESSOGroupByOutputType = {
    UserCod: number
    USUARIO: string | null
    DEPTO: string | null
    SENHA: string | null
    ACESSO: number | null
    GRUPO: number | null
    MaqNumberAtual: string | null
    MaqUserAtual: string | null
    MaqIP: string | null
    DataUltLog: Date | null
    HoraUltLog: Date | null
    DataHoraDig: Date | null
    ACESS_CLOUD: boolean | null
    REFRESH_TOKEN: string | null
    _count: TAB_002_USUARIO_ACESSOCountAggregateOutputType | null
    _avg: TAB_002_USUARIO_ACESSOAvgAggregateOutputType | null
    _sum: TAB_002_USUARIO_ACESSOSumAggregateOutputType | null
    _min: TAB_002_USUARIO_ACESSOMinAggregateOutputType | null
    _max: TAB_002_USUARIO_ACESSOMaxAggregateOutputType | null
  }

  type GetTAB_002_USUARIO_ACESSOGroupByPayload<T extends TAB_002_USUARIO_ACESSOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TAB_002_USUARIO_ACESSOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TAB_002_USUARIO_ACESSOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TAB_002_USUARIO_ACESSOGroupByOutputType[P]>
            : GetScalarType<T[P], TAB_002_USUARIO_ACESSOGroupByOutputType[P]>
        }
      >
    >


  export type TAB_002_USUARIO_ACESSOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserCod?: boolean
    USUARIO?: boolean
    DEPTO?: boolean
    SENHA?: boolean
    ACESSO?: boolean
    GRUPO?: boolean
    MaqNumberAtual?: boolean
    MaqUserAtual?: boolean
    MaqIP?: boolean
    DataUltLog?: boolean
    HoraUltLog?: boolean
    DataHoraDig?: boolean
    ACESS_CLOUD?: boolean
    REFRESH_TOKEN?: boolean
  }, ExtArgs["result"]["tAB_002_USUARIO_ACESSO"]>

  export type TAB_002_USUARIO_ACESSOSelectScalar = {
    UserCod?: boolean
    USUARIO?: boolean
    DEPTO?: boolean
    SENHA?: boolean
    ACESSO?: boolean
    GRUPO?: boolean
    MaqNumberAtual?: boolean
    MaqUserAtual?: boolean
    MaqIP?: boolean
    DataUltLog?: boolean
    HoraUltLog?: boolean
    DataHoraDig?: boolean
    ACESS_CLOUD?: boolean
    REFRESH_TOKEN?: boolean
  }


  export type $TAB_002_USUARIO_ACESSOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TAB_002_USUARIO_ACESSO"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      UserCod: number
      USUARIO: string | null
      DEPTO: string | null
      SENHA: string | null
      ACESSO: number | null
      GRUPO: number | null
      MaqNumberAtual: string | null
      MaqUserAtual: string | null
      MaqIP: string | null
      DataUltLog: Date | null
      HoraUltLog: Date | null
      DataHoraDig: Date | null
      ACESS_CLOUD: boolean | null
      REFRESH_TOKEN: string | null
    }, ExtArgs["result"]["tAB_002_USUARIO_ACESSO"]>
    composites: {}
  }


  type TAB_002_USUARIO_ACESSOGetPayload<S extends boolean | null | undefined | TAB_002_USUARIO_ACESSODefaultArgs> = $Result.GetResult<Prisma.$TAB_002_USUARIO_ACESSOPayload, S>

  type TAB_002_USUARIO_ACESSOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TAB_002_USUARIO_ACESSOFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TAB_002_USUARIO_ACESSOCountAggregateInputType | true
    }

  export interface TAB_002_USUARIO_ACESSODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TAB_002_USUARIO_ACESSO'], meta: { name: 'TAB_002_USUARIO_ACESSO' } }
    /**
     * Find zero or one TAB_002_USUARIO_ACESSO that matches the filter.
     * @param {TAB_002_USUARIO_ACESSOFindUniqueArgs} args - Arguments to find a TAB_002_USUARIO_ACESSO
     * @example
     * // Get one TAB_002_USUARIO_ACESSO
     * const tAB_002_USUARIO_ACESSO = await prisma.tAB_002_USUARIO_ACESSO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TAB_002_USUARIO_ACESSOFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TAB_002_USUARIO_ACESSOFindUniqueArgs<ExtArgs>>
    ): Prisma__TAB_002_USUARIO_ACESSOClient<$Result.GetResult<Prisma.$TAB_002_USUARIO_ACESSOPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TAB_002_USUARIO_ACESSO that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TAB_002_USUARIO_ACESSOFindUniqueOrThrowArgs} args - Arguments to find a TAB_002_USUARIO_ACESSO
     * @example
     * // Get one TAB_002_USUARIO_ACESSO
     * const tAB_002_USUARIO_ACESSO = await prisma.tAB_002_USUARIO_ACESSO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TAB_002_USUARIO_ACESSOFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TAB_002_USUARIO_ACESSOFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TAB_002_USUARIO_ACESSOClient<$Result.GetResult<Prisma.$TAB_002_USUARIO_ACESSOPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TAB_002_USUARIO_ACESSO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TAB_002_USUARIO_ACESSOFindFirstArgs} args - Arguments to find a TAB_002_USUARIO_ACESSO
     * @example
     * // Get one TAB_002_USUARIO_ACESSO
     * const tAB_002_USUARIO_ACESSO = await prisma.tAB_002_USUARIO_ACESSO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TAB_002_USUARIO_ACESSOFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TAB_002_USUARIO_ACESSOFindFirstArgs<ExtArgs>>
    ): Prisma__TAB_002_USUARIO_ACESSOClient<$Result.GetResult<Prisma.$TAB_002_USUARIO_ACESSOPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TAB_002_USUARIO_ACESSO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TAB_002_USUARIO_ACESSOFindFirstOrThrowArgs} args - Arguments to find a TAB_002_USUARIO_ACESSO
     * @example
     * // Get one TAB_002_USUARIO_ACESSO
     * const tAB_002_USUARIO_ACESSO = await prisma.tAB_002_USUARIO_ACESSO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TAB_002_USUARIO_ACESSOFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TAB_002_USUARIO_ACESSOFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TAB_002_USUARIO_ACESSOClient<$Result.GetResult<Prisma.$TAB_002_USUARIO_ACESSOPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TAB_002_USUARIO_ACESSOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TAB_002_USUARIO_ACESSOFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TAB_002_USUARIO_ACESSOS
     * const tAB_002_USUARIO_ACESSOS = await prisma.tAB_002_USUARIO_ACESSO.findMany()
     * 
     * // Get first 10 TAB_002_USUARIO_ACESSOS
     * const tAB_002_USUARIO_ACESSOS = await prisma.tAB_002_USUARIO_ACESSO.findMany({ take: 10 })
     * 
     * // Only select the `UserCod`
     * const tAB_002_USUARIO_ACESSOWithUserCodOnly = await prisma.tAB_002_USUARIO_ACESSO.findMany({ select: { UserCod: true } })
     * 
    **/
    findMany<T extends TAB_002_USUARIO_ACESSOFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TAB_002_USUARIO_ACESSOFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TAB_002_USUARIO_ACESSOPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TAB_002_USUARIO_ACESSO.
     * @param {TAB_002_USUARIO_ACESSOCreateArgs} args - Arguments to create a TAB_002_USUARIO_ACESSO.
     * @example
     * // Create one TAB_002_USUARIO_ACESSO
     * const TAB_002_USUARIO_ACESSO = await prisma.tAB_002_USUARIO_ACESSO.create({
     *   data: {
     *     // ... data to create a TAB_002_USUARIO_ACESSO
     *   }
     * })
     * 
    **/
    create<T extends TAB_002_USUARIO_ACESSOCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TAB_002_USUARIO_ACESSOCreateArgs<ExtArgs>>
    ): Prisma__TAB_002_USUARIO_ACESSOClient<$Result.GetResult<Prisma.$TAB_002_USUARIO_ACESSOPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TAB_002_USUARIO_ACESSOS.
     *     @param {TAB_002_USUARIO_ACESSOCreateManyArgs} args - Arguments to create many TAB_002_USUARIO_ACESSOS.
     *     @example
     *     // Create many TAB_002_USUARIO_ACESSOS
     *     const tAB_002_USUARIO_ACESSO = await prisma.tAB_002_USUARIO_ACESSO.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TAB_002_USUARIO_ACESSOCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TAB_002_USUARIO_ACESSOCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TAB_002_USUARIO_ACESSO.
     * @param {TAB_002_USUARIO_ACESSODeleteArgs} args - Arguments to delete one TAB_002_USUARIO_ACESSO.
     * @example
     * // Delete one TAB_002_USUARIO_ACESSO
     * const TAB_002_USUARIO_ACESSO = await prisma.tAB_002_USUARIO_ACESSO.delete({
     *   where: {
     *     // ... filter to delete one TAB_002_USUARIO_ACESSO
     *   }
     * })
     * 
    **/
    delete<T extends TAB_002_USUARIO_ACESSODeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TAB_002_USUARIO_ACESSODeleteArgs<ExtArgs>>
    ): Prisma__TAB_002_USUARIO_ACESSOClient<$Result.GetResult<Prisma.$TAB_002_USUARIO_ACESSOPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TAB_002_USUARIO_ACESSO.
     * @param {TAB_002_USUARIO_ACESSOUpdateArgs} args - Arguments to update one TAB_002_USUARIO_ACESSO.
     * @example
     * // Update one TAB_002_USUARIO_ACESSO
     * const tAB_002_USUARIO_ACESSO = await prisma.tAB_002_USUARIO_ACESSO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TAB_002_USUARIO_ACESSOUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TAB_002_USUARIO_ACESSOUpdateArgs<ExtArgs>>
    ): Prisma__TAB_002_USUARIO_ACESSOClient<$Result.GetResult<Prisma.$TAB_002_USUARIO_ACESSOPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TAB_002_USUARIO_ACESSOS.
     * @param {TAB_002_USUARIO_ACESSODeleteManyArgs} args - Arguments to filter TAB_002_USUARIO_ACESSOS to delete.
     * @example
     * // Delete a few TAB_002_USUARIO_ACESSOS
     * const { count } = await prisma.tAB_002_USUARIO_ACESSO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TAB_002_USUARIO_ACESSODeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TAB_002_USUARIO_ACESSODeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TAB_002_USUARIO_ACESSOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TAB_002_USUARIO_ACESSOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TAB_002_USUARIO_ACESSOS
     * const tAB_002_USUARIO_ACESSO = await prisma.tAB_002_USUARIO_ACESSO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TAB_002_USUARIO_ACESSOUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TAB_002_USUARIO_ACESSOUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TAB_002_USUARIO_ACESSO.
     * @param {TAB_002_USUARIO_ACESSOUpsertArgs} args - Arguments to update or create a TAB_002_USUARIO_ACESSO.
     * @example
     * // Update or create a TAB_002_USUARIO_ACESSO
     * const tAB_002_USUARIO_ACESSO = await prisma.tAB_002_USUARIO_ACESSO.upsert({
     *   create: {
     *     // ... data to create a TAB_002_USUARIO_ACESSO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TAB_002_USUARIO_ACESSO we want to update
     *   }
     * })
    **/
    upsert<T extends TAB_002_USUARIO_ACESSOUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TAB_002_USUARIO_ACESSOUpsertArgs<ExtArgs>>
    ): Prisma__TAB_002_USUARIO_ACESSOClient<$Result.GetResult<Prisma.$TAB_002_USUARIO_ACESSOPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TAB_002_USUARIO_ACESSOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TAB_002_USUARIO_ACESSOCountArgs} args - Arguments to filter TAB_002_USUARIO_ACESSOS to count.
     * @example
     * // Count the number of TAB_002_USUARIO_ACESSOS
     * const count = await prisma.tAB_002_USUARIO_ACESSO.count({
     *   where: {
     *     // ... the filter for the TAB_002_USUARIO_ACESSOS we want to count
     *   }
     * })
    **/
    count<T extends TAB_002_USUARIO_ACESSOCountArgs>(
      args?: Subset<T, TAB_002_USUARIO_ACESSOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TAB_002_USUARIO_ACESSOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TAB_002_USUARIO_ACESSO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TAB_002_USUARIO_ACESSOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TAB_002_USUARIO_ACESSOAggregateArgs>(args: Subset<T, TAB_002_USUARIO_ACESSOAggregateArgs>): Prisma.PrismaPromise<GetTAB_002_USUARIO_ACESSOAggregateType<T>>

    /**
     * Group by TAB_002_USUARIO_ACESSO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TAB_002_USUARIO_ACESSOGroupByArgs} args - Group by arguments.
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
      T extends TAB_002_USUARIO_ACESSOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TAB_002_USUARIO_ACESSOGroupByArgs['orderBy'] }
        : { orderBy?: TAB_002_USUARIO_ACESSOGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TAB_002_USUARIO_ACESSOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTAB_002_USUARIO_ACESSOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TAB_002_USUARIO_ACESSO model
   */
  readonly fields: TAB_002_USUARIO_ACESSOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TAB_002_USUARIO_ACESSO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TAB_002_USUARIO_ACESSOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TAB_002_USUARIO_ACESSO model
   */ 
  interface TAB_002_USUARIO_ACESSOFieldRefs {
    readonly UserCod: FieldRef<"TAB_002_USUARIO_ACESSO", 'Int'>
    readonly USUARIO: FieldRef<"TAB_002_USUARIO_ACESSO", 'String'>
    readonly DEPTO: FieldRef<"TAB_002_USUARIO_ACESSO", 'String'>
    readonly SENHA: FieldRef<"TAB_002_USUARIO_ACESSO", 'String'>
    readonly ACESSO: FieldRef<"TAB_002_USUARIO_ACESSO", 'Int'>
    readonly GRUPO: FieldRef<"TAB_002_USUARIO_ACESSO", 'Int'>
    readonly MaqNumberAtual: FieldRef<"TAB_002_USUARIO_ACESSO", 'String'>
    readonly MaqUserAtual: FieldRef<"TAB_002_USUARIO_ACESSO", 'String'>
    readonly MaqIP: FieldRef<"TAB_002_USUARIO_ACESSO", 'String'>
    readonly DataUltLog: FieldRef<"TAB_002_USUARIO_ACESSO", 'DateTime'>
    readonly HoraUltLog: FieldRef<"TAB_002_USUARIO_ACESSO", 'DateTime'>
    readonly DataHoraDig: FieldRef<"TAB_002_USUARIO_ACESSO", 'DateTime'>
    readonly ACESS_CLOUD: FieldRef<"TAB_002_USUARIO_ACESSO", 'Boolean'>
    readonly REFRESH_TOKEN: FieldRef<"TAB_002_USUARIO_ACESSO", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TAB_002_USUARIO_ACESSO findUnique
   */
  export type TAB_002_USUARIO_ACESSOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAB_002_USUARIO_ACESSO
     */
    select?: TAB_002_USUARIO_ACESSOSelect<ExtArgs> | null
    /**
     * Filter, which TAB_002_USUARIO_ACESSO to fetch.
     */
    where: TAB_002_USUARIO_ACESSOWhereUniqueInput
  }


  /**
   * TAB_002_USUARIO_ACESSO findUniqueOrThrow
   */
  export type TAB_002_USUARIO_ACESSOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAB_002_USUARIO_ACESSO
     */
    select?: TAB_002_USUARIO_ACESSOSelect<ExtArgs> | null
    /**
     * Filter, which TAB_002_USUARIO_ACESSO to fetch.
     */
    where: TAB_002_USUARIO_ACESSOWhereUniqueInput
  }


  /**
   * TAB_002_USUARIO_ACESSO findFirst
   */
  export type TAB_002_USUARIO_ACESSOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAB_002_USUARIO_ACESSO
     */
    select?: TAB_002_USUARIO_ACESSOSelect<ExtArgs> | null
    /**
     * Filter, which TAB_002_USUARIO_ACESSO to fetch.
     */
    where?: TAB_002_USUARIO_ACESSOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TAB_002_USUARIO_ACESSOS to fetch.
     */
    orderBy?: TAB_002_USUARIO_ACESSOOrderByWithRelationInput | TAB_002_USUARIO_ACESSOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TAB_002_USUARIO_ACESSOS.
     */
    cursor?: TAB_002_USUARIO_ACESSOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TAB_002_USUARIO_ACESSOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TAB_002_USUARIO_ACESSOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TAB_002_USUARIO_ACESSOS.
     */
    distinct?: TAB_002_USUARIO_ACESSOScalarFieldEnum | TAB_002_USUARIO_ACESSOScalarFieldEnum[]
  }


  /**
   * TAB_002_USUARIO_ACESSO findFirstOrThrow
   */
  export type TAB_002_USUARIO_ACESSOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAB_002_USUARIO_ACESSO
     */
    select?: TAB_002_USUARIO_ACESSOSelect<ExtArgs> | null
    /**
     * Filter, which TAB_002_USUARIO_ACESSO to fetch.
     */
    where?: TAB_002_USUARIO_ACESSOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TAB_002_USUARIO_ACESSOS to fetch.
     */
    orderBy?: TAB_002_USUARIO_ACESSOOrderByWithRelationInput | TAB_002_USUARIO_ACESSOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TAB_002_USUARIO_ACESSOS.
     */
    cursor?: TAB_002_USUARIO_ACESSOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TAB_002_USUARIO_ACESSOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TAB_002_USUARIO_ACESSOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TAB_002_USUARIO_ACESSOS.
     */
    distinct?: TAB_002_USUARIO_ACESSOScalarFieldEnum | TAB_002_USUARIO_ACESSOScalarFieldEnum[]
  }


  /**
   * TAB_002_USUARIO_ACESSO findMany
   */
  export type TAB_002_USUARIO_ACESSOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAB_002_USUARIO_ACESSO
     */
    select?: TAB_002_USUARIO_ACESSOSelect<ExtArgs> | null
    /**
     * Filter, which TAB_002_USUARIO_ACESSOS to fetch.
     */
    where?: TAB_002_USUARIO_ACESSOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TAB_002_USUARIO_ACESSOS to fetch.
     */
    orderBy?: TAB_002_USUARIO_ACESSOOrderByWithRelationInput | TAB_002_USUARIO_ACESSOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TAB_002_USUARIO_ACESSOS.
     */
    cursor?: TAB_002_USUARIO_ACESSOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TAB_002_USUARIO_ACESSOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TAB_002_USUARIO_ACESSOS.
     */
    skip?: number
    distinct?: TAB_002_USUARIO_ACESSOScalarFieldEnum | TAB_002_USUARIO_ACESSOScalarFieldEnum[]
  }


  /**
   * TAB_002_USUARIO_ACESSO create
   */
  export type TAB_002_USUARIO_ACESSOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAB_002_USUARIO_ACESSO
     */
    select?: TAB_002_USUARIO_ACESSOSelect<ExtArgs> | null
    /**
     * The data needed to create a TAB_002_USUARIO_ACESSO.
     */
    data: XOR<TAB_002_USUARIO_ACESSOCreateInput, TAB_002_USUARIO_ACESSOUncheckedCreateInput>
  }


  /**
   * TAB_002_USUARIO_ACESSO createMany
   */
  export type TAB_002_USUARIO_ACESSOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TAB_002_USUARIO_ACESSOS.
     */
    data: TAB_002_USUARIO_ACESSOCreateManyInput | TAB_002_USUARIO_ACESSOCreateManyInput[]
  }


  /**
   * TAB_002_USUARIO_ACESSO update
   */
  export type TAB_002_USUARIO_ACESSOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAB_002_USUARIO_ACESSO
     */
    select?: TAB_002_USUARIO_ACESSOSelect<ExtArgs> | null
    /**
     * The data needed to update a TAB_002_USUARIO_ACESSO.
     */
    data: XOR<TAB_002_USUARIO_ACESSOUpdateInput, TAB_002_USUARIO_ACESSOUncheckedUpdateInput>
    /**
     * Choose, which TAB_002_USUARIO_ACESSO to update.
     */
    where: TAB_002_USUARIO_ACESSOWhereUniqueInput
  }


  /**
   * TAB_002_USUARIO_ACESSO updateMany
   */
  export type TAB_002_USUARIO_ACESSOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TAB_002_USUARIO_ACESSOS.
     */
    data: XOR<TAB_002_USUARIO_ACESSOUpdateManyMutationInput, TAB_002_USUARIO_ACESSOUncheckedUpdateManyInput>
    /**
     * Filter which TAB_002_USUARIO_ACESSOS to update
     */
    where?: TAB_002_USUARIO_ACESSOWhereInput
  }


  /**
   * TAB_002_USUARIO_ACESSO upsert
   */
  export type TAB_002_USUARIO_ACESSOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAB_002_USUARIO_ACESSO
     */
    select?: TAB_002_USUARIO_ACESSOSelect<ExtArgs> | null
    /**
     * The filter to search for the TAB_002_USUARIO_ACESSO to update in case it exists.
     */
    where: TAB_002_USUARIO_ACESSOWhereUniqueInput
    /**
     * In case the TAB_002_USUARIO_ACESSO found by the `where` argument doesn't exist, create a new TAB_002_USUARIO_ACESSO with this data.
     */
    create: XOR<TAB_002_USUARIO_ACESSOCreateInput, TAB_002_USUARIO_ACESSOUncheckedCreateInput>
    /**
     * In case the TAB_002_USUARIO_ACESSO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TAB_002_USUARIO_ACESSOUpdateInput, TAB_002_USUARIO_ACESSOUncheckedUpdateInput>
  }


  /**
   * TAB_002_USUARIO_ACESSO delete
   */
  export type TAB_002_USUARIO_ACESSODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAB_002_USUARIO_ACESSO
     */
    select?: TAB_002_USUARIO_ACESSOSelect<ExtArgs> | null
    /**
     * Filter which TAB_002_USUARIO_ACESSO to delete.
     */
    where: TAB_002_USUARIO_ACESSOWhereUniqueInput
  }


  /**
   * TAB_002_USUARIO_ACESSO deleteMany
   */
  export type TAB_002_USUARIO_ACESSODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TAB_002_USUARIO_ACESSOS to delete
     */
    where?: TAB_002_USUARIO_ACESSOWhereInput
  }


  /**
   * TAB_002_USUARIO_ACESSO without action
   */
  export type TAB_002_USUARIO_ACESSODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAB_002_USUARIO_ACESSO
     */
    select?: TAB_002_USUARIO_ACESSOSelect<ExtArgs> | null
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


  export const TAB_002_USUARIO_ACESSOScalarFieldEnum: {
    UserCod: 'UserCod',
    USUARIO: 'USUARIO',
    DEPTO: 'DEPTO',
    SENHA: 'SENHA',
    ACESSO: 'ACESSO',
    GRUPO: 'GRUPO',
    MaqNumberAtual: 'MaqNumberAtual',
    MaqUserAtual: 'MaqUserAtual',
    MaqIP: 'MaqIP',
    DataUltLog: 'DataUltLog',
    HoraUltLog: 'HoraUltLog',
    DataHoraDig: 'DataHoraDig',
    ACESS_CLOUD: 'ACESS_CLOUD',
    REFRESH_TOKEN: 'REFRESH_TOKEN'
  };

  export type TAB_002_USUARIO_ACESSOScalarFieldEnum = (typeof TAB_002_USUARIO_ACESSOScalarFieldEnum)[keyof typeof TAB_002_USUARIO_ACESSOScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TAB_002_USUARIO_ACESSOWhereInput = {
    AND?: TAB_002_USUARIO_ACESSOWhereInput | TAB_002_USUARIO_ACESSOWhereInput[]
    OR?: TAB_002_USUARIO_ACESSOWhereInput[]
    NOT?: TAB_002_USUARIO_ACESSOWhereInput | TAB_002_USUARIO_ACESSOWhereInput[]
    UserCod?: IntFilter<"TAB_002_USUARIO_ACESSO"> | number
    USUARIO?: StringNullableFilter<"TAB_002_USUARIO_ACESSO"> | string | null
    DEPTO?: StringNullableFilter<"TAB_002_USUARIO_ACESSO"> | string | null
    SENHA?: StringNullableFilter<"TAB_002_USUARIO_ACESSO"> | string | null
    ACESSO?: IntNullableFilter<"TAB_002_USUARIO_ACESSO"> | number | null
    GRUPO?: IntNullableFilter<"TAB_002_USUARIO_ACESSO"> | number | null
    MaqNumberAtual?: StringNullableFilter<"TAB_002_USUARIO_ACESSO"> | string | null
    MaqUserAtual?: StringNullableFilter<"TAB_002_USUARIO_ACESSO"> | string | null
    MaqIP?: StringNullableFilter<"TAB_002_USUARIO_ACESSO"> | string | null
    DataUltLog?: DateTimeNullableFilter<"TAB_002_USUARIO_ACESSO"> | Date | string | null
    HoraUltLog?: DateTimeNullableFilter<"TAB_002_USUARIO_ACESSO"> | Date | string | null
    DataHoraDig?: DateTimeNullableFilter<"TAB_002_USUARIO_ACESSO"> | Date | string | null
    ACESS_CLOUD?: BoolNullableFilter<"TAB_002_USUARIO_ACESSO"> | boolean | null
    REFRESH_TOKEN?: StringNullableFilter<"TAB_002_USUARIO_ACESSO"> | string | null
  }

  export type TAB_002_USUARIO_ACESSOOrderByWithRelationInput = {
    UserCod?: SortOrder
    USUARIO?: SortOrderInput | SortOrder
    DEPTO?: SortOrderInput | SortOrder
    SENHA?: SortOrderInput | SortOrder
    ACESSO?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    MaqNumberAtual?: SortOrderInput | SortOrder
    MaqUserAtual?: SortOrderInput | SortOrder
    MaqIP?: SortOrderInput | SortOrder
    DataUltLog?: SortOrderInput | SortOrder
    HoraUltLog?: SortOrderInput | SortOrder
    DataHoraDig?: SortOrderInput | SortOrder
    ACESS_CLOUD?: SortOrderInput | SortOrder
    REFRESH_TOKEN?: SortOrderInput | SortOrder
  }

  export type TAB_002_USUARIO_ACESSOWhereUniqueInput = Prisma.AtLeast<{
    UserCod?: number
    USUARIO?: string
    AND?: TAB_002_USUARIO_ACESSOWhereInput | TAB_002_USUARIO_ACESSOWhereInput[]
    OR?: TAB_002_USUARIO_ACESSOWhereInput[]
    NOT?: TAB_002_USUARIO_ACESSOWhereInput | TAB_002_USUARIO_ACESSOWhereInput[]
    DEPTO?: StringNullableFilter<"TAB_002_USUARIO_ACESSO"> | string | null
    SENHA?: StringNullableFilter<"TAB_002_USUARIO_ACESSO"> | string | null
    ACESSO?: IntNullableFilter<"TAB_002_USUARIO_ACESSO"> | number | null
    GRUPO?: IntNullableFilter<"TAB_002_USUARIO_ACESSO"> | number | null
    MaqNumberAtual?: StringNullableFilter<"TAB_002_USUARIO_ACESSO"> | string | null
    MaqUserAtual?: StringNullableFilter<"TAB_002_USUARIO_ACESSO"> | string | null
    MaqIP?: StringNullableFilter<"TAB_002_USUARIO_ACESSO"> | string | null
    DataUltLog?: DateTimeNullableFilter<"TAB_002_USUARIO_ACESSO"> | Date | string | null
    HoraUltLog?: DateTimeNullableFilter<"TAB_002_USUARIO_ACESSO"> | Date | string | null
    DataHoraDig?: DateTimeNullableFilter<"TAB_002_USUARIO_ACESSO"> | Date | string | null
    ACESS_CLOUD?: BoolNullableFilter<"TAB_002_USUARIO_ACESSO"> | boolean | null
    REFRESH_TOKEN?: StringNullableFilter<"TAB_002_USUARIO_ACESSO"> | string | null
  }, "UserCod" | "USUARIO">

  export type TAB_002_USUARIO_ACESSOOrderByWithAggregationInput = {
    UserCod?: SortOrder
    USUARIO?: SortOrderInput | SortOrder
    DEPTO?: SortOrderInput | SortOrder
    SENHA?: SortOrderInput | SortOrder
    ACESSO?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    MaqNumberAtual?: SortOrderInput | SortOrder
    MaqUserAtual?: SortOrderInput | SortOrder
    MaqIP?: SortOrderInput | SortOrder
    DataUltLog?: SortOrderInput | SortOrder
    HoraUltLog?: SortOrderInput | SortOrder
    DataHoraDig?: SortOrderInput | SortOrder
    ACESS_CLOUD?: SortOrderInput | SortOrder
    REFRESH_TOKEN?: SortOrderInput | SortOrder
    _count?: TAB_002_USUARIO_ACESSOCountOrderByAggregateInput
    _avg?: TAB_002_USUARIO_ACESSOAvgOrderByAggregateInput
    _max?: TAB_002_USUARIO_ACESSOMaxOrderByAggregateInput
    _min?: TAB_002_USUARIO_ACESSOMinOrderByAggregateInput
    _sum?: TAB_002_USUARIO_ACESSOSumOrderByAggregateInput
  }

  export type TAB_002_USUARIO_ACESSOScalarWhereWithAggregatesInput = {
    AND?: TAB_002_USUARIO_ACESSOScalarWhereWithAggregatesInput | TAB_002_USUARIO_ACESSOScalarWhereWithAggregatesInput[]
    OR?: TAB_002_USUARIO_ACESSOScalarWhereWithAggregatesInput[]
    NOT?: TAB_002_USUARIO_ACESSOScalarWhereWithAggregatesInput | TAB_002_USUARIO_ACESSOScalarWhereWithAggregatesInput[]
    UserCod?: IntWithAggregatesFilter<"TAB_002_USUARIO_ACESSO"> | number
    USUARIO?: StringNullableWithAggregatesFilter<"TAB_002_USUARIO_ACESSO"> | string | null
    DEPTO?: StringNullableWithAggregatesFilter<"TAB_002_USUARIO_ACESSO"> | string | null
    SENHA?: StringNullableWithAggregatesFilter<"TAB_002_USUARIO_ACESSO"> | string | null
    ACESSO?: IntNullableWithAggregatesFilter<"TAB_002_USUARIO_ACESSO"> | number | null
    GRUPO?: IntNullableWithAggregatesFilter<"TAB_002_USUARIO_ACESSO"> | number | null
    MaqNumberAtual?: StringNullableWithAggregatesFilter<"TAB_002_USUARIO_ACESSO"> | string | null
    MaqUserAtual?: StringNullableWithAggregatesFilter<"TAB_002_USUARIO_ACESSO"> | string | null
    MaqIP?: StringNullableWithAggregatesFilter<"TAB_002_USUARIO_ACESSO"> | string | null
    DataUltLog?: DateTimeNullableWithAggregatesFilter<"TAB_002_USUARIO_ACESSO"> | Date | string | null
    HoraUltLog?: DateTimeNullableWithAggregatesFilter<"TAB_002_USUARIO_ACESSO"> | Date | string | null
    DataHoraDig?: DateTimeNullableWithAggregatesFilter<"TAB_002_USUARIO_ACESSO"> | Date | string | null
    ACESS_CLOUD?: BoolNullableWithAggregatesFilter<"TAB_002_USUARIO_ACESSO"> | boolean | null
    REFRESH_TOKEN?: StringNullableWithAggregatesFilter<"TAB_002_USUARIO_ACESSO"> | string | null
  }

  export type TAB_002_USUARIO_ACESSOCreateInput = {
    UserCod: number
    USUARIO?: string | null
    DEPTO?: string | null
    SENHA?: string | null
    ACESSO?: number | null
    GRUPO?: number | null
    MaqNumberAtual?: string | null
    MaqUserAtual?: string | null
    MaqIP?: string | null
    DataUltLog?: Date | string | null
    HoraUltLog?: Date | string | null
    DataHoraDig?: Date | string | null
    ACESS_CLOUD?: boolean | null
    REFRESH_TOKEN?: string | null
  }

  export type TAB_002_USUARIO_ACESSOUncheckedCreateInput = {
    UserCod: number
    USUARIO?: string | null
    DEPTO?: string | null
    SENHA?: string | null
    ACESSO?: number | null
    GRUPO?: number | null
    MaqNumberAtual?: string | null
    MaqUserAtual?: string | null
    MaqIP?: string | null
    DataUltLog?: Date | string | null
    HoraUltLog?: Date | string | null
    DataHoraDig?: Date | string | null
    ACESS_CLOUD?: boolean | null
    REFRESH_TOKEN?: string | null
  }

  export type TAB_002_USUARIO_ACESSOUpdateInput = {
    UserCod?: IntFieldUpdateOperationsInput | number
    USUARIO?: NullableStringFieldUpdateOperationsInput | string | null
    DEPTO?: NullableStringFieldUpdateOperationsInput | string | null
    SENHA?: NullableStringFieldUpdateOperationsInput | string | null
    ACESSO?: NullableIntFieldUpdateOperationsInput | number | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    MaqNumberAtual?: NullableStringFieldUpdateOperationsInput | string | null
    MaqUserAtual?: NullableStringFieldUpdateOperationsInput | string | null
    MaqIP?: NullableStringFieldUpdateOperationsInput | string | null
    DataUltLog?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HoraUltLog?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DataHoraDig?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ACESS_CLOUD?: NullableBoolFieldUpdateOperationsInput | boolean | null
    REFRESH_TOKEN?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TAB_002_USUARIO_ACESSOUncheckedUpdateInput = {
    UserCod?: IntFieldUpdateOperationsInput | number
    USUARIO?: NullableStringFieldUpdateOperationsInput | string | null
    DEPTO?: NullableStringFieldUpdateOperationsInput | string | null
    SENHA?: NullableStringFieldUpdateOperationsInput | string | null
    ACESSO?: NullableIntFieldUpdateOperationsInput | number | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    MaqNumberAtual?: NullableStringFieldUpdateOperationsInput | string | null
    MaqUserAtual?: NullableStringFieldUpdateOperationsInput | string | null
    MaqIP?: NullableStringFieldUpdateOperationsInput | string | null
    DataUltLog?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HoraUltLog?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DataHoraDig?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ACESS_CLOUD?: NullableBoolFieldUpdateOperationsInput | boolean | null
    REFRESH_TOKEN?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TAB_002_USUARIO_ACESSOCreateManyInput = {
    UserCod: number
    USUARIO?: string | null
    DEPTO?: string | null
    SENHA?: string | null
    ACESSO?: number | null
    GRUPO?: number | null
    MaqNumberAtual?: string | null
    MaqUserAtual?: string | null
    MaqIP?: string | null
    DataUltLog?: Date | string | null
    HoraUltLog?: Date | string | null
    DataHoraDig?: Date | string | null
    ACESS_CLOUD?: boolean | null
    REFRESH_TOKEN?: string | null
  }

  export type TAB_002_USUARIO_ACESSOUpdateManyMutationInput = {
    UserCod?: IntFieldUpdateOperationsInput | number
    USUARIO?: NullableStringFieldUpdateOperationsInput | string | null
    DEPTO?: NullableStringFieldUpdateOperationsInput | string | null
    SENHA?: NullableStringFieldUpdateOperationsInput | string | null
    ACESSO?: NullableIntFieldUpdateOperationsInput | number | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    MaqNumberAtual?: NullableStringFieldUpdateOperationsInput | string | null
    MaqUserAtual?: NullableStringFieldUpdateOperationsInput | string | null
    MaqIP?: NullableStringFieldUpdateOperationsInput | string | null
    DataUltLog?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HoraUltLog?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DataHoraDig?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ACESS_CLOUD?: NullableBoolFieldUpdateOperationsInput | boolean | null
    REFRESH_TOKEN?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TAB_002_USUARIO_ACESSOUncheckedUpdateManyInput = {
    UserCod?: IntFieldUpdateOperationsInput | number
    USUARIO?: NullableStringFieldUpdateOperationsInput | string | null
    DEPTO?: NullableStringFieldUpdateOperationsInput | string | null
    SENHA?: NullableStringFieldUpdateOperationsInput | string | null
    ACESSO?: NullableIntFieldUpdateOperationsInput | number | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    MaqNumberAtual?: NullableStringFieldUpdateOperationsInput | string | null
    MaqUserAtual?: NullableStringFieldUpdateOperationsInput | string | null
    MaqIP?: NullableStringFieldUpdateOperationsInput | string | null
    DataUltLog?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HoraUltLog?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DataHoraDig?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ACESS_CLOUD?: NullableBoolFieldUpdateOperationsInput | boolean | null
    REFRESH_TOKEN?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TAB_002_USUARIO_ACESSOCountOrderByAggregateInput = {
    UserCod?: SortOrder
    USUARIO?: SortOrder
    DEPTO?: SortOrder
    SENHA?: SortOrder
    ACESSO?: SortOrder
    GRUPO?: SortOrder
    MaqNumberAtual?: SortOrder
    MaqUserAtual?: SortOrder
    MaqIP?: SortOrder
    DataUltLog?: SortOrder
    HoraUltLog?: SortOrder
    DataHoraDig?: SortOrder
    ACESS_CLOUD?: SortOrder
    REFRESH_TOKEN?: SortOrder
  }

  export type TAB_002_USUARIO_ACESSOAvgOrderByAggregateInput = {
    UserCod?: SortOrder
    ACESSO?: SortOrder
    GRUPO?: SortOrder
  }

  export type TAB_002_USUARIO_ACESSOMaxOrderByAggregateInput = {
    UserCod?: SortOrder
    USUARIO?: SortOrder
    DEPTO?: SortOrder
    SENHA?: SortOrder
    ACESSO?: SortOrder
    GRUPO?: SortOrder
    MaqNumberAtual?: SortOrder
    MaqUserAtual?: SortOrder
    MaqIP?: SortOrder
    DataUltLog?: SortOrder
    HoraUltLog?: SortOrder
    DataHoraDig?: SortOrder
    ACESS_CLOUD?: SortOrder
    REFRESH_TOKEN?: SortOrder
  }

  export type TAB_002_USUARIO_ACESSOMinOrderByAggregateInput = {
    UserCod?: SortOrder
    USUARIO?: SortOrder
    DEPTO?: SortOrder
    SENHA?: SortOrder
    ACESSO?: SortOrder
    GRUPO?: SortOrder
    MaqNumberAtual?: SortOrder
    MaqUserAtual?: SortOrder
    MaqIP?: SortOrder
    DataUltLog?: SortOrder
    HoraUltLog?: SortOrder
    DataHoraDig?: SortOrder
    ACESS_CLOUD?: SortOrder
    REFRESH_TOKEN?: SortOrder
  }

  export type TAB_002_USUARIO_ACESSOSumOrderByAggregateInput = {
    UserCod?: SortOrder
    ACESSO?: SortOrder
    GRUPO?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TAB_002_USUARIO_ACESSODefaultArgs instead
     */
    export type TAB_002_USUARIO_ACESSOArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TAB_002_USUARIO_ACESSODefaultArgs<ExtArgs>

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