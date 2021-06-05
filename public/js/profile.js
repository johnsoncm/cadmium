const addEventHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#event-name').value.trim();
  const date = document.querySelector('#datepicker').value.trim();
  const time = document.querySelector('#timepicker').value.trim();
  const venue = document.querySelector('#venue').value.trim();
  const venueAddress = document.querySelector('#venue-address').value.trim();
  const description = document.querySelector('#event-description').value.trim();
  const img = document.querySelector('#img').value.trim();

// This isn't quite right - need to account for default img if user does not have one
  if (name && date && time && venue && venueAddress && description && img) {
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({ 
        name, 
        date,
        time,
        venue,
        venueAddress,
        description,
        img
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert('Error: Failed to create new event');
    }
  }
};

// Datepicker widget
$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

// Timepicker plugin
$(function () {
  $('#timepicker').timepicker({
    timeFormat: 'h:mm p',
    interval: 15
  });
});


const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/profile/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert('Failed to delete event');
    }
  }
};


document
  .querySelector('.new-event-form')
  .addEventListener('submit', addEventHandler);

document
  .querySelector('.event-list')
  .addEventListener('click', delButtonHandler);