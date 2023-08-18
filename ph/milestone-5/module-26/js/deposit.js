document.getElementById('deposit-btn').addEventListener('click', function(){
    // Deposit Part
    const depostiField = document.getElementById('deposit-balance');
    const newDeposit = parseFloat(depostiField.value);
    depostiField.value = '';
    if(isNaN(newDeposit)){
        alert('Please provide a valid number');
        return;
    }
    const depositAmountShow = document.getElementById('deposit-amount-show');
    const previousDeposit = parseFloat(depositAmountShow.innerText);
    const totolDeposit = newDeposit + previousDeposit;
    depositAmountShow.innerText = totolDeposit;
    

    // Total balance Part

    const totalBalanceNumber = document.getElementById('total-balance');
    const previousBalanceTotal = parseFloat(totalBalanceNumber.innerText);

    const totalDepositToTotalBalance = previousBalanceTotal + newDeposit;

    totalBalanceNumber.innerText = totalDepositToTotalBalance;




});






