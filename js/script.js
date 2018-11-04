let data;
function load(){
    // getStories();
    // navigator.geolocation.getCurrentPosition(function(position) {
    //     console.log(position.coords.latitude, position.coords.longitude);
    //    getLocation(position.coords.latitude, position.coords.longitude);
    // });
    getLocation(37.8716,-122.2584);
    console.log('eg');

}
function getStories(){
    // URL to get news stories. To see what kind of data you get back, you can go on this link:
    // https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=c60f3579d91d4b87b07f1cc22eca59d9
    const url = `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${NEWS_API_KEY}`;
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        generateNewsCards(response);
    });
}

function getLocation(lat, long){

    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${GOOGLE_GEOLOCATION_API_KEY}`;
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response);
        const loc = response['results'][0]['address_components'][1]['long_name']+ ",_" + response['results'][0]['address_components'][3]['long_name'];
        console.log(loc)
        getLocationNews(loc);
    });
    console.log('eg');


}
function getLocationNews(area){
    const url = "http://eventregistry.org/api/v1/event?query=" + encodeURI(`{"$query":{"locationUri":"http://en.wikipedia.org/wiki/${area}"}}&action=getEvents&resultType=events&eventsSortBy=date&eventsCount=50&eventImageCount=1&storyImageCount=1&apiKey=b51f8466-38d9-4b10-93e2-34ddfba8d0a7`);
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(reponse){
        generateNewsCards(reponse['events']['results']);
    });
}function generateNewsCards(data){
    data.forEach(e => {
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
