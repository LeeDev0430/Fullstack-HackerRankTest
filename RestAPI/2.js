'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'getNumDraws' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER year as parameter.
 */

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          resolve(JSON.parse(data));
        });
      })
      .on('error', (e) => {
        reject(e);
      });
  });
}

async function getNumDraws(year) {
  let totalDraws = 0;

  for (let goals = 0; goals <= 10; goals++) {
    // Only need to make a request to the first page to get the 'total' field
    // since all draws with the same score will be counted in 'total'
    const url = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1goals=${goals}&team2goals=${goals}&page=1`;
    const response = await fetchUrl(url);
    totalDraws += response.total;
  }

  return totalDraws;
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = parseInt(readLine().trim(), 10);

  const result = await getNumDraws(year);

  ws.write(result + '\n');

  ws.end();
}
