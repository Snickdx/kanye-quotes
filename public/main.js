async function getData(){
  let response = await fetch('https://api.kanye.rest/');
  let data = await response.json();
  renderQuote(data);
}

//New comment
let count = 1;

function renderQuote(data){
  let result = document.querySelector('#result');
  
  result.innerHTML += 
          `<div class="card">
                <div class="card-header">
                  <h5 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse-${count}" >
                      Quote #${count}
                    </button>
                  </h5>
                </div>
            
                <div id="collapse-${count}" class="collapse"  data-parent="#accordionExample">
                  <div class="card-body">
                    ${data.quote}
                  </div>
                </div>
              </div>`;
  count++;
}

getData();

let myBtn = document.querySelector('#myBtn');
myBtn.addEventListener('click', getData);