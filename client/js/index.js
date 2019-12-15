$(document).ready(function(){
    $.ajax({
      url: "http://192.168.1.10:3000/api/sensors",
      method: "GET",
      success: function(data) {
        console.log(data);
        var id = [];
        var value = [];
    
        var htmlstring = "<table border='1'><th>ID</th><th>Sensor_Value</th><th>Created At</th>";
                $.each( data, function( key, value ) {
                    //alert( key + ": " + value.value );
                    htmlstring += "<tr><td>" + value.id + "</td><td>"+value.value+"</td><td>"+value.createdAt+"</td></tr>";
                    //return false;
                });
               htmlstring += "</table>";
               console.log(htmlstring);
               $("#devRajan").html(htmlstring);
  
        for(var i in data) {
          id.push("Id " + data[i].id);
          value.push(data[i].value);
        }
  
        var chartdata = {
          labels: id,
          datasets : [
            {
              label: 'Sensor Value',
              backgroundColor: 'rgba(200, 200, 200, 0.75)',
              borderColor: 'rgba(200, 200, 200, 0.75)',
              hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
              hoverBorderColor: 'rgba(200, 200, 200, 1)',
              data: value
            }
          ]
        };
  
        var ctx = $("#mycanvas");
  
        var barGraph = new Chart(ctx, {
          type: 'line',
          data: chartdata
        });
      },
      error: function(data) {
        console.log(data);
      }
    });
  });