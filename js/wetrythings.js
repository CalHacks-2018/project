let data;

function myload(){
    // getStories();
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
       getLocation(position.coords.latitude, position.coords.longitude);
    });
    console.log('eg');

}
