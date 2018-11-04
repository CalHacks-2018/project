let data;

function load(){
    // navigator.geolocation.getCurrentPosition(function(position) {
    //    getLocation(position.coords.latitude, position.coords.longitude);
    // });
    getLocation(37.8734884, -122.256028);
}
function getLocation(lat, long){
    const url = `https://calhacks18.appspot.com/?id=location&lat=${lat}&long=${long}`;    
    console.log(lat, long, url);

    fetch(url)
    .then(function(response){
        console.log('egere');
        return response.json();
    })
    .then(function(response){
        console.log(response);
        generateNewsCards(response);
    }).catch(function(error){
        console.log(error);
    });
}
function generateNewsCards(data){
    data['events']['results'].forEach(e => {
        generateCard(e);
    });
}
function generateCard({title, summary, images}){
    console.log('eg');
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
            <a href="${'#'}">Article Link</a>
        </div>
    </div>
    `;
    if(!(title['eng'] == undefined || summary['eng'] == undefined)){
        document.getElementById('news-stories--holder').insertAdjacentHTML('beforeend' ,cardTemplate);
    }
}