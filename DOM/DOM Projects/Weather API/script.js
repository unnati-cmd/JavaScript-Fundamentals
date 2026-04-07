// Input & Button
const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const errorblock = document.querySelector('#errorblock');

// Main Weather Info
const cityName = document.querySelector("#cityName");
const date = document.querySelector("#date");
const temp = document.querySelector("#temp");
const condition = document.querySelector("#condition");

// Weather Details
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const feelsLike = document.querySelector("#feelsLike");

// Optional Containers (for styling / loading / errors later)
const weatherCard = document.querySelector(".weather-card");
const searchBox = document.querySelector(".search-box");
const container = document.querySelector(".container");


searchBtn.addEventListener('click', function(dets){
    const city = cityInput.value.trim();
    if(city === "") return;

    getWeather(city);
})

// Function Implementation
async function getWeather(city){
    try{
        console.log("Query:", `${city},IN`);
        let apiKey = `962608d1af53e7a43cb70f33f9f4ca11`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

        // Method-01 (fetch->then)
    //     fetch(url)
    //     .then((raw) => raw.json())
    //     .then((result) =>{
    //         console.log(result);
    //     });
        errorblock.style.display = 'none';

        // Mehtod-02 (async await)
        let raw = await(fetch(url));
        if(!raw.ok){
            throw new Error("City not found. Please enter a valid city name.");
        }
        // json conversion
        let data = await raw.json();
        console.log(data);
        
        //Weather Card Display:
        cityName.innerHTML = data.name;
        temp.innerHTML = data.main.temp + "°C";
        condition.innerHTML = data.weather[0].main;
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/h";
        feelsLike.innerHTML = data.main.feels_like + "°C";
    } 
    catch (error){
        errorblock.style.display = 'block';
        errorblock.innerHTML = error.message;

        setTimeout(() => {
            errorblock.style.display = 'none';
        }, 2000);
        console.log(error.message);
    }
}