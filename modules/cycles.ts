const urlcat = require("urlcat").default;

import { safeFetch } from "../helpers/safeFetch";
import { WhoopAsyncResult } from "../types/neverthrow";

export class WhoopKitCycles {
  constructor(private accessToken: string) {
    this.accessToken = accessToken;
  }

  async getCycles(
    userId: string,
    startDate?: string,
    endDate?: string
  ): WhoopAsyncResult<any> {
    console.log(
      urlcat(
        `https://api.prod.whoop.com/activities-service/v1/cycles/aggregate/range?userid=:userId&startTime=:startDate&endTime=:endDate`,
        {
          userId: userId,
          startDate: startDate ? startDate : new Date().toISOString(),
          endDate: endDate ? endDate : new Date().toISOString(),
        }
      )
    );

    const request = await safeFetch<any>(
      urlcat(
        `https://api.prod.whoop.com/activities-service/v1/cycles/aggregate/range?userid=:userId&startTime=:startDate&endTime=:endDate`,
        {
          userId: userId,
          startDate: startDate
            ? startDate
            : new Date(
                new Date().setDate(new Date().getDate() - 7)
              ).toISOString(),
          endDate: endDate ? endDate : new Date().toISOString(),
        }
      ),
      this.accessToken
    );

    return request;
  }
}
