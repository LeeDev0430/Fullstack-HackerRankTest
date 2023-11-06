'use strict';

const fs = require('fs');

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
 * Complete the 'priceCheck' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY products
 *  2. FLOAT_ARRAY productPrices
 *  3. STRING_ARRAY productSold
 *  4. FLOAT_ARRAY soldPrice
 */

function priceCheck(products, productPrices, productSold, soldPrice) {
  // Create a map for product prices for quick lookup.
  let priceMap = new Map();
  for (let i = 0; i < products.length; i++) {
    priceMap.set(products[i], productPrices[i]);
  }

  // Initialize a counter for the number of errors.
  let errors = 0;

  // Iterate over the sold products to check for pricing errors.
  for (let i = 0; i < productSold.length; i++) {
    // If the sold price does not match the product's correct price, increment the error counter.
    if (priceMap.get(productSold[i]) !== soldPrice[i]) {
      errors++;
    }
  }

  // Return the total number of errors.
  return errors;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const productsCount = parseInt(readLine().trim(), 10);

  let products = [];

  for (let i = 0; i < productsCount; i++) {
    const productsItem = readLine();
    products.push(productsItem);
  }

  const productPricesCount = parseInt(readLine().trim(), 10);

  let productPrices = [];

  for (let i = 0; i < productPricesCount; i++) {
    const productPricesItem = parseFloat(readLine().trim());
    productPrices.push(productPricesItem);
  }

  const productSoldCount = parseInt(readLine().trim(), 10);

  let productSold = [];

  for (let i = 0; i < productSoldCount; i++) {
    const productSoldItem = readLine();
    productSold.push(productSoldItem);
  }

  const soldPriceCount = parseInt(readLine().trim(), 10);

  let soldPrice = [];

  for (let i = 0; i < soldPriceCount; i++) {
    const soldPriceItem = parseFloat(readLine().trim());
    soldPrice.push(soldPriceItem);
  }

  const result = priceCheck(products, productPrices, productSold, soldPrice);

  ws.write(result + '\n');

  ws.end();
}
