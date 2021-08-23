Feature('collectDailyReward');

const rewardUrl = process.env.reward_URL;

Scenario('test something', ({ I }) => {
    I.amOnPage(rewardUrl);
});

// run command: npx codeceptjs run --steps