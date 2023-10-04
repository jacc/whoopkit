import { WhoopKit as whoop } from "..";
import "dotenv/config";

(async () => {
  if (!process.env.WHOOP_EMAIL || !process.env.WHOOP_PASSWORD) {
    throw new Error("Please provide an email and password");
  }

  const login = await whoop.login(
    process.env.WHOOP_EMAIL!,
    process.env.WHOOP_PASSWORD!
  );

  let access_token: string;
  let refresh_token: string;

  if (login.isOk()) {
    console.log("✅ Login was successful!\n");
    access_token = login.value.access_token;
    refresh_token = login.value.refresh_token;
  } else {
    throw new Error("❌ Login was not successful: ", login.error);
  }

  const auth = new whoop(access_token, refresh_token);

  const profile = await auth.user.getMe();

  let userId: string;

  if (profile.isOk()) {
    console.log(
      `✅ [examples/profile] Logged in as ${profile.value.address.firstName}\n`
    );
    userId = String(profile.value.userId);
  } else {
    throw new Error(
      `✅ [examples/profile] ❌ Fetching the current user failed: ${profile.error}\n`
    );
  }

  const userState = await auth.user.getUserState();
  if (userState.isOk()) {
    console.log(
      `✅ [examples/user/getUserState] User State data fetched successfully: ${JSON.stringify(
        userState.value
      )}\n`
    );
  } else {
    console.error(
      `✅ [examples/user/getUserState] ❌ Fetching User State data failed: ${userState.error}\n`
    );
  }

  const userLevel = await auth.achievements.getUserLevel(userId);
  if (userLevel.isOk()) {
    console.log(
      `✅ [examples/achievements/userLevel] User level data fetched successfully: ${JSON.stringify(
        userLevel.value
      )}\n`
    );
  } else {
    console.error(
      `✅ [examples/achievements/userLevel] ❌ Fetching user level data failed: ${userLevel.error}\n`
    );
  }

  const streaks = await auth.achievements.getStreaks(userId);
  if (streaks.isOk()) {
    console.log(
      `✅ [examples/achievements/streaks] Streaks data fetched successfully: ${JSON.stringify(
        streaks.value
      )}\n`
    );
  } else {
    console.error(
      `✅ [examples/achievements/streaks] ❌ Fetching streaks data failed: ${streaks.error}\n`
    );
  }

  const stress = await auth.health.getStress();
  if (stress.isOk()) {
    console.log(
      `✅ [examples/stress] Stress data fetched successfully: ${JSON.stringify(
        stress.value
      )}\n`
    );
  } else {
    console.error(
      `✅ [examples/stress] ❌ Fetching stress data failed: ${stress.error}\n`
    );
  }

  const averageHRV = await auth.health.getAverageHRV();
  if (averageHRV.isOk()) {
    console.log(
      `✅ [examples/health/averageHRV] Average HRV data fetched successfully: ${JSON.stringify(
        averageHRV.value
      )}\n`
    );
  } else {
    console.error(
      `✅ [examples/health/averageHRV] ❌ Fetching average HRV data failed: ${averageHRV.error}\n`
    );
  }

  const averageSleepPerformance =
    await auth.health.getAverageSleepPerformance();
  if (averageSleepPerformance.isOk()) {
    console.log(
      `✅ [examples/health/averageSleepPerformance] Average Sleep Performance data fetched successfully: ${JSON.stringify(
        averageSleepPerformance.value
      )}\n`
    );
  } else {
    console.error(
      `✅ [examples/health/averageSleepPerformance] ❌ Fetching Average Sleep Performance data failed: ${averageSleepPerformance.error}\n`
    );
  }

  const averageHeartRate = await auth.health.getAverageHeartRate();
  if (averageHeartRate.isOk()) {
    console.log(
      `✅ [examples/health/averageHeartRate] Average Heart Rate data fetched successfully: ${JSON.stringify(
        averageHeartRate.value
      )}\n`
    );
  } else {
    console.error(
      `✅ [examples/health/averageHeartRate] ❌ Fetching Average Heart Rate data failed: ${averageHeartRate.error}\n`
    );
  }

  const averageRestingHeartRate =
    await auth.health.getAverageRestingHeartRate();
  if (averageRestingHeartRate.isOk()) {
    console.log(
      `✅ [examples/health/averageRestingHeartRate] Average Resting Heart Rate data fetched successfully: ${JSON.stringify(
        averageRestingHeartRate.value
      )}\n`
    );
  } else {
    console.error(
      `✅ [examples/health/averageRestingHeartRate] ❌ Fetching Average Resting Heart Rate data failed: ${averageRestingHeartRate.error}\n`
    );
  }

  const averageCalories = await auth.health.getAverageCalories();
  if (averageCalories.isOk()) {
    console.log(
      `✅ [examples/health/averageCalories] Average Calories data fetched successfully: ${JSON.stringify(
        averageCalories.value
      )}\n`
    );
  } else {
    console.error(
      `✅ [examples/health/averageCalories] ❌ Fetching Average Calories data failed: ${averageCalories.error}\n`
    );
  }

  const averageRespiratoryRate = await auth.health.getAverageRespiratoryRate();
  if (averageRespiratoryRate.isOk()) {
    console.log(
      `✅ [examples/health/averageRespiratoryRate] Average Respiratory Rate data fetched successfully: ${JSON.stringify(
        averageRespiratoryRate.value
      )}\n`
    );
  } else {
    console.error(
      `✅ [examples/health/averageRespiratoryRate] ❌ Fetching Average Respiratory Rate data failed: ${averageRespiratoryRate.error}\n`
    );
  }
})();
