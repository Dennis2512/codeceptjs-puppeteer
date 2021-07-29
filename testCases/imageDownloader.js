Feature('imageDownloader');

const url = process.env.imgDl_URL;

Scenario('test something', ({ I }) => {
    I.amOnPage(url);
});

// run command: npx codeceptjs run --steps
