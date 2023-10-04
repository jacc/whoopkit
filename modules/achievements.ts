import { neverthrowFetch } from "../helpers/neverthrowFetch";
import { WhoopAchievementStreaks } from "../types/achievements";
import { WhoopAchievementLevel } from "../types/authorization";
import { requestHeaders } from "../types/constants";
import { WhoopAsyncResult } from "../types/neverthrow";

export class WhoopKitAchievements {
  constructor(private accessToken: string) {
    this.accessToken = accessToken;
  }

  async getUserLevel(userId: string): WhoopAsyncResult<WhoopAchievementLevel> {
    const request = await neverthrowFetch<WhoopAchievementLevel>(
      `https://api.prod.whoop.com/achievements-service/v1/progression/memberLevel?userId=${userId}`,
      this.accessToken
    );

    return request;
  }

  async getStreaks(userId: string): WhoopAsyncResult<WhoopAchievementStreaks> {
    const request = await neverthrowFetch<WhoopAchievementStreaks>(
      `https://api.prod.whoop.com/achievements-service/v1/streaks/user/${userId}`,
      this.accessToken
    );

    return request;
  }
}
