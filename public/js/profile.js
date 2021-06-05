const addEventHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#event-name').value.trim();
  const date = document.querySelector('#datepicker').value.trim();
  const time = document.querySelector('#timepicker').value.trim();
  const locationName = document.querySelector('#venue').value.trim();
  const locationAddress = document.querySelector('#venue-address').value.trim();
  const description = document.querySelector('#event-description').value.trim();
  const img = document.querySelector('#img').value.trim();

// This isn't quite right - need to account for default img if user does not have one
  if (title && date && time && locationName && locationAddress && description && img) {
<<<<<<< HEAD
    const response = await fetch('/api/newevent', {
=======
    const response = await fetch('/api/events', {
>>>>>>> main
      method: 'POST',
      body: JSON.stringify({ 
        title, 
        date,
        time,
        locationName,
        locationAddress,
        description,
        img
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/newevent');
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

    const response = await fetch(`/api/newevent/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // document.location.replace('/homepage');
      document.location.replace('/newevent');
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