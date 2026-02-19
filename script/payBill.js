document.getElementById('pay-bill-btn').addEventListener('click', function() {
    
    const billerBank = GetValueFromInput('pay-bill-bank');

    if(billerBank == "Select a Bank") {
        alert("Please select a bank account.");
        return;
    }
    
    

    const billerAccNo= GetValueFromInput("pay-bill-account-number");
    if(billerAccNo.length !== 11) {
        alert("Account number must be 11 digits.");
        return;
    }

    const billAmount = GetValueFromInput("pay-bill-amount");
    const CurrentBalance = getBalance();
    const newBalance = CurrentBalance - Number(billAmount);

    if(newBalance < 0) {
        alert("Insufficient balance. Please try again.");
        return;
    }

    const pin = GetValueFromInput("pay-bill-pin");

    if(pin=="1234"){
        alert(`Pay Bill ${billAmount} Taka Success to ${billerBank} at ${new Date() } `);
        setBalance(newBalance);

         const history= document.getElementById("history");

        const newHistory = document.createElement("div");
        newHistory.innerHTML=`
         <div class="transaction-card p-5 bg-base-100">
          <span class="text-success">Pay Bill ${billAmount} Taka </span> Success to
            ${billerBank} ,Acc-no: ${billerAccNo} 
            at ${new Date() }


         </div>
        `
        history.appendChild(newHistory);
    }
    else{
        alert("Incorrect PIN. Please try again.");
        return;
    }

    
});