// This is not currently working, and probably not what we want for saving a "favorite" event.\/

const saveButton = $(".save-btn");

saveButton.on('click', function(){
    const saveId = $(this).data('id')
    console.log('im working', saveId);

});

//store ids in local storage




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
  