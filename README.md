# SpendWise Budget Tracker

## Project Description

SpendWise is a simple budgeting application that helps users set a budget, add expenses, view their total expenses, and track their remaining balance.

This week, I improved SpendWise by making it interactive using JavaScript. The application now uses conditional statements, arrays, loops, DOM manipulation, and event listeners.

## Improvements Made This Week

The following improvements were made to the SpendWise application:

- Added a budget input and budget calculation.
- Added an expense form.
- Added the ability to store multiple expenses.
- Added automatic calculation of total expenses.
- Added automatic calculation of the remaining balance.
- Added budget warnings and messages.
- Added dynamic display of expenses on the webpage.
- Added user interactions using buttons and forms.
- Added JavaScript loops to process expense records.

## How Conditionals Are Used

Conditional statements are used to make decisions based on the user's budget and expenses.

For example, SpendWise checks whether the user has exceeded their budget:

```javascript
if (balance < 0) {
    budgetMessage.textContent = "You have exceeded your budget!";
} else if (balance === 0) {
    budgetMessage.textContent = "Your budget has been fully spent.";
} else {
    budgetMessage.textContent = "You are within your budget.";
}
```

These conditions allow the application to provide different feedback depending on the user's financial situation.

## How Arrays Are Used

An array is used to store multiple expense records:

```javascript
let expenses = [];
```

When a user adds an expense, the expense is stored in the array using `push()`:

```javascript
expenses.push(expense);
```

Each expense contains information such as:

- Expense name
- Amount
- Category

This makes it possible for SpendWise to manage multiple expenses instead of using separate variables for each expense.

## How Loops Are Used

A `for` loop is used to process all the expenses stored in the array.

```javascript
for (let i = 0; i < expenses.length; i++) {
    totalExpenses = totalExpenses + expenses[i].amount;
}
```

The loop calculates the total amount spent by going through each expense record.

## How the DOM Is Updated

The Document Object Model (DOM) is used to update information directly on the webpage.

For example:

```javascript
budgetDisplay.textContent = budget;
expenseDisplay.textContent = totalExpenses;
balanceDisplay.textContent = balance;
```

The application also creates and displays expense records dynamically using:

```javascript
document.createElement()
```

and:

```javascript
appendChild()
```

This means the user does not need to refresh the page to see updated information.

## How User Interactions Are Handled

SpendWise uses event listeners to respond to user actions.

For example, the budget button uses:

```javascript
setBudgetBtn.addEventListener("click", function () {
    // Set budget
});
```

The expense form also uses an event listener:

```javascript
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Add expense
});
```

These events allow users to set their budget and add expenses through the webpage.

## Challenges Encountered

One challenge was connecting the JavaScript code to the HTML elements correctly. I solved this by using `document.getElementById()` to select the required elements.

Another challenge was calculating the total expenses when there were multiple records. I solved this by storing the expenses in an array and using a `for` loop to calculate the total.

I also had to make sure that the webpage did not refresh when submitting the expense form. I solved this by using:

```javascript
event.preventDefault();
```

## Technologies Used

- HTML
- CSS
- JavaScript
- Git
- GitHub

## Project Files

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Conclusion

The SpendWise application is now more interactive and dynamic. Users can set a budget, add multiple expenses, view their total spending, and receive feedback about their remaining budget. The project demonstrates decision making, arrays, loops, DOM manipulation, and event handling in JavaScript.
