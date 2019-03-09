const scrapeIt = require("scrape-it");

module.exports = class Scraper {

    async goalScraper() {
        return new Promise((resolve, reject) => {
        scrapeIt("http://www.alvarum.com/ashuvidz",
            {
                amount: ".raised .amount .formattedAmount"
            })
            .then(({ data, response }) => {
                    console.log(response.statusCode);
                    if (response.statusCode !== 200) {
                        console.log('Unable to reach alvarum');
                        reject();
                    } else {
                        resolve(parseFloat(data.amount));

                    }});
                });
    };
};