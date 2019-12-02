// list of input from the exercice
const input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,6,19,23,1,13,23,27,1,6,27,31,1,31,10,35,1,35,6,39,1,39,13,43,2,10,43,47,1,47,6,51,2,6,51,55,1,5,55,59,2,13,59,63,2,63,9,67,1,5,67,71,2,13,71,75,1,75,5,79,1,10,79,83,2,6,83,87,2,13,87,91,1,9,91,95,1,9,95,99,2,99,9,103,1,5,103,107,2,9,107,111,1,5,111,115,1,115,2,119,1,9,119,0,99,2,0,14,0];

// first iteration on the first parameter
for (let i = 0; i < 100; i++) {

    // second (nested) iteration on the second parameter
    for (let j = 0; j < 100; j++) {

        // initialisation of the index for each test
        let index = 0;
        // clone of the input to perform the test
        let test = input.slice(0);
        // initialisation of the parameters
        test[1] = i;
        test[2] = j;
        // runs the loop of the exercice
        while (test[index] !== 99) {
            if (test[index] === 1) {
                // addition
                test[test[index + 3]] = test[test[index + 1]]  + test[test[index + 2]];
            } else if (test[index] === 2) {
                // multiplication
                test[test[index + 3]] = test[test[index + 1]]  * test[test[index + 2]];
            } else {
                console.log('ERROR');
            }
            // move the index to the next input.
            index += 4;
        }
        if (i==12 && j==2) {
            // parameters for the first exercice
            console.log('response 1',test[0]);
        }
        if (test[0] === 19690720) {
            // solution for the second exercice
            console.log('response 2',i * 100 + j);
        }
    }
}