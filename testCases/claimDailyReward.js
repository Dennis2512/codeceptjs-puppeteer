Feature('claimDailyReward');

const rewardUrl = process.env.reward_URL;
const email = process.env.reward_user_email;
const pwd = process.env.reward_user_pwd;

Scenario('Claim your daily rewards.', ({ I }) => {
    I.amOnPage(rewardUrl);
    I.wait(2);
    I.click('Log In');
    I.wait(2);
    I.fillField('input[type=email]', email);
    I.fillField('input[type=password]', pwd);
    I.pressKey('Enter');
    I.click({class: 'rewardPageBtn'});
    I.click({class: 'claimRewardBtn'});
    I.click({class: 'closeBtn'});
});

// run command: npx codeceptjs run --steps