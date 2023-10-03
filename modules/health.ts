/*

TODO:
- [add] average HRV
- [add] average sleep performance
- [add] average calories
- [add] average HR
- [add] average RHR
- [add] average respiratory rate

*/

import { requestHeaders } from "../types/constants";

export class WhoopSDKHealth {
  constructor(private accessToken: string) {
    this.accessToken = accessToken;
  }

  async getStress(date?: string): Promise<any> {
    const request = await fetch(
      `https://api.prod.whoop.com/health-service/v2/stress-bff?timestamp=${
        date ? date : new Date().toISOString()
      }`,
      {
        headers: requestHeaders(this.accessToken),
      }
    );

    const response = await request.json();

    return {
      stress: {
        score: response.gauge.gauge_score_display,
        text: response.gauge.gauge_subtext_display,
      },
    };
  }
}
