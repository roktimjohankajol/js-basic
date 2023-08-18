// Withdraw calculate 
document.getElementById('withdraw-btn').addEventListener('click', function(){

    const withdrawBalance = document.getElementById('withdraw-balance');
    const newwithdraw = parseFloat(withdrawBalance.value);
    withdrawBalance.value = '';
    if(isNaN(newwithdraw)){
        alert('Please provide a valid number');
        return;
    }
    const withdrawValueShow = document.getElementById('withdraw-value-show');
    const previousWithdraw = parseFloat(withdrawValueShow.innerText);
    const totalWithdrawAmount = newwithdraw + previousWithdraw; 
    withdrawValueShow.innerText = totalWithdrawAmount;
    

    // Total Balance to withdraw balance remove 
    
    const removeTotalBalance = document.getElementById('total-balance');
    const removeWithdrawBalance = parseFloat(removeTotalBalance.innerText);

    const removeWithdrawBalanceFromTotalBalance = removeWithdrawBalance - newwithdraw;
    if( removeWithdrawBalanceFromTotalBalance <= 0){
        alert('Not available balance');
        return;
    }
    removeTotalBalance.innerText = removeWithdrawBalanceFromTotalBalance;
    

});

