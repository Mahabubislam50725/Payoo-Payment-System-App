document.getElementById("sendMoney-btn").addEventListener("click", function() {
    const UserAccNumber = GetValueFromInput("sendMoney-userAccount");

    if(UserAccNumber.length !== 11) {
        alert("Invalid Account number. Please enter an 11-digit account number.");
        return;
    }

    const SendMoneyAmount = GetValueFromInput("sendMoney-amount");

    const CurrentBalance = getBalance();
    const newBalance = CurrentBalance - Number(SendMoneyAmount);

    if(newBalance < 0) {
        alert("Insufficient balance. Please try again.");
        return;
    }

    const Pin = GetValueFromInput("sendMoney-pin");

    if(Pin === "1234") {
        alert(`Send Money ${SendMoneyAmount} Taka Success to ${UserAccNumber} at ${new Date()}`);
        setBalance(newBalance);

        const history= document.getElementById("history");

        const newHistory = document.createElement("div");
        newHistory.innerHTML=`
         <div class="transaction-card p-5 bg-base-100">
          <span class="text-success"> Send Money ${SendMoneyAmount} Taka </span> Success to
            ${UserAccNumber} ,
            at ${new Date() }


         </div>
        `
        history.appendChild(newHistory);

    }else{
        alert("Incorrect PIN. Please try again.");
        return;
    }
});