document.getElementById("cashout-btn")
.addEventListener("click", function() {
    
    const cashoutNumber = GetValueFromInput("cashout-number");

   if(cashoutNumber.length !== 11)
   {
    alert("Invalid Agent number. Please enter an 11-digit mobile number.");
    return;
   }

    
    const cashoutAmount = GetValueFromInput("cashout-amount");

//    const BalanceElement = document.getElementById("balance");
   const Currentbalance= getBalance();

   const newbalance = Currentbalance - Number(cashoutAmount);
   console.log(newbalance);

   if(newbalance <0 ){
    alert("Insufficient balance. Please try again.");
    return;
   }


   const Pin = GetValueFromInput("cashout-pin");

   if(Pin==="1234"){
    alert("Cashout successful!");
    setBalance(newbalance);

     const history= document.getElementById("history");

        const newHistory = document.createElement("div");
        newHistory.innerHTML=`
         <div class="transaction-card p-5 bg-base-100">
          <span class="text-error"> Cashout ${cashoutAmount} Taka </span> Success from
            ${cashoutNumber} ,
            at ${new Date() }


         </div>
        `
        history.appendChild(newHistory);

   } else {
    alert("Incorrect PIN. Please try again.");
    return;
   }
    
})