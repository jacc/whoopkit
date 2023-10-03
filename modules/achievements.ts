import { WhoopAchievementStreaks } from "../types/achievements";
import { WhoopAchievementLevel } from "../types/authorization";
import { requestHeaders } from "../types/constants";

export class WhoopSDKAchievements {
  constructor(private accessToken: string) {
    this.accessToken = accessToken;
  }

  async getUserLevel(userId: string): Promise<WhoopAchievementLevel> {
    const request = await fetch(
      `https://api.prod.whoop.com/achievements-service/v1/progression/memberLevel?userId=${userId}`,
      {
        headers: requestHeaders(this.accessToken),
      }
    );

    return request.json();
  }

  async getStreaks(userId: string): Promise<WhoopAchievementStreaks> {
    const request = await fetch(
      `https://api.prod.whoop.com/achievements-service/v1/streaks/user/${userId}`,
      {
        headers: requestHeaders(this.accessToken),
      }
    );

    return request.json();
  }
}
