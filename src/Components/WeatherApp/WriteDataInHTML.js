function WriteDataInHTML(data) {
    const humidity = document.getElementsByClassName('humidity-percent')
    const wind = document.getElementsByClassName('wind-rate')
    const temperature = document.getElementsByClassName('weather-temp')
    const description = document.getElementsByClassName('description')
    const sunset_time = document.getElementsByClassName('sunset-time')
    const sunrise_time = document.getElementsByClassName('sunrise-time')
    const high_temp = document.getElementsByClassName('high-temp')
    const low_temp = document.getElementsByClassName('low-temp')
    const uv_range = document.getElementsByClassName('UV-index')
    const pressure = document.getElementsByClassName('pressure')

    humidity[0].innerHTML = `${data.current.humidity} %`
    wind[0].innerHTML = `${Math.round(data.current.wind_kph)} km/h`
    temperature[0].innerHTML = `${Math.round(data.current.temp_c)}°C`
    sunrise_time[0].innerHTML = data.forecast.forecastday[0].astro.sunrise
    sunset_time[0].innerHTML = data.forecast.forecastday[0].astro.sunset
    high_temp[0].innerHTML = `${Math.round(data.forecast.forecastday[0].day.maxtemp_c)}°C`
    low_temp[0].innerHTML = `${Math.round(data.forecast.forecastday[0].day.mintemp_c)}°C`
    uv_range[0].innerHTML = selectUVIndex(data.current.uv)
    pressure[0].innerHTML = `${Math.round(data.current.pressure_in)} inHg`
    // description[0].innerHTML = des
    
}

function selectUVIndex(uv) {
    if (uv>=0 && uv <=2) {
      return 'Low'
    } else if (uv>=3 && uv <=5) {
      return 'Moderate'
    } else if (uv>=6 && uv<=7) {
      return 'High'
    } else if (uv>=8 && uv<=10) {
      return 'Very High';
    } else 
      return 'Extreme'
    
}



export default WriteDataInHTML