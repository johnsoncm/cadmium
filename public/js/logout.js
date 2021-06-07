const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    // alert(response.statusText);
    swal('Oops!', 'There seems to be an error logging out. Please try again', 'error');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
