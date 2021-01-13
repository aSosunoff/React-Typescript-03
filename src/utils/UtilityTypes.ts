export type OmitFromType<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ExtractGeneric<T> = T extends React.FC<infer X> ? X : never;

export type PropsOther<T = {}> = { [P in keyof T]: T[P]; };

export type Merge<A, B> = ({ [K in keyof A]: K extends keyof B ? B[K] : A[K] } &
  B) extends infer O
  ? { [K in keyof O]: O[K] }
  : never;

// not delete accessor
export type ExcludeMethods<T> =
  Pick<T, { [K in keyof T]: T[K] extends (_: any) => any ? never : K }[keyof T]>;
