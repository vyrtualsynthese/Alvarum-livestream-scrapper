const scrapeIt = require("scrape-it");

module.exports = class Scraper {

    async raisedScraper() {
        let scraped = await scrapeIt("http://www.alvarum.com/ashuvidz", {amount: ".raised .amount .formattedAmount"});

        if (scraped.response.statusCode !== 200) {
            throw new Error('Unable to reach alvarum')
        }

        let result = /([0-9][0-9\s]+((,|\.)[0-9]+)?)*/g.exec(scraped.data.amount)[0];
        result = result.replace(/\s/g,'').replace(',', '.');
        return parseFloat(result);
    };

    async goalScraper() {
        let scraped = await scrapeIt("http://www.alvarum.com/ashuvidz", {targetAmount: ".target-amount .formattedAmount"});

        if (scraped.response.statusCode !== 200) {
            throw new Error('Unable to reach alvarum');
        }
        let result = /([0-9][0-9\s]+((,|\.)[0-9]+)?)*/g.exec(scraped.data.targetAmount)[0];
        result = result.replace(/\s/g,'').replace(',', '.');
        return parseFloat(result);
    }
};