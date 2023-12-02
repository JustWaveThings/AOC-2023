import fs from 'fs/promises';

const readFile = path => fs.readFile(path, { encoding: 'utf8' });

// the puzzle input as an array

const input = (await readFile('./inputData-Day1.txt')) // ~~ Update Day ~~ needed wrapped because it returns a promise
  .trim() // day 1 had trailing whitespace that was on its own line.
  .split('\n'); // splits the text file on the return character

// sanity check
//console.log('\nSanity Check\n', '\nIs array: ', Array.isArray(input), '\nArray length: ', input.length, '\nFirst element: ', input.at(0), '\nLast element:', input.at(-1));

// for reference https://adventofcode.com/2023/day/1#part2

const examplePart2 = ['two1nine', 'eightwothree', 'abcone2threexyz', 'xtwone3four', '4nineeightseven2', 'zoneight234', '7pqrstsixteen'];

const spelledNums = [
  {
    value: 'one',
    length: 3,
    replacement: 1,
  },
  {
    value: 'two',
    length: 3,
    replacement: 2,
  },
  {
    value: 'three',
    length: 5,
    replacement: 3,
  },
  {
    value: 'four',
    length: 4,
    replacement: 4,
  },
  {
    value: 'five',
    length: 4,
    replacement: 5,
  },
  {
    value: 'six',
    length: 3,
    replacement: 6,
  },
  {
    value: 'seven',
    length: 5,
    replacement: 7,
  },
  {
    value: 'eight',
    length: 5,
    replacement: 8,
  },
  {
    value: 'nine',
    length: 4,
    replacement: 9,
  },
];

const innerMappedInput = examplePart2.map(string => {
  // need to first check to see if there are any spelled numbers in the element, and if there is a match, get the index of the first letter,
  const sortObjects = [];
  spelledNums.forEach(obj => {
    const key = obj.value;

    if (string.includes(key)) {
      const foundNums = { [key]: string.indexOf(key[0]) };
      sortObjects.push(foundNums);
    }
  });

  console.log(sortObjects);

  // then, replace them with the number, then run it through part one's code

  const sampleChars = [...string];
  console.log(sampleChars);

  // so working idea would be to iterate through each sample chars looking for a match on o t f s e n, and if theres a hit,

  const characters = [...string];
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

// const concat = innerMappedInput.map(el => `${el[0]}${el[1]}`);

// reduce array to get total

// const answer = concat.reduce((a, b) => Number(a) + Number(b), 0);

// console.log(answer);
