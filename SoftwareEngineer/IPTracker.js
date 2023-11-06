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
 * Complete the 'ipTracker' function below.
 *
 * URL for cut and paste
 * https://jsonmock.hackerrank.com/api/ip?ip=<ip>
 *
 * The function is expected to return a STRING.
 * The function accepts a singe parameter ip.
 *
 * In case of no ip record, return string 'No Result Found'
 */

async function ipTracker(ip) {
  return new Promise((resolve, reject) => {
    const url = `https://jsonmock.hackerrank.com/api/ip?ip=${ip}`;

    https
      .get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          const response = JSON.parse(data);

          if (response && response.data && response.data.length > 0) {
            resolve(response.data[0].country);
          } else {
            resolve('No Result Found');
          }
        });
      })
      .on('error', (e) => {
        reject(e);
      });
  });
}
async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const ip = readLine();

  const result = await ipTracker(ip);

  ws.write(result);

  ws.end();
}
