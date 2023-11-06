1. Price Check
   There is a shop with old-style cash registers. Rather than scanning
   items and pulling the price from a database, the price of each item
   is typed in manually. This method sometimes leads to errors. Given
   a list of items and their correct prices, compare the prices to those
   entered when each item was sold. Determine the number of errors
   in selling prices.

Example
products = ['eggs', 'milk', 'cheese']
productPrices = [2.89, 3.29, 5.79]
productSold = ['eggs', 'eggs', 'cheese', 'milk']
so/dPrice = [2.89, 2.99, 5.97, 3.29].

Product
eggs
eggs
cheese
mi1k
Price
Actual
2.89
2.99
5.97
3.29
Expected
2.89
2.89
5.79
3.29
Error
1
1
The second sale of eggs has a wrong price, as does the sale of
cheese. There are 2 errors in pricing.
Function Description
Complete the function priceCheck in the editor below.

priceCheck has the following parameter(s):
string products[n]: each products[ij is the name of an item for sale string productPrices[i]: each productPrices[i] is the price of products[ij
string productSold[m]: each productSold[j] is the name of a
product sold
float soldPrice[m]: each soldPrice[j]contains the sale price
recorded for productSold[j].

Please complete the functions:

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
inputString += inputStdin;
});

process.stdin.on('end', function() {
inputString = inputString.split('\n');

    main();

});

function readLine() {
return inputString[currentLine++];
}

/\*

- Complete the 'priceCheck' function below.
-
- The function is expected to return an INTEGER.
- The function accepts following parameters:
- 1. STRING_ARRAY products
- 2. FLOAT_ARRAY productPrices
- 3. STRING_ARRAY productSold
- 4. FLOAT_ARRAY soldPrice
     \*/

function priceCheck(products, productPrices, productSold, soldPrice) {
// Write your code here

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

2. Youngest Employees
   There are two data tables with employee information: EMPLOYEE and EMPLOYEE_UIN. Query the tables to
   generate a list of all employees who are less than 25years old first in order of NAME, then of [D, both ascending.
   The result should include the UINfollowed by the NAME.
   Note: While the secondary sort is by [D, the result includes UINbut not ID.
   Schema
   Name
   NAME
   AGE
   ADDRESS
   SALARY
   Name
   UIN
   Type
   Integer
   String
   Integer
   String
   Integer
   EMPLOYEE
   Description
   The ID of the employee. This is a primary key.
   The name of the employee having [1, 201 characters.
   The age of the employee.
   The address of the employee having 11, 25) characters.
   The salary of the employee.
   EMPLOYEE_UIN
   Description
   Type
   Integer
   String
   The ID of the employee. This is a primary key.
   The unique identification number of the employee.

v Sample Data Tables
Sample Input
EMPLOYEE
1
NAME
Sherrie
Paul
Mary
Sam
Dave
AGE
23
30
24
47
22
ADDRESS
Paris
Sydney
Paris
Sydney
Texas
SALARY
74635
72167
75299
46681
11843
EMPLOYEE_UIN
1
2
3
4
5
UIN
57520-0440
49638-001
63550-194
68599-6112
63868-453
Sample Output
63868-453 Dave
63550-194 Mary
57520-0440 Sherrie

Explanation
• Sherrie is 23years old and has I-JIN 57520-0440. This record is printed.
• Paulis 30 years old and has I-JIN 49638-001. This record is not printed.
• A similar analysis is done on the remaining records.
None of the three names of people less than 25 years old is repeated, so print them in alphabetical order. There is no
additional sorting by IDin this case.

3. REST API: IP Tracker
   A REST API contains information about IP addresses. Given an IP
   address, make a fetch call to the REST API to fetch its information
   and find its country of origin.

Perform an HTTP GET request to:
https://jsonmock.hackerrank.com/api/ip?ip=<ip>
where is the IP address to query.
For example, a GET request to:
https://jsonmock.hackerrank.com/api/ip?ip= 172.217.20.46
will return the information for the IP address 172.217.20.46

The response is a JSON object with the following 5 fields:
page: the current page of the results (1)
per _ page: the maximum number of results returned per page
total: the total number of results (1 or O)
total _ pages: the total number of pages with results (1)
data: Either an empty array or an array with a single IP record object in the following form:
o ip: IP address [STRING]
o country: associated country code [STRING)

Below is an example of an IP record:
{
"ip": "172.217.2@.46" ,
"country " US
}

Please note that you will get the data from page 1 as any given IP
just has a single record (if any). Page 1 is the default page returned
on an API hit. No further page hits are required.
Given an IP, the goal is to get the country associated with this IP.

Function Description
Complete the function ipTrackerin the editor below.
ipTrackerhas the following parameter:
ip: IP address which we want to track [STRING]
Returns
• If no record is returned, return the string 'No Result Found.
• If an IP record is received, return the country code [String].
Constraints
• There will be only one page per query.
• There will be O or 1 record in the response.
v Input Format For Custom Testing
In the first and only line, there is an IP address.
v Sample Case O
Sample Input For Custom Testing
172.217.2@.46
Sample Output
US
Explanation
The IP address is queried and the country is returned.
v Sample Case 1
Sample Input For Custom Testing
Sample Output
No Result Found
Explanation
The IP address is queried and no record is returned, i.e. "total":0.
The function returns 'No Result Found'.
