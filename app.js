//Define UI vars
// const quoteWrite = document.querySelector(".quote-field")
// const quoteDetail = document.querySelector("#text")
// const clearQ = document.querySelector(".clear-quote");
// const quoteList = document.querySelector(".saved-quote");

// //Load all event listeners
// loadEventListeners();

// function loadEventListeners() {
//   quoteWrite.addEventListener("submit", addTask);
// }

// function addTask(e) {
//   if(quoteDetail.value === '') {
//     alert('Empty');
//   }



//   e.preventDefault();
// }


document.getElementsByClassName('quote-field').addEventListener('submit', function(e) {

  console.log('test');
  e.preventDefault();
})