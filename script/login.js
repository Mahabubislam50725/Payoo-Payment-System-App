document.getElementById('login-btn')
.addEventListener('click', function() {
    const loginInput = document.getElementById('login-input');
    const mobileNumber = loginInput.value;

    const loginPin = document.getElementById('login-pin');
    const pin = loginPin.value;

    if(mobileNumber === '01234567890' && pin === '1234') {
        alert('Login successful!');

        window.location.assign("home.html");
    } else {
        alert('Invalid mobile number or pin. Please try again.');
    }
});