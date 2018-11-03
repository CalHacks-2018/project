let data;

function load(){
    getStories();
}
function getStories(){
    const url = `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${GOOGLE_API_KEY}`;
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response);
        data = response;
        generateNewsCards(response);
    });
}
function generateNewsCards(data){
    data.articles.forEach(e => {
        generateCard(e);
    });
}
function generateCard({title, content, url, urlToImage}){
    let cardTemplate = `
    <div class="card">
        <div class="card-image">
            <img src="${urlToImage}">
        </div>
        <div class="card-content">
            <div class="card-title">${title}</div>
            ${content}
        </div>
        <div class="card-action">
            <a href="${url}">Article Link</a>
        </div>
    </div>
    `;
    document.getElementById('news-stories--holder').insertAdjacentHTML('beforeend' ,cardTemplate);
}