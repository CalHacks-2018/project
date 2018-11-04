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
     ['City',   'Population', 'Area'],
     ['San Francisco',      2761477,    1285.31],
     ['Moscow',     13234110,    1481.76],
     ['Buenos Aires',    9529574,     1127.27],
     ['Turin',     907563,     130.17],
     ['Palermo',   655875,     158.9],
     ['Genoa',     607906,     243.60],
     ['Oklahoma City',   380181,     140.7],
     ['Juneau',  3712282,     1022.41],
     ['Fiumicino', 67370,      213.44],
     ['Capetown',     521920,      443.43],
     ['Beijing',  3826200,      1100]
   ]);

   var options = {
     //region: 'IT',
     displayMode: 'markers',
     colorAxis: {colors: ["D6EFFF", "FE654F"]}
   };

   var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
   chart.draw(data, options);
 };
