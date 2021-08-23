Feature('imageDownloader');

const url = process.env.imgDl_URL;

Scenario('Download images from a website.', ({ I }) => {
    I.amOnPage(url);
});

// run command: npx codeceptjs run --steps
