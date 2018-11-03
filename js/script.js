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
        document.getElementById('root').textContent = JSON.stringify(response);
    });
}