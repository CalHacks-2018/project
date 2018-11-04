let data;

function load(){
    let url = new URL(window.location.href);
    let country = url.searchParams.get("country");
    setupPage(country);
    getLocation(country);
}
function setupPage(country){
    let template = `
        <h1>Showing results for news articles in ${country}</h1>
    `;
    document.getElementById('root').insertAdjacentHTML('beforebegin', template);
}
function getLocation(country){
    // const url = `https://calhacks18.appspot.com/?id=country&country=${country}`;   
    const url = `http://localhost:8080/?id=country&country=${country.replace(/ /g,"_")}`;    
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        generateNewsCards(response);
    });
}
function generateNewsCards(data){
    data['events']['results'].forEach(e => {
        generateCard(e);
    });
}
function generateCard({title, summary, images, eventDate}){
    let cardTemplate = `
    <div class="card">
        <div class="card-image">
            <img src="${images[0]}">
        </div>
        <div class="card-content">
            <div class="card-title">${title[Object.keys(title)[0]]}</div>
            ${summary[Object.keys(summary)[0]]}
        </div>
        <div class="card-action">
            <a href="#">Date published: ${eventDate}</a>
        </div>
    </div>
    `;
    if(!(title[Object.keys(title)[0]] == undefined || summary[Object.keys(summary)[0]] == undefined)){
        document.getElementById('news-stories--holder').insertAdjacentHTML('beforeend' ,cardTemplate);
    }
}