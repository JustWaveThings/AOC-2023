import fs from 'fs/promises';

const readFile = path => fs.readFile(path, { encoding: 'utf8' });

// the puzzle input as an array

const input = (await readFile('./inputData-Day1.txt')) // ~~ Update Day ~~ needed wrapped because it returns a promise
  .trim() // day 1 had trailing whitespace that was on its own line.
  .split('\n'); // splits the text file on the return character

// sanity check
//console.log('\nSanity Check\n', '\nIs array: ', Array.isArray(input), '\nArray length: ', input.length, '\nFirst element: ', input.at(0), '\nLast element:', input.at(-1));

// for reference https://adventofcode.com/2023/day/1

// in each element find the first and last digits in the string

// const example = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];

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
