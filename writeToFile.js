import fs from 'fs/promises';
import path from 'path';
import { getInputData } from './getInputData.js';
import { textToArray } from './textToArray.js';

const day = 1;
const fetchData = await getInputData(day);

try {
  // creates folder in current directory, make sure you are at the root directory
  const dirPath = path.join(process.cwd(), `AOC-Day-${day}`);
  await fs.mkdir(dirPath, { recursive: true });

  // write data to local file so we aren't fetching the data ever time we run our code
  const filepath = path.join(dirPath, `inputData-Day${day}.txt`);
  await fs.writeFile(filepath, fetchData);

  // make empty js file to work in
  const jsFilePath = path.join(dirPath, `AOC-Day${day}.js`);
  await fs.writeFile(jsFilePath, textToArray);
} catch (error) {
  console.error('Error:', error);
}
