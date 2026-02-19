document.getElementById("add-money-btn").addEventListener("click", function() {
    const bankAccount = GetValueFromInput('add-money-bank');

    if(bankAccount == "Select a Bank") {
        alert("Please select a bank account.");
        return;
    }


    // Account Number

    const accNo= GetValueFromInput("add-money-account-number");
    if(accNo.length !== 11) {
        alert("Account number must be 11 digits.");
        return;
    }

    //Amount

    const amount = GetValueFromInput("add-money-amount");
    const newBalance = getBalance() + Number(amount);

    const pin = GetValueFromInput("add-money-pin");

    if(pin=="1234"){
        alert(`Add Money Success from ${bankAccount} at ${new Date() } `);
        setBalance(newBalance);

        const history= document.getElementById("history");

        const newHistory = document.createElement("div");
        newHistory.innerHTML=`
         <div class="transaction-card p-5 bg-base-100">
           <span class="text-success">Add Money ${amount} Taka </span> Success from
            ${bankAccount} ,Acc-no: ${accNo} 
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