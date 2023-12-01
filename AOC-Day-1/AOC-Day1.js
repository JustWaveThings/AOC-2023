import fs from 'fs/promises';

const readFile = path => fs.readFile(path, { encoding: 'utf8' });

// the puzzle input as an array

const input = (await readFile('./inputData-Day1.txt')) // ~~ Update Day ~~ needed wrapped because it returns a promise
  .trim() // day 1 had trailing whitespace that was on its own line.
  .split('\n'); // splits the text file on the return character

// sanity check
console.log('\nSanity Check\n', '\nIs array: ', Array.isArray(input), '\nArray length: ', input.length, '\nFirst element: ', input.at(0), '\nLast element:', input.at(-1));

