module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    let output;
    try{
      output = date.toLocaleDateString()
    }
    catch (e) {
      output = date
    }
    return output;

  }
  //catch block to return data given if not

  // Could do something along these lines but for the type of venue maybe? Down the line. Definitely not a priority now

  // get_emoji: () => {
  //   const randomNum = Math.random();

  //   // Return a random emoji
  //   if (randomNum > 0.7) {
  //     return `<span for="img" aria-label="lightbulb">💡</span>`;
  //   } else if (randomNum > 0.4) {
  //     return `<span for="img" aria-label="laptop">💻</span>`;
  //   } else {
  //     return `<span for="img" aria-label="gear">⚙️</span>`;
  //   }
  // },
};
