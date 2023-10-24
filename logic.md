we are gonna create budget app.

//*************** logic ****************

/*
1. selected all the elements and stored in variable.

2. ----------*********** creating nessecory variables ********----------
let ENTRY_LIST = []; <-  whenver user write input whether it is expnense or income i am going to push that in this array.

-------------------------------------------------

let balance = 0;
let income = 0;
let outcome = 0 <- these three holds the initial value;

instead of creating three variable seprately we can use array destcturing

let [balance, income, outcome] = [0, 0, 0];

let [deletBtn, editBtn] = ['fas-fa-trash', 'far-fa-edit'] <- i am gonna add these icon dynamically. that is why stored in variable.


3. ----------*********** showing and hiding tab ********---------

i have added eventListener for each tab. and added function in it show hide and active and inactive btn.

see code and try to understand it. it is easy.

if expense user clicks on expense i am hiding income an all tab.

and same for expnse and tab.

 hide([incomeEl, expenseEl]); <- i am passing arguments as destructure. so it is array destcrure.

 function hide(elements) {
	elements.forEach(function (element) {
		element.classList.add('hide');
	});
} <- that is why i am using forEach loop here to apply this fuctionality on both.

 4. ----------*********** showing and hiding tab ********---------

 created eventlistener for adding income and expense in tab. and also added event listener on keypress Enter. and budgetIn and budgetOut function.

 function budgetOut(e) {
    e.preventDefault();

    if(!expenseTitle.value || !expenseAmount.value) return;

    let expense = {
        type: 'expense',
        title: expenseTitle.value,
        amount: parseInt(expenseAmount.value),
    }

    ENTRY_LIST.push(expense);
     updateUI();
    clearInput();
}

we have input button with type of submit that is why i am preveting from getting refresh.

and after that i am checking either user typed expense or income and amount if not then code function will not move ahead.

if added then function will move ahead. and i have created object. because i am going to store this data in local storage and local storage can only store data jsonString that is why i had to create object.

and i pushing that object into array that i created before.

and parseInt -> converts string into number. because object taking amount value as string that's why had to convert it to number.

updataUi() <- this function gonna be big fucntion it is responsible changing all the ui after each changes.

clearInput() <- when user types value in input box when clicks on add button or prsses enter. after that i clearing input box.

 5. ----------*********** created clearInput() function  ********---------

 6. ----------*********** calculating balance, income, outcome  ********---------

 function updateUI() {
    income = calculateTotal('income', ENTRY_LIST);
	outcome = calculateTotal('expense', ENTRY_LIST);
	balance = calculateBalance(income, outcome);

} <- i have setted all these three varible value as 0 as initial state. then now updating it. whithin the updataUi function.

we have provide both variable calculateTotal function which accepting income type and taking entry list as argument.

function calculateTotal(type, list) {
	let sum = 0;
	list.forEach(function (entry) {
		if (entry.type === type) {
			sum += entry.amount;
		}
	});

	return sum;
} <- and I am doing here calculation calculateTotal accepts two argumanet i have passed on it performs calculation. try to understand the logic.

// calculating balance
function calculateBalance(income, outcome) {
    return income - outcome;
}



 7. ----------*********** displaying the icome outcome and balance on the web page  ********---------



function updateUI() {
	income = calculateTotal('income', ENTRY_LIST);
	outcome = calculateTotal('expense', ENTRY_LIST);
	balance = Math.abs(calculateBalance(income, outcome));

    let sign = income >= outcome ? '$' : "-$";

    // updating the UI
    balanceEl.innerHTML = `<p>${sign}</p><p>${balance}</p>`
    incomeTotalEl.innerHTML = `<p>$</p><p>${income}</p>`
    outcomeTotalEl.innerHTML = `<p>$</p><p>${outcome}</p>`
} <- upadated ul

Math.abs <- 100 -200 = -100

math abs removes - sign and gives absolute value.


*/