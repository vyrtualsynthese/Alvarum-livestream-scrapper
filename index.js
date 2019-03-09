const TxtManager = require('./fileManager/TxtManager');
const Scraper = require('./scraper/Scraper');

let currentGoal;

//#### Application initializer should run only on time at start.

const txtManager = new TxtManager();
const scraper = new Scraper();
txtManager.fileOpener()


    // Check if the file exists and is readable ! Should be removed
    .then(
        () => {
            return txtManager.fileReader()
        })


    // Read previous file state, check if data is maching and populate currentGoal variable to reduce calls.
    .then(
        (fileContent) => {
            if (isNaN(fileContent)) {
                currentGoal = 0;
            } else {
                currentGoal = fileContent;
                console.log("Application sucessfuly started");
            }
        })


    // Use scrapeIt to scrape alvarum raised amount
    .then(
        () => {
            return scraper.goalScraper();
        })


    .then((data) => {
        if (data !== currentGoal) {
            // currentGoal = data;

            txtManager.fileWriter(data)
        }
    }
);

//#### This part should run in loop during application execution.

/*txtManager.fileWriter('Je suis la premiere donation');
txtManager.fileWriter('Je suis la seconde donation');*/
