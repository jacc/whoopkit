import "cross-fetch/polyfill";
import {
  AuthenticatedUser as WhoopAuthenticatedUser,
  WhoopUserState,
} from "../types/authorization";
import { requestHeaders } from "../types/constants";

export class WhoopSDKUser {
  constructor(private accessToken: string) {
    this.accessToken = accessToken;
  }

  async getMe(): Promise<WhoopAuthenticatedUser> {
    const request = await fetch("https://api.prod.whoop.com/membership", {
      headers: requestHeaders(this.accessToken),
    });
    return request.json();
  }

  async getUserState(): Promise<WhoopUserState> {
    const request = await fetch(
      "https://api.prod.whoop.com/activities-service/v1/user-state",
      {
        headers: requestHeaders(this.accessToken),
      }
    );
    return request.json();
  }
}
