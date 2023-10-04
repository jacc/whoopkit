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

export class WhoopKitHealth {
  constructor(private accessToken: string) {
    this.accessToken = accessToken;
  }

  // TODO: type this
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
      score: response.gauge.gauge_score_display,
      text: response.gauge.gauge_subtext_display,
      state: response.stress_state,
      last_updated: response.last_updated_display,
    };
  }

  async getHRV(date?: string): Promise<any> {
    const request = await fetch(
      `https://api.prod.whoop.com/progression-service/v3/trends/HRV?endDate=${
        date ? date : new Date().toISOString().slice(0, 10)
      }`,
      {
        headers: requestHeaders(this.accessToken),
      }
    );

    const response = await request.json();

    return {
      week_average: response.week_time_segment.metrics[0].metric_value_display,
      month_average:
        response.month_time_segment.metrics[0].metric_value_display,
      six_month_average:
        response.six_month_time_segment.metrics[0].metric_value_display,
    };
  }
}
