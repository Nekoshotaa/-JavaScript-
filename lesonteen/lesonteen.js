

fetch('https://api.openweathermap.org/data/2.5/weather?lat=71.446&lon=51.14&appid=39ab1b0978645e7bc95e8ba9f4c7f49c')
.then(function (resp){return resp.json()})
.then(function (data){
   console.log(data);
   console.log(data.timezone);
   console.log(data.main.humidity);
   document.querySelector('.city-name').innerHTML = data.name
   document.querySelector('.temp').innerHTML = data.main.temp
   document.querySelector('.temp').innerHTML = math.round((data.main.temp - 273 )) + '°'
   document.querySelector('.humidity').innerHTML = data.main.humidity
   document.querySelector('.wind').innerHTML = data.wind.speed
   document.querySelector('.sys').innerHTML = data.sys.sunrise
   document.querySelector('.sys').innerHTML = sys.sunset
})