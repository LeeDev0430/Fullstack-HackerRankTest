# 1.Product Validation

## Environment

- React Version: 16.13.1
- Node Version: v12 (LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/MPf0G1ka7KOzHYWPq_Q81A/product-validation.gif)

## Functionality Requirements

The component should perform the following validations for a product form:

- The Product name input field should pass the following validations. In case of error, the appropriate message should be shown in `<p data-testid="name-input-error"></p>`.

  - The field is required.
    - For this error show the message `Product name is required`.

- The Quantity input field should pass following validations. In case of error, the appropriate message should be shown in `<p data-testid="quantity-input-error"></p>`.

  - The field is required.
    - For this error show the message `Quantity is required`.

- When fields are invalid, the submit button should be disabled. Hence, initially, the button is disabled.
- When all fields are valid and touched, the submit button should be enabled.

## Testing Requirements

The following data-testid attributes are required in the component for the tests to pass:

- The product name input: `name-input`
- The quantity input: `quantity-input`
- The submit button: `submit-button`
- The container having the error message for:
  - the product name input field: `name-input-error`
  - the quantity input field: `quantity-input-error`

## Project Specifications

**Read Only Files**

- src/App.test.js

# 2. JavaScript: Data Finder

Implement the function dataFinder such that:

• it takes a single argument data, an array of integers.
• it returns a new function that is called find. - find takes 3 arguments: minRange (Integer), maxRange (Integer) and value (Integer). It performs the following:
It searches for the valuein the data array in the inclusive range [minRange- maxRange] using O-based indexing. If value is found in the given range, it returns true. Otherwise it returns false.
If minRange or maxRangeis beyond an end of the array, throws an Error object with the message of 'Invalid range'.

For example, calling dataFinder([6, 3, 0, 2, 10]) must return a function find, such that calling find(2,4,10) returns false. It searches for 10 in the inclusive range 2 through 4, the subarray [3, 0, 2]. It is not found in the given range as it lies at index 6. So the function returns false.

The implementation will be tested by a provided code stub using several input files with parameters. The dataFinder function will be called with the data parameter, and then the returned function will be called with the minRange, maxRange, and value parameters. The result will be printed to the standard output by the provided code.
Constraints:
• The maximum length of the passed array is 10.

Input Format For Custom Testing
The first line contains space-separated integers, the integers in the data array.
The second line contains space-separated integers, the minRange, maxRange, and value respectively.
Sample Case O
Sample Input For Custom Testing
STDIN
15 5 4 20 +
value = 4
Sample Output
true
Explanation
Function
= [15,
data
minRange
1, 10, 5, 4, 20)
= i, maxRange = 4,

Explanation
The call dataFinder([5, 1, 10, 5, 4, 20]) returns a function which is called with find(l, 4, 4). It returns true since 4 is in the range (1-4) at index 4.

Sample Case 1
Sample Input For Custom Testing
10 10 13 4 15
1 10 13
Sample Output
Error: Invalid range

Explanation
The call dataFinder([10, 1, O, 13, 4, 151]) returns a function which when called with find(l, 10, 13)throws the error 'Invalid range' because index 10 is beyond the end of the array.

# 3. CSS Pseudo-Class

Which pseudo-element(s) can be prefaced with either a colon (:) or a double colon (::)?
Pick ONE OR MORE options
first-child
after
backdrop
first-letter

# 4. CSS: Box Model Statement Selection

Select all the statements that are true with respect to the CSS box model.
Pick ONE OR MORE options
The box model consists of the margins, outline, padding, height, and width of the element.
The box model consists of the margins, borders, padding, height, and width of the element.
The total element width is calculated as the summation of width, left padding, right padding, left border, right border, left margin, and right margin.
The total element width is calculated as the summation of width, left padding, right padding, left outline, right outline, left margin, and right margin.
