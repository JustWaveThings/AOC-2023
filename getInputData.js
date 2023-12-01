import fetch from 'node-fetch';
import 'dotenv/config';

export const getInputData = async (dayNumber = 1) => {
  const url = `https://adventofcode.com/2023/day/${dayNumber}/input`;
  try {
    const response = await fetch(url, {
      headers: {
        Cookie: `session=${process.env.SESSION_COOKIE}`,
      },
    });
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
