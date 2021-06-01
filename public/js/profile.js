const newFormHandler = async (event) => {
  event.preventDefault();

<<<<<<< HEAD
  const email = document.querySelector('#project-name').value.trim();
=======
  const name = document.querySelector('#event-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
>>>>>>> 7b06402565e188751a45755d1ab2ca83f7ff61f3
  const description = document.querySelector('#project-desc').value.trim();

  if (email && password) {
    const response = await fetch(`/api/profile`, {
      method: 'POST',
      body: JSON.stringify({ email, }),
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
