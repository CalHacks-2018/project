function redirectCountry(){
    let country = document.getElementById('country').value;
    window.location = `./country.html?country=${country}`;
}

function redirectKeyword(){
    let keyword = document.getElementById('keyword').value;
    window.location = `./keyword.html?keyword=${keyword}`;
}
