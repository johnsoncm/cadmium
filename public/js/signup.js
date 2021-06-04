const signupForm = async (event) => {
    event.preventDefault();


    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

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

        } else {
            // alert(response.statusText);
            alert('Please enter a valid username, email, and password');
        }
    }
}
document.querySelector('.signup-form').addEventListener('click', signupForm);
// document.querySelector('#signup-form').addEventListener('submit', signupForm);