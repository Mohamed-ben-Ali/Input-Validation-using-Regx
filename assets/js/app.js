document.getElementById('inputForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let fullNameInput = document.getElementById('fullName').value;
    let emailInput = document.getElementById('email').value;
    let fullNameError = document.getElementById('fullNameError');
    let emailError = document.getElementById('emailError');

    let fullNamePattern = /^(?=.{3,})([A-Za-z]{3,}( [A-Za-z]{3,})*)$/;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|edu|org)\.eg$/;

    let isFullNameValid = fullNamePattern.test(fullNameInput);
    let isEmailValid = emailPattern.test(emailInput);

    fullNameError.textContent = isFullNameValid ? '' : 'Invalid full name. It should have at least 3 characters in each part, separated by spaces, and only alphabetic characters.';
    emailError.textContent = isEmailValid ? '' : 'Invalid email. It should be a valid .eg domain email.';

    if(isEmailValid && isFullNameValid){
        alert("Form submitted Successfully!")
       document.getElementById('inputForm').reset();
    }

})