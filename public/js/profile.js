const newFormHandler = async (event) => {
  event.preventDefault();

<<<<<<< HEAD
  const email = document.querySelector('#project-name').value.trim();
=======
  const name = document.querySelector('#event-name').value.trim();
<<<<<<< HEAD
  const needed_funding = document.querySelector('#project-funding').value.trim();
>>>>>>> 7b06402565e188751a45755d1ab2ca83f7ff61f3
  const description = document.querySelector('#project-desc').value.trim();

  if (email && password) {
    const response = await fetch(`/api/profile`, {
      method: 'POST',
      body: JSON.stringify({ email, }),
=======
  const date = document.querySelector('#date').value.trim();
  const time = document.querySelector('#time').value.trim();
  const venue = document.querySelector('#venue').value.trim();
  const address = document.querySelector('#venue-address').value.trim();
  const description = document.querySelector('#event-description').value.trim();

  if (name && date && time && venue && address && description) {
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({ name, date, time, venue, address, description }),
>>>>>>> 332e6835ca523dd121c7a2fd7c95d8bc3c787c98
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
<<<<<<< HEAD
      alert('Failed to create profile');
=======
      alert('Error: Failed to create new event');
>>>>>>> 332e6835ca523dd121c7a2fd7c95d8bc3c787c98
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

<<<<<<< HEAD
    const response = await fetch(`/api/profile/${id}`, {
=======
    const response = await fetch(`/api/events/${id}`, {
>>>>>>> 332e6835ca523dd121c7a2fd7c95d8bc3c787c98
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
<<<<<<< HEAD
      alert('Failed to delete profile');
=======
      alert('Error: Failed to delete event');
>>>>>>> 332e6835ca523dd121c7a2fd7c95d8bc3c787c98
    }
  }
};

document
  .querySelector('.new-event-form')
  .addEventListener('click', newFormHandler);

document
  .querySelector('.event-list')
  .addEventListener('click', delButtonHandler);
