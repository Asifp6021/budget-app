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

 

*/