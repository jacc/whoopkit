import {
  AuthenticatedUser as WhoopAuthenticatedUser,
  WhoopUserState,
} from "../types/authorization";
import { requestHeaders } from "../types/constants";
import { WhoopAsyncResult } from "../types/neverthrow";
import { ResultAsync } from "neverthrow";
import { safeFetch } from "../helpers/safeFetch";

export class WhoopKitUser {
  constructor(private accessToken: string) {
    this.accessToken = accessToken;
  }

  async getMe(): WhoopAsyncResult<WhoopAuthenticatedUser> {
    const request = await safeFetch<WhoopAuthenticatedUser>(
      "https://api.prod.whoop.com/membership",
      this.accessToken
    );

    return request;
  }

  async getUserState(): WhoopAsyncResult<WhoopUserState> {
    const request = await safeFetch<WhoopUserState>(
      "https://api.prod.whoop.com/activities-service/v1/user-state",
      this.accessToken
    );

    return request;
  }
}
