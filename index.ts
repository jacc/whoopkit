import "cross-fetch/polyfill";
import { WhoopKitAchievements } from "./modules/achievements";
import { WhoopKitHealth } from "./modules/health";
import { WhoopKitUser } from "./modules/user";
import { LoggedInUser } from "./types/authorization";
import { requestHeaders } from "./types/constants";

export class WhoopKit {
  public accessToken: string;
  public refreshToken?: string | null;

  user: WhoopKitUser;
  achievements: WhoopKitAchievements;
  health: WhoopKitHealth;

  constructor(accessToken: string, refreshToken?: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken || null;

    if (!this.accessToken) {
      throw new Error("No access token provided in constructor.");
    }

    if (!this.refreshToken) {
      console.warn(
        "No refresh token provided in constructor - refreshAccessToken() will not work."
      );
    }

    this.user = new WhoopKitUser(this.accessToken);
    this.achievements = new WhoopKitAchievements(this.accessToken);
    this.health = new WhoopKitHealth(this.accessToken);
  }

  static async login(
    username: string,
    password: string
  ): Promise<LoggedInUser> {
    const response = await fetch("https://api-7.whoop.com/oauth/token", {
      method: "POST",
      headers: requestHeaders(),
      body: JSON.stringify({
        grant_type: "password",
        password: password,
        username: username,
      }),
    });
    return response.json();
  }

  async refreshAccessToken(): Promise<boolean> {
    if (!this.refreshToken) {
      throw new Error("No refresh token provided in constructor.");
    }

    const response = await fetch("https://api-7.whoop.com/oauth/token", {
      method: "POST",
      headers: requestHeaders(),
      body: JSON.stringify({
        grant_type: "refresh_token",
        refresh_token: this.refreshToken,
      }),
    });

    if (!response.ok) {
      throw new Error("Error refreshing access token.");
    }

    const json = await response.json();

    if (json.refresh_token) {
      this.refreshToken = json.refresh_token;
      this.accessToken = json.access_token;

      return true;
    } else {
      throw new Error("Error refreshing access token.");
    }
  }
}
