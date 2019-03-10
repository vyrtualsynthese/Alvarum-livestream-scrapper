const scrapeIt = require("scrape-it");

module.exports = class Scraper {

    async raisedScraper() {
        let scraped = await scrapeIt("http://www.alvarum.com/ashuvidz", {amount: ".raised .amount .formattedAmount"});

        if (scraped.response.statusCode !== 200) {
            throw new Error('Unable to reach alvarum')
        }
        return parseFloat(scraped.data.amount);
    };

    async goalScraper() {
        let scraped = await scrapeIt("http://www.alvarum.com/ashuvidz", {targetAmount: ".target-amount .formattedAmount"});

        if (scraped.response.statusCode !== 200) {
            throw new Error('Unable to reach alvarum');
        }
        return parseFloat(scraped.data.targetAmount);
    }
};