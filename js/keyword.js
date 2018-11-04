let data;
let englishOnly = true;
const NOTHINGINTERESTINGHERE = 'c60f3579d91d4b87b07f1cc22eca59d9';

function load(){
    let url = new URL(window.location.href);
    let keyword = url.searchParams.get("keyword");
    setupPage(keyword);
    getKeyword(keyword);
}
function setupPage(keyword){
    let template = `
        <h1>This month's top news articles with the keyword '${keyword}'</h1>
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-blue">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div><div class="gap-patch">
              <div class="circle"></div>
            </div><div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>

          <div class="spinner-layer spinner-red">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div><div class="gap-patch">
              <div class="circle"></div>
            </div><div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>

         <div class="spinner-layer spinner-yellow">
           <div class="circle-clipper left">
             <div class="circle"></div>
           </div><div class="gap-patch">
             <div class="circle"></div>
           </div><div class="circle-clipper right">
             <div class="circle"></div>
           </div>
         </div>

         <div class="spinner-layer spinner-green">
           <div class="circle-clipper left">
             <div class="circle"></div>
           </div><div class="gap-patch">
             <div class="circle"></div>
           </div><div class="circle-clipper right">
             <div class="circle"></div>
           </div>
         </div>
       </div>
    `;
    document.getElementById('root').insertAdjacentHTML('beforebegin', template);
}
function getKeyword(keyword){
    let api = `https://newsapi.org/v2/everything?q=${keyword}&from=2018-10-04&to=2018-11-04&sortBy=popularity&pageSize=10&apiKey=${NOTHINGINTERESTINGHERE}`;
    const url = `https://calhacks18.appspot.com/?id=url&url=${encodeURI(api)}`;
    // const url = `http://localhost:8080/?id=keyword&keyword=${keyword.replace(/ /g,"_")}`;
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
    document.getElementsByClassName('preloader-wrapper').item(0).style.display = 'none';
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
