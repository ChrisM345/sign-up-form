// Checks that password matches and uses setCustomerValidity so :invalid can be used in CSS
function validate_password(){
    pass = document.getElementById('password').value
    confirm_pass = document.getElementById('confirm-password').value

    pass_field = document.getElementById('password')
    confirm_field = document.getElementById('confirm-password')
    text_field = document.querySelector('.password-validation')
    if (pass != confirm_pass) {
        // pass_field.style.border = 'solid red 2px';
        // pass_field.style.boxShadow = '2px 2px 2px red';

        // confirm_field.style.border = 'solid red 2px';
        // confirm_field.style.boxShadow = '2px 2px 2px red';

        pass_field.setCustomValidity('invalid')
        confirm_field.setCustomValidity('invalid)')

        text_field.innerText = "Passwords do not match"

    }
    else {
        // pass_field.style.border = 'solid green 2px';
        // pass_field.style.boxShadow = '2px 2px 2px green';

        // confirm_field.style.border = 'solid green 2px';
        // confirm_field.style.boxShadow = '2px 2px 2px green';

        pass_field.setCustomValidity('')
        confirm_field.setCustomValidity('')

        text_field.innerText = "Passwords match!"
    }
}

// Add event listener to the confirm-password field which calls validate_password on keyup
document.getElementById('confirm-password').addEventListener('keyup', validate_password)