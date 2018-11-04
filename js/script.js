function redirectCountry(){
    let country = document.getElementById('country').value;
    window.location = `./country.html?country=${country}`;
}