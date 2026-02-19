document.getElementById('getBonus-btn').addEventListener('click', function() {

    const bonusCode = GetValueFromInput('getBonus-coupon');

    if(bonusCode === "PAYOO100") {
        const bonusAmount = 100;
        const newBalance = getBalance() + bonusAmount;
        setBalance(newBalance);
        alert(`Congratulations! You've received a bonus of ${bonusAmount} Taka. Your new balance is ${newBalance} Taka.`);

        const history= document.getElementById("history");

        const newHistory = document.createElement("div");
        newHistory.innerHTML=`
         <div class="transaction-card p-5 bg-base-100">
          <span class="text-success"> Bonus ${bonusAmount} Taka </span> Add Successfully from Coupon code: ${bonusCode} 
            at ${new Date() }


         </div>
        `
        history.appendChild(newHistory);
    }

    else{
        alert("Invalid coupon code. Please try again.");
        return;
    }
});