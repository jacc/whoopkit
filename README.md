<span align="center">
	<img src="branding/banner.png">
</span>

<h4 align="center">Programatically access your health data from your Whoop band.</h4>

# This library vs. [Whoop Developer Center](https://developer.whoop.com/docs/introduction)
The main goal of this library is to generate requests using a user's login information, not done through OAuth2. While robust, Whoop's native API does not allow nearly as much data to be shared through the API, and requires a tedious process of generating and getting an app approved. If you are looking to create something commercial I reccomend using their platform and not this.

**🚧 Developer note: I have no idea if this is against their terms of service. By using this library, you agree that everything that is done to your account is by your own accord, and WhoopKit's developers do not take any responsibility for anything that may happen to your account. Which is probably nothing. Maybe.**

## Note
Nothing in this library is stable, tested, or should be considered for use in a production environment. Things will break and change, so use at your own will.

## Getting Started
This example will be easiest if you use [Bun](https://bun.sh), but will work with NPM/Yarn/PNPM

First, install the dependencies

Bun: `bun install`

NPM: `npm install`

Yarn: `yarn install`

PNPM: `pnpm install`

After that, rename the `.env.example` file to `.env`, and add your email and password for your Whoop account.

Now, run the example:

Bun: `bun run examples/index.ts`

NPM/Yarn/PNPM: `npm run example`
## Coverage

### Authentication
| Method | Covered? | Notes |
| ------ | -------- | ----- |
| Login | ✅ | |
| Token Refresh | ✅ | |
| Logout | ❌ | |

### User
| Method | Covered? | Notes |
| ------ | -------- | ----- |
| Get logged in user | ✅ | |
| Get user state | ✅ | needs to be renamed to something more logical |
| Get achievements | ✅ | |

### Health Monitor
| Metric | Covered? | Notes |
| ------ | -------- | ----- |
| Heart Rate | ❌  | |
| Respiratory Rate | ❌  | |
| Blood Oxygen | ❌  | |
| RHR | ❌  | |
| HRV | ❌  | |
| Skin Temperature | ❌  | |

### Key statistics
| Metric | Covered? | Notes |
| ------ | -------- | ----- |
| Average HRV | ✅  | 1 week, 1 month, 6 months |
| Average RHR | ✅  | 1 week, 1 month, 6 months |
| Average HR | ✅  | 1 week, 1 month, 6 months |
| Average Sleep | ✅  | 1 week, 1 month, 6 months |
| Stress | 🚧  | Stress body is incredibly large, need to trim down |
| Average Calories | ✅  | 1 week, 1 month, 6 months |
| Sleep Consistency | ❌  | |
| Sleep Efficiency | ❌  | |
| Sleep Hours | ❌  | |
| Restorative Sleep (Hours) | ❌  | |
| Restorative Sleep (Percent) | ❌  | |
| Sleep Debt | ❌  | |
| Sleep Needed | ❌  | |
| Time in Bed | ❌  | |

### Activities
| Method | Covered? | Notes |
| ------ | -------- | ----- |
| Get recent activities | ❌ | |
| Get single activities | ❌ | |


### Sleep Coach
| Method | Covered? | Notes |
| ------ | -------- | ----- |
| Get bedtime | ❌ | |

### Insights
| Method | Covered? | Notes |
| ------ | -------- | ----- |
| Get journal | ❌ | |
| Get insights | ❌ | |

### Community
| Method | Covered? | Notes |
| ------ | -------- | ----- |
| Get teams | ❌ | |
| Create team | ❌ | |
| Join team | ❌ | |
| Leave team | ❌ | |
| View team | ❌ | |
| View team members | ❌ | |
| Get team chat | ❌ | |
| Send to team chat | ❌ | |
| Edit team info | ❌ | |
| Get team strain | ❌ | |
| Get team recovery | ❌ | |
| Get team sleep | ❌ | |







