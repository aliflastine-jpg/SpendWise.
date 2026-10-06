// ==========================================
// SPENDWISE BUDGET TRACKER
// ==========================================

// Store the budget
let budget = 0;

// Store multiple expenses in an array
let expenses = [];


// ==========================================
// SELECT HTML ELEMENTS
// ==========================================

const budgetInput = document.getElementById("budget");
const setBudgetBtn = document.getElementById("setBudgetBtn");

const budgetDisplay = document.getElementById("budgetDisplay");
const expenseDisplay = document.getElementById("expenseDisplay");
const balanceDisplay = document.getElementById("balanceDisplay");

const budgetMessage = document.getElementById("budgetMessage");

const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");

const expenseList = document.getElementById("expenseList");


// ==========================================
// SET BUDGET
// ==========================================

setBudgetBtn.addEventListener("click", function () {

    budget = Number(budgetInput.value);

    if (budget <= 0) {
        budgetMessage.textContent = "Please enter a valid budget.";
        return;
    }

    budgetDisplay.textContent = budget;

    updateDashboard();
});


// ==========================================
// ADD EXPENSE
// ==========================================

expenseForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    const name = expenseName.value;
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    // Decision making
    if (name === "" || amount <= 0 || category === "") {
        alert("Please enter all expense information.");
        return;
    }

    // Create an expense object
    const expense = {
        name: name,
        amount: amount,
        category: category
    };

    // Add expense to the array
    expenses.push(expense);

    // Clear form
    expenseForm.reset();

    // Update dashboard
    updateDashboard();
});


// ==========================================
// UPDATE DASHBOARD
// ==========================================

function updateDashboard() {

    let totalExpenses = 0;

    // Loop through all expenses
    for (let i = 0; i < expenses.length; i++) {

        totalExpenses = totalExpenses + expenses[i].amount;
    }

    // Calculate balance
    const balance = budget - totalExpenses;

    // Update webpage
    expenseDisplay.textContent = totalExpenses;
    balanceDisplay.textContent = balance;

    // Decision making
    if (budget === 0) {

        budgetMessage.textContent = "Please set your budget.";

    } else if (balance < 0) {

        budgetMessage.textContent = "⚠️ You have exceeded your budget!";

    } else if (balance === 0) {

        budgetMessage.textContent = "Your budget has been fully spent.";

    } else if (balance <= budget * 0.2) {

        budgetMessage.textContent = "⚠️ Warning: You have less than 20% of your budget remaining.";

    } else {

        budgetMessage.textContent = "✅ You are within your budget.";
    }

    // Display expenses
    displayExpenses();
}


// ==========================================
// DISPLAY EXPENSES
// ==========================================

function displayExpenses() {

    // Clear previous list
    expenseList.innerHTML = "";

    // Check if there are no expenses
    if (expenses.length === 0) {

        expenseList.innerHTML = "<p>No expenses yet.</p>";
        return;
    }

    // Loop through expenses
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        const expenseItem = document.createElement("div");

        expenseItem.className = "expense-item";

        expenseItem.innerHTML = `
            <span>
                <strong>${expense.name}</strong>
                <br>
                ${expense.category}
            </span>

            <span>
                KSh ${expense.amount}
            </span>
        `;

        expenseList.appendChild(expenseItem);
    }
}


// ==========================================
// START APPLICATION
// ==========================================

updateDashboard();