const billAmount=document.querySelector("#bill-input");
const cashAmount=document.querySelector("#cash-input");
const btnSubmit=document.querySelector(".btn-submit");
const NumOFNotes=document.querySelectorAll(".no-Of-Notes")
const errorMessage=document.querySelector('.error');


btnSubmit.addEventListener('click',validateBillAndCashAmount);

