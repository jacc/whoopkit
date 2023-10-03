export interface LoggedInUser {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  membershipStatus: string;
  user: LoggedInUserUser;
  needsProfileCompletion: string;
  token_type: string;
}

interface LoggedInUserUser {
  id: number;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  adminDivision: string;
  fullName: string;
  profile: LoggedInUserProfile;
  teams: any[];
  preferences: LoggedInUserPreferences;
  email: string;
  username: string;
  privacyProfile: LoggedInUserPrivacyProfile;
}

interface LoggedInUserPrivacyProfile {
  overview: string;
  intensity: string;
  recovery: string;
  sleep: string;
  stats: string;
  comps: string;
}

interface LoggedInUserPreferences {
  performanceOptimizationAssessment: boolean;
  performanceOptimizationDayOfWeek: number;
}

interface LoggedInUserProfile {
  userId: number;
  bioDataId: number;
  height: number;
  weight: number;
  birthday: string;
  gender: string;
  unitSystem: string;
  fitnessLevel: string;
  createdAt: string;
  updatedAt: string;
  timezoneOffset: string;
  physiologicalBaseline?: any;
  id: number;
  maxHeartRate: number;
  minHeartRate: number;
  avgHeartRate?: any;
  kilojoules?: any;
  canUploadData: boolean;
}

export type AuthenticatedUser = {
  userId: number;
  membershipStatus: string;
  expirationDate?: any;
  canceledAt?: any;
  cancelAtPeriodEnd: boolean;
  canUpgrade: boolean;
  nextBillDate: string;
  nextBillAmount: number;
  cardDigits: string;
  cardType: string;
  address: AuthenticatedUserAddress;
  checkoutOrigin: string;
  strapSerial: string;
  coupon?: any;
  promotion: string;
  commitmentStart: string;
  commitmentEnd: string;
  balance: number;
  retentionPromo: boolean;
  cancellationOffer: AuthenticatedUserCancellationOffer;
  scheduledCancelDate?: any;
  subscriptionType: string;
  upgradeStatus: string;
  upcycleStatus: string;
  firstName: string;
  email: string;
  trialStart: string;
  trialDays: number;
  affiliate?: any;
};

interface AuthenticatedUserCancellationOffer {
  eligible: boolean;
  couponOneMonth50: string;
  coupon50: string;
  coupon100: string;
}

interface AuthenticatedUserAddress {
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  phone?: any;
}

export interface WhoopUserState {
  latestMetricsProcessed: number;
  source: string;
  startAt: string;
  state: string;
  activity?: any;
  trackedSleep: boolean;
}

export interface WhoopAchievementLevel {
  id: number;
  level: number;
  experience_left_to_level_up: number;
  progression_level: WhoopAchievementProgressionlevel;
  next_level_mini_badge: string;
  created_at: string;
  updated_at: string;
  experience: number;
  user_id: number;
}

interface WhoopAchievementProgressionlevel {
  tier: string;
  created_at: string;
  updated_at: string;
  level: number;
  badge: string;
  mini_badge: string;
  minimum_experience: number;
  maximum_experience: number;
}
