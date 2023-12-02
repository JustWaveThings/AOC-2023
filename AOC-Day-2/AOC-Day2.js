import fs from 'fs/promises';

const readFile = path => fs.readFile(path, { encoding: 'utf8' });

// the puzzle input as an array

const input = (await readFile('./inputData-Day2.txt')) // ~~ Update Day ~~ needed wrapped because it returns a promise
  .trim() // day 1 had trailing whitespace that was on its own line.
  .split('\n'); // splits the text file on the return character

// sanity check
// console.log('\nSanity Check\n', '\nIs array: ', Array.isArray(input), '\nArray length: ', input.length, '\nFirst element: ', input.at(0), '\nLast element:', input.at(-1));

// further parse input to separate the rounds of the game and to tie the numbers to their respective colors

const redNum = 12;
const greenNum = 13;
const blueNum = 14;

let impossibleGames = [];
let possibleGames = [];
for (let i = 1; i < input.length; i++) {
  const firstSplit = input[i - 1].split(':')[1].split(';');
  const secondSplit = firstSplit.map(el => el.split(',')).flat();
  // trim leading whitespace
  const trimmed = secondSplit.map(el => el.trim());

  trimmed.forEach(el => {
    if (el.includes('red')) {
      const num = +el.split(' ')[0];
      if (num > redNum) {
        impossibleGames.includes(i) ? null : impossibleGames.push(i);
      }
    }
    if (el.includes('green')) {
      const num = +el.split(' ')[0];
      if (num > greenNum) {
        impossibleGames.includes(i) ? null : impossibleGames.push(i);
      }
    }
    if (el.includes('blue')) {
      const num = +el.split(' ')[0];
      if (num > blueNum) {
        impossibleGames.includes(i) ? null : impossibleGames.push(i);
      }
    }
  });
}

// find the possible games
for (let i = 1; i <= 100; i++) {
  if (!impossibleGames.includes(i)) {
    possibleGames.push(i);
  }
}
// sum the possible games
const answer = possibleGames.reduce((a, b) => a + b, 0);

console.log(answer);
