const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#event-name').value.trim();
  const date = document.querySelector('#date').value.trim();
  const time = document.querySelector('#time').value.trim();
  const venue = document.querySelector('#venue').value.trim();
  const address = document.querySelector('#venue-address').value.trim();
  const description = document.querySelector('#event-description').value.trim();

  if (name && date && time && venue && address && description) {
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({ name, date, time, venue, address, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Error: Failed to create new event');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/events/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Error: Failed to delete event');
    }
  }
};

document
  .querySelector('.new-event-form')
  .addEventListener('click', newFormHandler);

document
  .querySelector('.event-list')
  .addEventListener('click', delButtonHandler);
