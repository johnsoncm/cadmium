

const saveButton = $(".save-btn");

saveButton.on('click', function(){
    let savedEvents = [];
    const saveId = $(this).data('id')
    console.log('im working', saveId);
   
    savedEvents.push(savedId);
    localStorage.setItem('save-btn' , JSON.stringify(savedEvents));
renderSavedEvents()
console.log(localStorage);


});

// const getEvents = () => 
//     fetch ('/api/savedevents' , {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

//     const savedEvent = (event) =>
//     fetch('/api/events', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(event)
//     });

//     const renderSavedEvents = () => {
//         event.title
//     }

// function renderSavedEvents(){
//     savedEventsContainer.innerHTML = '';
// }

//store ids in local storage in an array and render on the page

//on page load check to see if there is a fav array - function 
//and also runs everytime save button is clicked
//make an end point where you can query array of ids
//jquery to handle return data





// let saveEvent;

// if (window.location.pathname === 'homepage') {
//   saveNoteBtn = document.querySelector('.saveEvent');
// }

// const getSavedEvents  = () =>
// fetch('/api/savedEvents', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

// const saveNewEvent  = (event) =>
// console.log("added event to saved list")
// fetch('/api/savedEvents', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(event)
// });

// const deleteSavedEvent  = (id) =>
// fetch(`/api/savedEvents/${id}`, {
//     method: 'DELTE',
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

// const handleEventSave = () => {
//     const newEvent = {
//       title: newEvent.value,
//       text: newEvent.value,
//     };
//     saveEvent(newEvent).then(() => {
//       getAndRenderNotes();
//       renderActiveNote();
//     });
//   };

// if (window.location.pathname === '/notes') {
//     saveNoteBtn.addEventListener('click', handleEventSave);

//   }
  