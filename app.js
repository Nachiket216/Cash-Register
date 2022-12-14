const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-button")
const errorMessage = document.querySelector("#error-message")
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000,500,100,20,10,5,1]

checkButton.addEventListener("click",function validateBillAndCashAmount() {
    hideMessage();
    if(billAmount.value===""){
        showMessage("Please enter bill amount")
    }
    else if(billAmount.value>0){
        if(cashGiven.value === ""){
            showMessage("Please enter cash given amount")
        }
        else if(cashGiven.value<0){
            showMessage("Invalid Cash Given Amount")
        }else if(Number(cashGiven.value)<Number(billAmount.value)){
            showMessage("The cash provided should atleast be equal to the bill amount")
        }
        else{
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }
    }else{
        showMessage("Invalid Bill Amount")
    }
});

function hideMessage() {
    errorMessage.style.display = "none"
}

function calculateChange(amountToBeReturned){
    for(let i=0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i])
        amountToBeReturned %= availableNotes[i]
         noOfNotes[i].innerText = numberOfNotes

    }
}


function showMessage(message){ 
    errorMessage.style.display ="block"
    errorMessage.innerText = message 
}