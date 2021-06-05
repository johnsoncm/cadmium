

const saveButton = $(".save-btn");

saveButton.on('click', function(){
    let savedEvents = [];
    const saveId = $(this).data('id')
    console.log('im working', saveId);
   
    savedEvents.push(savedId);
//     localStorage.setItem('save-btn' , JSON.stringify(savedEvents));
// renderSavedEvents()
// console.log(localStorage);


});

//store ids in local storage and render on the page




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
  