import fetch from "cross-fetch";
import { ResultAsync } from "neverthrow";
import { WhoopAsyncResult } from "../types/neverthrow";
import { requestHeaders } from "../types/constants";

export type neverthrowFetchProps = {
  init?: RequestInit;
  error?: string;
};

export const neverthrowFetch = async <T>(
  url: string,
  accessToken?: string,
  props?: neverthrowFetchProps
): WhoopAsyncResult<T> => {
  const request = await ResultAsync.fromPromise(
    fetch(url, {
      headers: requestHeaders(accessToken),
      ...props?.init,
    }),
    (e) =>
      new Error(
        props?.error
          ? props.error
          : `Fetch failed with status ${(e as Error).message}`
      )
  ).map((res) => res.json() as Promise<T>);

  return request;
};
