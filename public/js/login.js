// const sweetalert = require('sweetalert');
// need the package but it's giving errors...

console.log("hhey whats up")
const loginFormHandler = async (event) => {
  event.preventDefault();
console.log("Hey there");
  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/homepage');
    } else {
      // alert(response.statusText);
      // swal(response.statusText);
      // Not sure if we can do response.statusText with sweetalerts, so I'm giving us options to look into
      swal('Oops!', 'There seems to be an error. Please try again', 'error');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      // alert(response.statusText);
      swal('Oops!', 'There seems to be an error. Please try again', 'error');    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);

