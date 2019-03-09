const fs = require('fs');
const fsPromise = require('fs').promises;

const donationGoalFile = './donationGoal.txt';

module.exports = class TxtManager {

    //useless but I like it !
    async fileOpener(){
        let filehandle;
        try {
            filehandle = await fsPromise.open(donationGoalFile, 'r');
        } finally {
            if (filehandle !== undefined) {
                await filehandle.close();
            } else {
                console.log('unable to reach donationGoal.txt');
                process.exit(22);
            }
        }
    };

    async fileReader() {
        return new Promise((resolve, reject) => {
            fs.readFile(donationGoalFile, 'utf8', (err, fileContent) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(parseFloat(fileContent));
            })
        });
    }

    fileWriter(donationGoal) {
        return new Promise ((resolve, reject) => {
            fs.writeFile(donationGoalFile, donationGoal, 'utf8', (err) => {
                if (err) throw reject(err);
                console.log('The file has been saved!');
                resolve();
            });
        })

    }
};