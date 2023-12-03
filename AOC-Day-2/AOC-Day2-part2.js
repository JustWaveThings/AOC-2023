import fs from 'fs/promises';

const readFile = path => fs.readFile(path, { encoding: 'utf8' });

// the puzzle input as an array

const input = (await readFile('./inputData-Day2.txt')) // ~~ Update Day ~~ needed wrapped because it returns a promise
  .trim() // day 1 had trailing whitespace that was on its own line.
  .split('\n'); // splits the text file on the return character

// sanity check
// console.log('\nSanity Check\n', '\nIs array: ', Array.isArray(input), '\nArray length: ', input.length, '\nFirst element: ', input.at(0), '\nLast element:', input.at(-1));

// further parse input to separate the rounds of the game and to tie the numbers to their respective colors

let miniumumPowersPerGame = [];

for (let i = 1; i <= input.length; i++) {
  let redNum = 0;
  let blueNum = 0;
  let greenNum = 0;

  const firstSplit = input[i - 1].split(':')[1].split(';');
  const secondSplit = firstSplit.map(el => el.split(',')).flat();
  // trim leading whitespace
  const trimmed = secondSplit.map(el => el.trim());

  trimmed.forEach(el => {
    if (el.includes('red')) {
      const num = +el.split(' ')[0];
      if (num > redNum) {
        redNum = num;
      }
    }
    if (el.includes('green')) {
      const num = +el.split(' ')[0];
      if (num > greenNum) {
        greenNum = num;
      }
    }
    if (el.includes('blue')) {
      const num = +el.split(' ')[0];
      if (num > blueNum) {
        blueNum = num;
      }
    }
  });

  // push the power of the game to the array
  miniumumPowersPerGame.push(redNum * greenNum * blueNum);
}

// sum the possible games

const answer = miniumumPowersPerGame.reduce((a, b) => a + b, 0);

console.log(answer);
