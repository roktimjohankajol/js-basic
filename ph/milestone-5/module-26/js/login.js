
// Login form JS code here 
document.getElementById('login-btn').addEventListener('click', function(){
    // Step - 1 
    const emailField = document.getElementById('login-email');
    const email = emailField.value;

    // Step - 2 
    const passwordField = document.getElementById('login-password');
    const password = passwordField.value;

    if(email === 'abc@gmail.com' && password === 'abc'){
        // window.location.href='bank.html';
        alert('Your Are Logged');
    }
    else{
        alert('You Can not login');
    }

});

const numbers = [45, 12, 36, 84]
numbers.shift(34);
console.log(numbers);
