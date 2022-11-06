let weather = {

    fetchWeather: function (place) {

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=9fd7a449d055dba26a982a3220f32aa2`)
      
        .then((response) => {
            if (!response.ok) {
            alert("No city found.");
            throw new Error("No city found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },

    // data that want to be find

    displayWeather: function (data) {
      const { name } = data;
      const { country } = data.sys;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      const { deg } = data.wind;
      const { gust } = data.wind;

      // way to display data

      document.querySelector(".city").innerText = "Weather in " + name + ", " + country;
      document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = ((temp-272.15)/1).toFixed(2)  + "°C";
      document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText ="Wind speed: " + speed + " mph";
      document.querySelector(".deg").innerText ="Wind Degree: " + deg + "°";
      document.querySelector(".gust").innerText ="Wind gust: " + gust + "mph";
      document.querySelector(".weather").classList.remove("loading");
    },

    // search function

    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
  
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});
  
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

// beranang weather information will be display in the beginning

weather.fetchWeather("Beranang");