async function getData(){
  let response = await fetch('https://api.kanye.rest/');
  let data = await response.json();
  renderQuote(data);
}

//New comment

function renderQuote(data){
  let result = document.querySelector('#result');
  result.innerHTML = 
          `<div class="alert alert-primary" role="alert">
               ${data.quote}
          </div>`;
}

getData();

let myBtn = document.querySelector('#myBtn');
myBtn.addEventListener('click', getData);