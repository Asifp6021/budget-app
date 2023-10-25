const balanceEl = document.querySelector('.balance .value');
const incomeTotalEl = document.querySelector('.income-total');
const outcomeTotalEl = document.querySelector('.outcome-total');
const incomeEl = document.querySelector('#income-tracker');
const expenseEl = document.querySelector('#expense-tracker');
const allEl = document.querySelector('#all');
const incomeList = document.querySelector('#income-tracker .list');
const expenseList = document.querySelector('#expense-tracker .list');
const allList = document.querySelector('#all .list');
const lists = document.querySelectorAll('.list');

// tabs
const expenseBtn = document.querySelector('.tab1');
const incomeBtn = document.querySelector('.tab2');
const allBtn = document.querySelector('.tab3');

// input Btns
const addExpense = document.querySelector('.add-expense');
const expenseTitle = document.querySelector('#expense-title-input');
const expenseAmount = document.querySelector('#expense-amount-input');

const addIncome = document.querySelector('.add-income');
const incomeTitle = document.querySelector('#income-title-input');
const incomeAmount = document.querySelector('#income-amount-input');

// Neccesory Variables
// let ENTRY_LIST = []; <- now value for the entry list going to come from localStorage.

let ENTRY_LIST;
let [balance, income, outcome] = [0, 0, 0];
let [deleteIcon, editIcon] = ['fas-fa-trash', 'far-fa-edit'];

// getting data from local storage and updating value for the ENTRY_LIST
ENTRY_LIST = JSON.parse(localStorage.getItem('entry-list')) || [];
updateUI();

// showing expense tab and hiding other
expenseBtn.addEventListener('click', function () {
	show(expenseEl);
	hide([incomeEl, allList]);
	active(expenseBtn);
	inActive([incomeBtn, allBtn]);
});

// showing income tab and hiding other
incomeBtn.addEventListener('click', function () {
	show(incomeEl);
	hide([expenseEl, allList]);
	active(incomeBtn);
	inActive([expenseBtn, allBtn]);
});

//showing all tab and hiding expnse and income tab
allBtn.addEventListener('click', function () {
	show(allList);
	hide([incomeEl, expenseEl]);
	active(allBtn);
	inActive([incomeBtn, expenseBtn]);
});

// addExpense event listener
addExpense.addEventListener('click', budgetOut);

// addIncome event listener
addIncome.addEventListener('click', budgetIn);

// addExpense/addIncome enter key event listener
document.addEventListener('keypress', function (e) {
	if (e.key !== 'Enter') return;

	budgetOut(e);
	budgetIn(e);
});

// show function
function show(element) {
	element.classList.remove('hide');
}

// hide function
function hide(elements) {
	elements.forEach(function (element) {
		element.classList.add('hide');
	});
}

// active function
function active(element) {
	element.classList.add('active');
}

// inactive function
function inActive(elements) {
	elements.forEach(function (element) {
		element.classList.remove('active');
	});
}

// budgetOut function for expense.
function budgetOut(e) {
	e.preventDefault();

	if (!expenseTitle.value || !expenseAmount.value) return;

	let expense = {
		type: 'expense',
		title: expenseTitle.value,
		amount: parseInt(expenseAmount.value),
	};

	ENTRY_LIST.push(expense);

	updateUI();
	clearInput([expenseTitle, expenseAmount]);
}

// budgetIn function for income
function budgetIn(e) {
	e.preventDefault();
	if (!incomeTitle.value || !incomeAmount.value) return;

	let income = {
		type: 'income',
		title: incomeTitle.value,
		amount: parseInt(incomeAmount.value),
	};

	ENTRY_LIST.push(income);

	updateUI();
	clearInput([incomeTitle, incomeAmount]);
}

// clearing inputs
function clearInput(inputs) {
	inputs.forEach(function (input) {
		input.value = ' ';
	});
}

function updateUI() {
	income = calculateTotal('income', ENTRY_LIST);
	outcome = calculateTotal('expense', ENTRY_LIST);
	balance = Math.abs(calculateBalance(income, outcome));

	let sign = income >= outcome ? '$' : '-$';

	// updating the UI
	balanceEl.innerHTML = `<p>${sign}</p><p>${balance}</p>`;
	incomeTotalEl.innerHTML = `<p>$</p><p>${income}</p>`;
	outcomeTotalEl.innerHTML = `<p>$</p><p>${outcome}</p>`;

	clearElement([expenseList, incomeList, allList]);

	// adding entrytitle in expense and incme and all
	ENTRY_LIST.forEach(function (entry, index) {
		if (entry.type === 'expense') {
			showEntry(expenseList, entry.type, entry.title, entry.amount, index);
		} else if (entry.type === 'income') {
			showEntry(incomeList, entry.type, entry.title, entry.amount, index);
		}
		// for all
		showEntry(allList, entry.type, entry.title, entry.amount, index);
	});

	updateChart(income, outcome);

	localStorage.setItem('entry-list', JSON.stringify(ENTRY_LIST));
}

function calculateTotal(type, list) {
	let sum = 0;
	list.forEach(function (entry) {
		if (entry.type === type) {
			sum += entry.amount;
		}
	});

	return sum;
}

// calculating balance
function calculateBalance(income, outcome) {
	return income - outcome;
}

//clearElement function
function clearElement(elements) {
	elements.forEach(function (element) {
		element.innerHTML = '';
	});
}

// adding entry
function showEntry(list, type, title, amount, id) {
	const entry = `
	<li id="${id}" class="${type}">
	<div class="entry">${title}: $${amount}</div>
	<div class="action">
	  <i class="far fa-edit"></i>
	  <i class="fas fa-trash"></i>
	</div>
 </li>`;

	const position = 'afterbegin';
	list.insertAdjacentHTML(position, entry);
}

// editing and deleting lists item
lists.forEach(function (list) {
	list.addEventListener('click', function (e) {
		if (e.target.localName !== 'i') return;
		let targetBtn = e.target.attributes.class.value;
		let entry = e.target.parentNode.parentNode;
		let targetId = entry.attributes.id.value;
	});
});
