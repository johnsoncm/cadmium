const addEventHandler = async (event) => {
  event.preventDefault();
console.log('add event handler is running', event)
  const title = document.querySelector('#event-name').value.trim();
  const date = document.querySelector('#datepicker').value.trim();
  const time = document.querySelector('#timepicker').value.trim();
  const locationName = document.querySelector('#venue').value.trim();
  const locationAddress = document.querySelector('#venue-address').value.trim();
  const description = document.querySelector('#event-description').value.trim();
  const img = document.querySelector('#img').value.trim();
  const link = document.querySelector('#event-link').value.trim();
  
console.log(title, date, time, locationName, locationAddress, description, img, link)
// This isn't quite right - need to account for default img if user does not have one

  if (title && date && time && locationName && locationAddress && description && img && link) {
    console.log(title, date, time, locationName, locationAddress, description, img, link)
    console.log('R U WORKING')
    const response = await fetch('/api/events', {
     

      method: 'POST',
      body: JSON.stringify({ 
        title, 
        date,
        time,
        locationName,
        locationAddress,
        description,
        img,
        link
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
     console.log(response);
    console.log(title, date, time, locationName, locationAddress, description, img, link)
console.log('response' , response)
    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      // alert('Error: Failed to create new event');
      swal('Oops!', 'There was an error adding the event. Please try again', 'error');
    }
  }
};


// Datepicker widget
$(function () {
  $('#datepicker').datepicker({
   dateFormat: 'yy-mm-dd'
    // changeMonth: true,
    // changeYear: true,
  });
});

// Timepicker plugin
$(function () {
  $('#timepicker').timepicker({
    timeFormat: 'hh:mm:ss',
    interval: 30
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
      // alert('Failed to delete event');
      swal('Oops!', 'There was an error deleting the event. Please try again', 'error');

    }
  }
};


document
  .querySelector('#new-event-form')
  .addEventListener('submit', addEventHandler);

// document
//   .querySelector('.event-list')
//   .addEventListener('click', delButtonHandler);
