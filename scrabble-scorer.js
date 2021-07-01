// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
};
let newPointStructure = {};
function transform(word) {
    //let word;
    //let newPointStructure ={};
    for (let x in word) {
        for (let i = 0; i < word[x].length; i++) {
            newPointStructure[(word[x][i]).toLowerCase()] = x;

        }
        newPointStructure[' '] = 0;
    }
}
//console.log(newPointStructure(word));
transform(oldPointStructure);

function oldScrabbleScorer(word) {
    word = word.toUpperCase();
    let letterPoints = "";

    for (let i = 0; i < word.length; i++) {

        for (const pointValue in oldPointStructure) {

            if (oldPointStructure[pointValue].includes(word[i])) {
                letterPoints += `Points for '${word[i]}': ${pointValue}\n`
            }
        }
    }
    return letterPoints;

}
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
    console.log("Let's play some scrabble!");
    let word = input.question("Enter a word to score: ");
    let scoringAlgorithm = input.question(`
Which scoring algorithm would you like to use?
0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system
Enter 0, 1, or 2:`);
    return scoringAlgorithm;
}
// console.log(oldScrabbleScorer(word));
//console.log(word);
//};
//console.log(letterPoints);
let simpleScore;

let vowelBonusScore;

let scrabbleScore;
let scoringAlgorithms =
    [{
        name: "Simple Score",
        description: "Each letter is worth 1 point.",
        scoreFunction:
        function (word) {
            let total = 0;
            for (let i = 0; i < word.length; i++) {
                total = word[i] === ' ' ? total : total + 1;
            }
            return total;
        }
    }, {
        name: "Bonus Vowels",
        description: "Vowels are 3 pts. consonants are 1 pts.",
        scoreFunction:
        function (word) {
            let vowels = ['a', 'e', 'i', 'o', 'u'];
            let total = 0;
            for (let i = 0; i < word.length; i++) {
                if (vowels.includes(word[i])) {
                    total += 3
                } else if (word[i] === ' ') {}
                else {
                    total += 1
                }
            }
            return total;
        }
    }, {
        name: "Scrabble",
        description: "The traditional scoring algorithm",
        scoreFunction:
        function (word) {
            let total = 0;
            for (let i = 0; i < word.length; i++) {

                total += Number(newPointStructure[word[i]]);
            }
            return total;
        }
    }
];

//const scoringAlgorithms = [];


function scorerPrompt() {
    const input = require('readline-sync');
    let word = input.question("Enter a word to score: ");
    return word.toLowerCase();
}
/*function transform(word) {};
let word;
let newPointStructure ={};
for (let x in word) {
for (let i = 0; i < word[x].length; i++) {
newPointStructure[(word[x][i]).toLowerCase()] = x;

}
newPointStructure[' '] = 0;
}
//console.log(newPointStructure(word));
transform(oldPointStructure);*/

function runProgram() {
    let scrabbleScore = initialPrompt();
    //console.log(typeof scrabbleScore, scrabbleScore);
    let newScrabbleScore = scorerPrompt();
    if (scrabbleScore === '2' || scrabbleScore === '1') {
        console.log(`score for ${newScrabbleScore} is ${scoringAlgorithms[scrabbleScore].scoreFunction(newScrabbleScore)}`);
    } 
    else {
      ;
         console.log(`score for ${newScrabbleScore} is ${scoringAlgorithms[scrabbleScore].scoreFunction(newScrabbleScore)}`);
}
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
    initialPrompt: initialPrompt,
    transform: transform,
    oldPointStructure: oldPointStructure,
    simpleScore: simpleScore,
    vowelBonusScore: vowelBonusScore,
    scrabbleScore: scrabbleScore,
    scoringAlgorithms: scoringAlgorithms,
    newPointStructure: newPointStructure,
    runProgram: runProgram,
    scorerPrompt: scorerPrompt
};