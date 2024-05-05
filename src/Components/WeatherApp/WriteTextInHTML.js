

function writeTextInHTML() {
    document.getElementsByClassName('wind-text')[0].innerHTML = 'Wind Speed'
    document.getElementsByClassName('humidity-text')[0].innerHTML = 'Humidity'
    document.getElementsByClassName('high-text')[0].innerHTML = 'High'
    document.getElementsByClassName('low-text')[0].innerHTML = 'Low'
    document.getElementsByClassName('sunset-text')[0].innerHTML = 'Sunset'
    document.getElementsByClassName('sunrise-text')[0].innerHTML = 'Sunrise'
    document.getElementsByClassName('UV-index-text')[0].innerHTML = 'UV index'
    document.getElementsByClassName('pressure-text')[0].innerHTML = 'Pressure'
  }

export default writeTextInHTML