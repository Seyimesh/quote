// Define UI vars

const quoteWrite = document.getElementById('quote');
const quoteDetail = document.getElementById('text');
const clearQ = document.getElementById('clear-quotes');
const quoteList = document.getElementById('container');


quoteWrite.addEventListener('submit', function(event) {
  if(quoteDetail.value === ''){
    alert('Kindly enter your quotes');
  };
  //Add Element
  const div = document.createElement('div');
  div.id = 'collection-group';
  div.appendChild(document.createTextNode(quoteDetail.value));

  //Create a link 
  const link = document.createElement('a');

  link.id = 'delete-item';

  //Add icon
  link.innerHTML = '<ion-icon name="close-outline"></ion-icon>';

  div.appendChild(link);

  quoteList.appendChild(div);

  quoteDetail.value = '';

  console.log('clicked')
  event.preventDefault();
});


quote.addEventListener('submit', quote);

clearQ.addEventListener('click',  function(){
  while(clearQ.firstChild){
    clearQ.removeChild(clearQ.firstChild);
  }
})

quote.addEventListener('click', clearQ);