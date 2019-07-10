 
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Tipo', 'Quantidade'],
          ['Bug', 12],
          ['Dragon', 3],
          ['Electric', 9],
          ['Fighting', 8]
        
          // ['Flying', 19]
          // ['Ghost', 3]
          // ['Grass', 14]
        ]);

        var options = {
          chart: {
            title: 'Quantidade de Pokemons por tipo',
            subtitle: 'Pokemons da região Kanto',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
   