/*

TODO:
- [add] average calories
- [add] average respiratory rate

*/

import { safeFetch } from "../helpers/safeFetch";
import { AverageResponse, Stress } from "../types/health";
import { WhoopAsyncResult } from "../types/neverthrow";

export class WhoopKitHealth {
  constructor(private accessToken: string) {
    this.accessToken = accessToken;
  }

  // TODO: type this
  async getStress(date?: string): WhoopAsyncResult<Stress> {
    const request = await safeFetch<any>(
      `https://api.prod.whoop.com/health-service/v2/stress-bff?timestamp=${
        date ? date : new Date().toISOString()
      }`,
      this.accessToken
    );

    console.log(request);

    return request.map((res) => ({
      score: res.gauge.gauge_score_display,
      text: res.gauge.gauge_subtext_display,
      state: res.stress_state,
      last_updated: res.last_updated_display,
    }));
  }

  async getAverageHRV(date?: string): WhoopAsyncResult<AverageResponse> {
    const request = await safeFetch<any>(
      `https://api.prod.whoop.com/progression-service/v3/trends/HRV?endDate=${
        date ? date : new Date().toISOString().slice(0, 10)
      }`,
      this.accessToken
    );

    return request.map((res) => ({
      week_average: res.week_time_segment.metrics[0].metric_value_display,
      month_average: res.month_time_segment.metrics[0].metric_value_display,
      six_month_average:
        res.six_month_time_segment.metrics[0].metric_value_display,
    }));
  }

  async getAverageSleepPerformance(
    date?: string
  ): WhoopAsyncResult<AverageResponse> {
    // TODO: Type this call
    const request = await safeFetch<any>(
      `https://api.prod.whoop.com/progression-service/v3/trends/SLEEP_PERFORMANCE?endDate=${
        date ? date : new Date().toISOString().slice(0, 10)
      }`,
      this.accessToken
    );

    return request.map((res) => ({
      week_average: res.week_time_segment.metrics[0].metric_value_display,
      month_average: res.month_time_segment.metrics[0].metric_value_display,
      six_month_average:
        res.six_month_time_segment.metrics[0].metric_value_display,
    }));
  }

  async getAverageHeartRate(date?: string): WhoopAsyncResult<AverageResponse> {
    // TODO: Type this call
    const request = await safeFetch<any>(
      `https://api.prod.whoop.com/progression-service/v3/trends/AVERAGE_HR?endDate=${
        date ? date : new Date().toISOString().slice(0, 10)
      }`,
      this.accessToken
    );

    return request.map((res) => ({
      week_average: res.week_time_segment.metrics[0].metric_value_display,
      month_average: res.month_time_segment.metrics[0].metric_value_display,
      six_month_average:
        res.six_month_time_segment.metrics[0].metric_value_display,
    }));
  }

  async getAverageRestingHeartRate(
    date?: string
  ): WhoopAsyncResult<AverageResponse> {
    const request = await safeFetch<any>(
      `https://api.prod.whoop.com/progression-service/v3/trends/RHR?endDate=${
        date ? date : new Date().toISOString().slice(0, 10)
      }`,
      this.accessToken
    );

    return request.map((res) => ({
      week_average: res.week_time_segment.metrics[0].metric_value_display,
      month_average: res.month_time_segment.metrics[0].metric_value_display,
      six_month_average:
        res.six_month_time_segment.metrics[0].metric_value_display,
    }));
  }

  async getAverageCalories(date?: string): WhoopAsyncResult<AverageResponse> {
    const request = await safeFetch<any>(
      `https://api.prod.whoop.com/progression-service/v3/trends/CALORIES?endDate=${
        date ? date : new Date().toISOString().slice(0, 10)
      }`,
      this.accessToken
    );

    return request.map((res) => ({
      week_average: res.week_time_segment.metrics[0].metric_value_display,
      month_average: res.month_time_segment.metrics[0].metric_value_display,
      six_month_average:
        res.six_month_time_segment.metrics[0].metric_value_display,
    }));
  }

  async getAverageRespiratoryRate(
    date?: string
  ): WhoopAsyncResult<AverageResponse> {
    const request = await safeFetch<any>(
      `https://api.prod.whoop.com/progression-service/v3/trends/RESPIRATORY_RATE?endDate=${
        date ? date : new Date().toISOString().slice(0, 10)
      }`,
      this.accessToken
    );

    return request.map((res) => ({
      week_average: res.week_time_segment.metrics[0].metric_value_display,
      month_average: res.month_time_segment.metrics[0].metric_value_display,
      six_month_average:
        res.six_month_time_segment.metrics[0].metric_value_display,
    }));
  }
}
