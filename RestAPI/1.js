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

/*
 * Complete the 'getTotalGoals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING team
 *  2. INTEGER year
 */

async function getTotalGoals(team, year) {
  let totalGoals = 0;
  let urls = [
    `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}`,
    `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}`,
  ];

  for (let url of urls) {
    let page = 1;
    let totalPages = 1; // assume at least one page

    while (page <= totalPages) {
      const response = await fetchUrl(`${url}&page=${page}`);
      totalPages = response.total_pages;

      response.data.forEach((match) => {
        if (match.team1 === team) {
          totalGoals += parseInt(match.team1goals);
        } else if (match.team2 === team) {
          totalGoals += parseInt(match.team2goals);
        }
      });

      page++;
    }
  }

  return totalGoals;
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const team = readLine();

  const year = parseInt(readLine().trim(), 10);

  const result = await getTotalGoals(team, year);

  ws.write(result + '\n');

  ws.end();
}
