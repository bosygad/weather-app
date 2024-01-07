"use strict"
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = new Date();
let searchInput = document.getElementById('searchInput')
let userLocation;
let Row = document.getElementById('Row');



async function searchWeather(city){
   let url = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=992d191c3bfe4a95afa223046232912&q=${city}&days=3`)
    let res = await url.json()

display(res)

}
searchWeather('cairo')

function display(obj) {
   let box = '';
   
      box += ` <div class="col-md-4">
      <div class="card today rounded-end-0 ">
          <p class="card-header d-flex justify-content-between"><span>${days[date.getDay()]}</span>
              <span>${new Date(obj.forecast.forecastday[0].date).getDate() + months[ date.getMonth()]}</span>
          </p>
          <div class="card-body name">
              <p>${obj.location.name}</p>
             <div class="temp d-flex justify-content-between pe-5">
              <h1 class="py-2 text-white">${obj.current.temp_c}<sup>o</sup>C</h1>
              <img src="https:${obj.current.condition.icon}">
             </div>
              <span class="py-2 text">${obj.current.condition.text}</span>
              <div class="pt-2 icons">
                  <span class="pe-3"><i class="fa-solid fa-umbrella px-1"></i>20%</span>
                  <span class="pe-3"><i class="fa-solid fa-wind px-1"></i>18km/h</span>
                  <span class="pe-3"><i class="fa-regular fa-compass px-1"></i>East</span>
              </div>
          </div>
      </div>
  </div>
  <div class="col-md-4 text-center">
  <div class="card  mb-3 rounded-0 pb-3 second-day">
      <p class=" card-header">${days[date.getDay()+1]}</p>
      <div class="card-body text-center">

          <img class="py-2" src="${obj.forecast.forecastday[1].day.condition.icon}">
          <h3 class="py-2 text-white">${obj.forecast.forecastday[1].day.maxtemp_c} </h3>
          <span class="py-2 text-white">${obj.forecast.forecastday[1].day.mintemp_c} </span>
          <p class="py-2 text">${obj.forecast.forecastday[1].day.condition.text} </p>
      </div>
  </div>
</div>
<div class="col-md-4 text-center">
<div class="card  mb-3 rounded-start-0 pb-3 third-day">
    <p class=" card-header">${days[date.getDay()+2]}</p>
    <div class="card-body text-center">

        <img class="py-2" src="${obj.forecast.forecastday[2].day.condition.icon}">
        <h3 class="py-2 text-white">${obj.forecast.forecastday[2].day.maxtemp_c} </h3>
        <span class="py-2 text-white">${obj.forecast.forecastday[2].day.mintemp_c} </span>
        <p class="py-2 text">${obj.forecast.forecastday[2].day.condition.text} </p>
    </div>
</div>
</div>
`
   
   Row.innerHTML = box
}

searchInput.addEventListener('keypress',city=>{

searchWeather(city.target.value)
})

