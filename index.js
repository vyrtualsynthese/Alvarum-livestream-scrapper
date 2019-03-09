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

    // After initiating app call the timeOut function
    .then(

        // Read previous file state, check if data is maching and populate currentGoal variable to reduce calls.
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
            setInterval(theInfiniteLoop, 60000);
            theInfiniteLoop();
        });



function theInfiniteLoop () {

    scraper.goalScraper()

    // After scraping check if raised amount changed if so write it into the file.
        .then((data) => {
            if (data !== currentGoal) {
                txtManager.fileWriter(data)
            }
        });
}