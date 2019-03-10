const fs = require('fs');

const donationGoalFile = './donationGoal.txt';

module.exports = class TxtManager {

    async fileReader() {
        return new Promise((resolve, reject) => {
            fs.readFile(donationGoalFile, 'utf8', (err, fileContent) => {
                if (err) {
                    reject(err);
                    return;
                }
                let result = /((?:[0-9]+ ?)+(?:(,|\.)\d+)? €)*/g.exec(fileContent)[0];
                result = result.replace(' ', '');
                result = result.replace(',', '.');
                console.log('Here = ' + result);
                resolve(parseFloat(result));
            })
        });
    }

    async fileWriter(donationRaised, donationGoal) {
        return new Promise ((resolve, reject) => {
            const myString = `${donationRaised} / ${donationGoal} € `;
            fs.writeFile(donationGoalFile, myString, 'utf8', (err) => {
                if (err) throw reject(err);
                console.log('Current goal set to ' + myString);
                resolve();
            });
        })
    }
};