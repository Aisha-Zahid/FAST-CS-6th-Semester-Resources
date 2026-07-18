function getWeather() {
    var apiKey = "51b6593d6cddf4b7163f27b96f44c78d";
    var city = document.getElementById("cityInput").value.trim();
    if (city === "") {
      alert("Please enter a city name");
      return;
    }
  
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
  
    $.getJSON(url, function(data) {
      console.log("Data:", data);
  
      if (data.cod === "404") {
        alert("City not found");
        return;
      }
  
      var weatherHtml = "<div class='day'>" +
                           "<h2>" + data.name + "</h2>" +
                           "<div class='temperature'>" + data.main.temp + "°C</div>" +
                           "<div class='description'>" + data.weather[0].description + "</div>" +
                         "</div>";
  
      $("#weather").html(weatherHtml);
    }).fail(function(jqxhr, textStatus, error) {
      var err = textStatus + ", " + error;
      console.log("Request Failed: " + err);
    });
}
