const billAmount=document.querySelector("#bill-input");
const cashAmount=document.querySelector("#cash-input");
const btnSubmit=document.querySelector(".btn-submit");
const NumOFNotes=document.querySelectorAll(".no-Of-Notes")
const errorMessage=document.querySelector('.error');



const availableNotes=[2000,500,200,100,50,20,10,5,2,1];

function showMessage(message){
    errorMessage.innerText=message;
}


function calculateAmount(amount){
    for(let i=0;i<availableNotes.length;i++){
        const numberOfNotes=Math.trunc(
            amount/availableNotes[i]
        );
        amount %= availableNotes[i];
        NumOFNotes[i].innerText=numberOfNotes;
    }
}

function validateBillAndCashAmount(){
   if(billAmount.value>0){
        if(cashAmount.value >= billAmount.value){
            var amountReturn=cashAmount.value - billAmount.value;
            calculateAmount(amountReturn);
        }
        else{
            showMessage("Do you wanna wash plates?")
        }
   }
   else{
       showMessage("Provide valid Amount.");
   }
}

btnSubmit.addEventListener('click',validateBillAndCashAmount);

