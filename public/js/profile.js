const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#event-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/profile`, {
      method: 'POST',
      body: JSON.stringify({ name, }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create profile');
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

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/profile/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete profile');
    }
  }
};



document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
