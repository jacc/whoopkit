import { Result } from "neverthrow";

export type WhoopResult<T> = Result<T, Error>;
export type WhoopAsyncResult<T> = Promise<WhoopResult<T>>;
