export interface WhoopAchievementStreaks {
  user_streaks: Userstreaks;
}

interface Userstreaks {
  first_30_recoveries: First30recoveries;
  high_performance_sleep: First30recoveries;
  green_recovery: First30recoveries;
}

interface First30recoveries {
  current: number;
  all_time_max: number;
}
