// Define UI vars

const quoteWrite = document.getElementById("#quote");
const quoteDetail = document.getElementById("#text");
const clearQ = document.getElementById("#clear-quotes");
const quoteList = document.getElementById("#container");

quoteEventListeners();

function quoteEventListeners() {
  quoteWrite.addEventListener('submit', addTask);
};





quoteWrite.addEventListener('submit', function(event) {
  // if(quoteDetail.value === ''){
  //   alert('Kindly enter your quotes')
  // };

  const li = document.createElement('li');
  li.id = 'container-quotes';
  li.appendChild(document.createTextNode(quoteDetail.value));

  quoteList.appendChild(li);

  box.value = '';




  event.preventDefault();
});


quoteWrite.addEventListener('submit', quoteWrite);