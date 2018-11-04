function mapload(){
  google.charts.load('current', {
    'packages': ['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyBFbLwm2dGDHcAsQmOgTUcAknxd36sq30c'
  });
  google.charts.setOnLoadCallback(drawMarkersMap);
}

function drawMarkersMap() {
   var data = google.visualization.arrayToDataTable([
     ['Country',   'Population', 'Area'],
     ['Italy',      2761477,    1285.31],
     ['Myanmar',  38262,      11]
   ]);

   var options = {
     backgroundColor: '#B6C9CB',
     displayMode: 'markers',
     colorAxis: {colors: ['green', 'blue']}
   };

   var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
   chart.draw(data, options);
 };
