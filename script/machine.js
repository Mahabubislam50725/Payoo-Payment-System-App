function GetValueFromInput(id) {
    const inputElement = document.getElementById(id);
    const value = inputElement.value;
    return value;
}

function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    return Number(balance);
}

function setBalance(value)
{
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

function showOnly(id) {
    const addMoney= document.getElementById("add-money-section");
    const cashOut= document.getElementById("cash-out-section");
    const sendMoney= document.getElementById("send-money-section");
    const getBonus= document.getElementById("get-bonus-section");
    const payBill= document.getElementById("pay-bill-section");
    const history= document.getElementById("history");

    
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    sendMoney.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBill.classList.add("hidden");
    
    history.classList.add("hidden");

   const selected = document.getElementById(id);
   selected.classList.remove("hidden");
}
