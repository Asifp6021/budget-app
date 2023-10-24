const balanceEl = document.querySelector('.balance .value');
const incomeTotalEl = document.querySelector('.income-total');
const outcomeTotalEl = document.querySelector('.expense-tota');
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
let ENTRY_LIST = [];
let [balance, income, outcome] = [0, 0, 0];
let [deleteIcon, editIcon] = ['fas-fa-trash', 'far-fa-edit'];

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
