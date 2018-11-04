let data;
let englishOnly = true;

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
    const url = `https://calhacks18.appspot.com/?id=country&country=${country.replace(/ /g,"_")}`;   
    // const url = `http://localhost:8080/?id=country&country=${country.replace(/ /g,"_")}`;    
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        data = response;
        generateNewsCards(response);
    });
}
function generateNewsCards(data){
    data['events']['results'].forEach(e => {
        generateCard(e);
    });
}
function generateCard({title, summary, images, eventDate}){

    if(englishOnly){
        if(!(title['eng'] == undefined || summary['eng'] == undefined)){
            let cardTemplate = `
            <div class="card">
                <div class="card-image">
                    <img src="${images[0]}">
                </div>
                <div class="card-content">
                    <div class="card-title">${title['eng']}</div>
                    ${summary['eng']}
                </div>
                <div class="card-action">
                    <a href="#">Date published: ${eventDate}</a>
                </div>
            </div>
            `;
            document.getElementById('news-stories--holder').insertAdjacentHTML('beforeend' ,cardTemplate);
        }
    }else{
        if(!(title[Object.keys(title)[0]] == undefined || summary[Object.keys(summary)[0]] == undefined)){
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
            document.getElementById('news-stories--holder').insertAdjacentHTML('beforeend' ,cardTemplate);
        }
    }
}
function toggleLanguage(){
    document.getElementById('news-stories--holder').textContent = "";
    englishOnly = !englishOnly;
    generateNewsCards(data);
}