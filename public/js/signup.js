// const { default: swal } = require("sweetalert");

const signupForm = async (event, error) => {
    event.preventDefault();


    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    // const confirmPassword = document.querySelector('#confirm-password-signup').value.trim();

    // if (password === confirmPassword) {

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('Account successfully created!');
            // If successful, redirect browser to user homepage
            document.location.replace('/homepage');
            // or should it be '/'???
            console.log('good');
            swal('Success!', 'Your account has sucessfully been created.', 'success');

        } else {
            // alert(response.statusText);
            console.log(error);
            // alert('Please enter a valid username, email, and password');
            swal('Error!', 'Please enter a valid username, email, and password. Email must have @___, and password must be at least 8 characters.', 'error');

        }
        // add try catch - for creating error
    }
// }
}
document.querySelector('.signup-form').addEventListener('click', signupForm);