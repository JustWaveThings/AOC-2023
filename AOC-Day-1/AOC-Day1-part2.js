import fs from 'fs/promises';

const readFile = path => fs.readFile(path, { encoding: 'utf8' });

// the puzzle input as an array

const input = (await readFile('./inputData-Day1.txt')) // ~~ Update Day ~~ needed wrapped because it returns a promise
  .trim() // day 1 had trailing whitespace that was on its own line.
  .split('\n'); // splits the text file on the return character

// sanity check
//console.log('\nSanity Check\n', '\nIs array: ', Array.isArray(input), '\nArray length: ', input.length, '\nFirst element: ', input.at(0), '\nLast element:', input.at(-1));

// for reference https://adventofcode.com/2023/day/1

/* --- Part Two ---
Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

Equipped with this new information, you now need to find the real first and last digit on each line. For example:

two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

What is the sum of all of the calibration values? */

const innerMappedInput = input.map(el => {
  const characters = [...el];
  let firstNum, lastNum;

  for (let i = 0, j = characters.length - 1; i <= characters.length - 1; i++, j--) {
    const start = characters[i];
    const end = characters[j];

    if (firstNum === undefined && !Number.isNaN(Number(start))) {
      firstNum = start;
    }

    if (lastNum === undefined && !Number.isNaN(Number(end))) {
      lastNum = end;
    }

    if (firstNum !== undefined && lastNum !== undefined) {
      break;
    }
  }
  return [firstNum, lastNum];
});

// concat each inner array

const concat = innerMappedInput.map(el => `${el[0]}${el[1]}`);

// reduce array to get total

const answer = concat.reduce((a, b) => Number(a) + Number(b), 0);

console.log(answer);
