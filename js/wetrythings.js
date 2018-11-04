//let data;
const NEWS_API_KEY = 'c60f3579d91d4b87b07f1cc22eca59d9';

function myload(){
    // Ryan's getStories function
    const url = `https://newsapi.org/v2/everything?q=rohingya&from=2018-10-04&to=2018-11-04&sortBy=popularity&pageSize=10&apiKey=${NEWS_API_KEY}`;
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        // console.log(JSON.stringify(response));
        // document.getElementById('root').textContent = JSON.stringify(response);
        generateNewsCards(response['articles']);
    });
  }

  function generateNewsCards(data){
    console.log(data);
      data.forEach(e => {
          generateCard(e);
      });
  }
  function generateCard({title, description, urlToImage}){
      console.log('eg');
      let cardTemplate = `
      <div class="card">
          <div class="card-image">
              <img src="${urlToImage}">
          </div>
          <div class="card-content">
              <div class="card-title">${title}</div>
              ${description}
          </div>
          <div class="card-action">
              <a href="${'#'}">Article Link</a>
          </div>
      </div>
      `;
      if(!(title == undefined || description == undefined)){
          document.getElementById('news-stories--holder').insertAdjacentHTML('beforeend' ,cardTemplate);
      }
  }
