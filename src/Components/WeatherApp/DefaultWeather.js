import React, { useState, useRef } from 'react'

import writeTextInHTML from './WriteTextInHTML.js'
import writeDataInHTML from './WriteDataInHTML.js'
import SelectWeatherIcon from './SelectWeatherIcon.js'
import WeatherApp from './WeatherApp.jsx'

const DefaultWeather = async () => {
    let api_key = 'c9cf8ebdb0b44ab5a4e55726242804'
    let api_key_open_weather = '183e8030cb89d14488d78220bd6eb150'

    const [wicon, setWicon] = useState()
    const [city, setCity] = useState('tehran')
    const [country, setCountry] = useState('IR')

    let url = `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=1`
    let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key_open_weather}`
    let response = await fetch(url)
    let response2 = await fetch(url2)
    if (response.status === 200 && response2.status === 200) {
        //setRes(true)
        
        let data = await response.json()
        let data2 = await response2.json()
        setCountry(data2.sys.country)
        
        //setShow(true)

        writeDataInHTML(data, data2.weather[0].descriptoin)

        writeTextInHTML()
        
        setWicon(SelectWeatherIcon(data2.weather[0].icon))
        var icon = data2.weather[0].icon
        document.getElementsByClassName('description')[0].innerHTML = data2.weather[0].descriptoin
     
    }

  return (
    <div></div>
  )
}



export default DefaultWeather
