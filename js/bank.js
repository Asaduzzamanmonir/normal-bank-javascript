document.getElementById('deposit-btn').addEventListener('click', function () {
    // Collect Money from Input 
    const depositInput = document.getElementById('deposit-input')
    const depositText = depositInput.value;
    const depositAmount = parseFloat(depositText);
    depositInput.value = '';


    // Add On Deposit Collector
    const depositTotal = document.getElementById('total-deposit')
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const updateDepositAmount = previousDepositAmount + depositAmount;
    depositTotal.innerText = updateDepositAmount;

    // Add Deposit Amount in Main Balanced 
    const balanceTotal = document.getElementById('total-balance');
    const balanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceText);
    const updateBalanceTotal = previousBalanceAmount + depositAmount;
    balanceTotal.innerText = updateBalanceTotal;

})

// WithDraw the money From balanced
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawText);
    withdrawInput.value = '';

    // Add withdraw amount on withdraw Collector
    const withdrawTotal = document.getElementById('total-draw');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const updateWithdrawAmount = previousWithdrawAmount + withdrawAmount;
    withdrawTotal.innerText = updateWithdrawAmount;

    // Reduce Money from Main Balance by Withdraw
    const mainBalance = document.getElementById('total-balance');
    const mainBalanceText = mainBalance.innerText;
    const previousMainBalance = parseFloat(mainBalanceText);
    const updateMainBalance = previousMainBalance - withdrawAmount;
    mainBalance.innerText = updateMainBalance;
})