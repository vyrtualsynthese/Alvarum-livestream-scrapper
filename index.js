const TxtManager = require('./fileManager/TxtManager');

let currentGoal;

//#### Application initializer should run only on time at start.

const txtManager = new TxtManager();
// Verify if the file exists and is writable
txtManager.fileOpener()
    .then(
        () => {
            return txtManager.fileReader()
        })
    .then(
        (fileContent) =>
        {
            console.log(fileContent);
        });

// Read the content from the file and verify if it is a numer. If it is a number then put that in a buffer variable if not set buffer variable to Zero.

//#### This part should run in loop during application execution.
txtManager.fileWriter('Je suis la premiere donation');
txtManager.fileWriter('Je suis la seconde donation');
