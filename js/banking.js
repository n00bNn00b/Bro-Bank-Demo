// Deposit section
document.getElementById("deposit-btn").addEventListener("click", function (e) {
  const depositInput = document.getElementById("deposit-input");
  const newdepositText = depositInput.value;
  const newdepositAmount = parseFloat(newdepositText);

  const depositTotal = document.getElementById("deposit-total");
  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);

  //

  const newDepositTotal = parseFloat(previousDepositAmount + newdepositAmount);

  depositTotal.innerText = newDepositTotal;

  // Update Balance

  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalanceTotal + newdepositAmount;
  balanceTotal.innerText = newBalanceTotal;
  // clear
  depositInput.value = "";
});

// withdraw section

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawText = withdrawInput.value;
  const newWithdrawAmount = parseFloat(withdrawText);
  // withdraw total
  const withdrawTotal = document.getElementById("withdraw-total");
  const previousWithdrawText = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawText);
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotal.innerText = newWithdrawTotal;

  // balance update
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalText);
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotal.innerText = newBalanceTotal;

  // clear withdraw
  withdrawInput.value = "";
});

const logout = document.getElementById("logout-btn");
logout.addEventListener("click", function (e) {
  window.location.href = "index.html";
});
