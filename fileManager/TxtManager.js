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
                const result = fileContent.split(' ');
                resolve(parseFloat(result[0]));
            })
        });
    }

    async fileWriter(donationRaised, donationGoal) {
        return new Promise ((resolve, reject) => {
            const myString = `${donationRaised} € / ${donationGoal} € `;
            fs.writeFile(donationGoalFile, myString, 'utf8', (err) => {
                if (err) throw reject(err);
                console.log('Current goal set to ' + myString);
                resolve();
            });
        })
    }
};