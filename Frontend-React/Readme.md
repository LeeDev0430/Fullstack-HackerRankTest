# 1.Employee Information

## Environment

- React Version: 16.13.1
- Node Version: v12 (LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/NRm8WarslAqUJobTwPXsRA/employee-information.gif)

## Functionality Requirements

There is a reusable component in the module named `Dropdown`:

- It renders a `<select>` element.
- It receives 3 props -
  - labelText - Used to render default option in dropdown.
  - options - An array of strings where each object is rendered as an option in the dropdown. Each option should have a value equal to object instance (string).
  - onChange - The onChange function to be called on option selection to pass the selected value to the parent.

The module must have the following functionalities:

- It render 2 Dropdown components.
- The first Dropdown component is used to render country options. When a country is selected it should be rendered as:
  ```
      ​<label data-testid="country-selected">
          Country Selected: <selectedCountry>
      </label>
  ```
- The second Dropdown component is used to render language options. When a language is selected it should be rendered as:
  ```
      ​​<label data-testid="language-selected">
          Language Selected: <selectedLanguage>
      </label>
  ```

## Testing Requirements

The following data-testid attributes are required in the component for the tests to pass:

- The div containing country options dropdown: `country-options`
- The div containing language options dropdown: `language-options`
- The label rendering selected country: `country-selected`
- The label rendering selected language: `language-selected`
- Inside the Dropdown component select element: `dropdown`

# 2. JavaScript: Order List Processing

Implement a function processOrderListthat:

    • takes 3 arguments: an order list orderList, a number orderld, and a string state that is either "Processing' or "Delivered'. orderListis an array of order objects. An order object has the following schema:
    	{
    		id: Number,
    		state: String
    	}

    • updates the order list depending on the state and returns the updated list.
    	o If the state is 'Processing', it updates the object in the list having id as orderld, to have the state 'Processing'.
    	o If the state is 'Delivered', it deletes the object from the list having the id of orderld.
    • If there is no order with the given order/dthen the function returns the list orderList unchanged.

NOTE: You can assume that initially, all orders in the list have a state of 'Received.

The implementation will be tested by a provided code stub and several input files with parameters. The function will be called and the result printed to the standard output by the provided stubbed code. The stubbed code first creates a list of orders in Received state. The status of all orders in the updated order list are printed after all the operations are completed. If the final list is empty, the stub code prints 'All orders are in Delivered state'.

Input Format For Custom Testing
The first line contains an integer, n, the number of orders in the
list.
The second line contains an integer, m, the numberOfOperations.
Each line i of the m subsequent lines (where 0 s i < m) contains 2
space-separated values. The first value is the orderldand the
second is the updated order state.

Sample Case O
Sample Input For Custom Testing
STDIN Function
3 -> n = 3
2 -> m = 2
1 Processing -> orderId = 1 state = 'Processing'
2 Delivered -> orderId = 2 state = 'Delivered'

Sample Output

Order with id i is in Processing state
Order with id 3 is in Received state

Explanation
Initially, the order list has 3 orders. The state of order 1 is
updated to 'Processing and the state of order 2 is updated to
'Delivered and order 2 is deleted from the list. This makes the list
contain the ISt and 3rd orders.

Sample Case 1
Sample Input For Custom Testing
STDIN Function
1  
2  
1 Processing  
2 Delivered  
Sample Output
All orders are in Delivered state

Explanation
Initially, the order list has 1 order. The state of order 1 is updated
to 'Processing and then to 'Delivered at which point it is deleted
from the list. This makes the list empty leading to all orders in the
' Delivered' state.

# 3. CSS Pseudo-Class

Which pseudo-element(s) can be prefaced with either a colon (:) or a double colon (::)?
Pick ONE OR MORE options
first-child
after
backdrop
first-letter

# 4. CSS Animation

Which of the following would create the below animation? Moving the mouse over the div should double its size, and the animation should happen over 500ms.

<Style>
div {
height: 50px;
width: 50px;
background: #3ba59b;
border-radius: 50%;
</style>
<div class="greyBall"></div>

Pick ONE OR MORE options
.greyBall:hover { transform: scale(2); animate: 500ms; }
.greyBall:hover { transform: scale(2); transition: 500ms transform; }
.greyBall:hover { transform: scale(2); transition: 0.5s; }
.greyBall:focus { transform: scale(2); animate: 0.5s; }
