// Define UI vars

const quoteWrite = document.getElementById('quote');
const quoteDetail = document.getElementById('text');
const clearQ = document.getElementById('clear-tasks');
const quoteList = document.getElementById('container');
const quoteGr = document.getElementById('collection');


quoteWrite.addEventListener('submit', function(event) {
  if(quoteDetail.value === ''){
    alert('Kindly enter your quotes');
  };
  //Add Element
  const div = document.createElement('div');
  div.id = 'collection-group';
  div.appendChild(document.createTextNode(quoteDetail.value));

  quoteGr.appendChild(div);

  quoteDetail.value = '';

  console.log('clicked')
  event.preventDefault();
});


clearQ.addEventListener('click', function () {
  while(quoteGr.firstChild) {
    quoteGr.removeChild(quoteGr.firstChild);
  }
});
