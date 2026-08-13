const apikey = "bcebea5d8d0473c424d4f3a4128d75d5";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =  document.querySelector(".search input");
const searchBtn =  document.querySelector(".search button");
const wetherIcon = document.querySelector(".wether-icon");

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        wetherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        wetherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        wetherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        wetherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        wetherIcon.src = "images/mist.png";
    }
}       

searchBtn.addEventListener("click", ()=>{

checkWeather(searchBox.value);
})