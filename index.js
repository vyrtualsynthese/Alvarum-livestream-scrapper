const TxtManager = require('./fileManager/TxtManager');
const Scraper = require('./scraper/Scraper');

let currentRaised;

//#### Application initializer should run only on time at start.

const txtManager = new TxtManager();
const scraper = new Scraper();
txtManager.fileReader()

    // After initiating app call the timeOut function
    .then(

        // Read previous file state, check if data is maching and populate currentGoal variable to reduce calls.
        (fileContent) => {
            currentRaised = fileContent;
            console.log("Application sucessfuly started");
        })

    // Use scrapeIt to scrape alvarum raised amount
    .then(
        () => {
            setInterval(theInfiniteLoop, 60000);
            theInfiniteLoop();
        });

function theInfiniteLoop () {

    Promise.all([scraper.raisedScraper(), scraper.goalScraper()])

    // After scraping check if raised amount changed if so write it into the file.
        .then((alvarumRaised) => {
            console.log(alvarumRaised);
            if (alvarumRaised[0] !== currentRaised) {
                currentRaised = alvarumRaised[0];
                let currentGoal = alvarumRaised[1];
                txtManager.fileWriter(currentRaised, currentGoal)
            }
        });
}