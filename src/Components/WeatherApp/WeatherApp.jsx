import React, { useState, useRef } from 'react'
import './WeatherApp.css'
import Chart from './Chart.js'
import CurrentDay from './CurrentDay.js'
import SelectWeathertIcon from './SelectWeatherIcon.js'
import writeTextInHTML from './WriteTextInHTML.js'
import writeDataInHTML from './WriteDataInHTML.js'
import DefaultWeather from './DefaultWeather.js'


import search_icon from '../Assets/Assets/search.png'

import humidity_icon from '../Assets/Assets/humidity.png'
import wind_icon from '../Assets/Assets/wind.png'
import sunset_icon from '../Assets/Assets/sunset.png'
import sunrise_icon from '../Assets/Assets/sunrise.png'
import high_icon from '../Assets/Assets/high.png'
import low_icon from '../Assets/Assets/low.png'
import DailyWeather from './DailyWeather.js'
import location_icon from '../Assets/Assets/location.png'
import uv_icon from '../Assets/Assets/uv-index.png'
import pressure_icon from '../Assets/Assets/pressure.png'



const WeatherApp = () => {
    
    let api_key = 'c9cf8ebdb0b44ab5a4e55726242804'
    let api_key_open_weather = '183e8030cb89d14488d78220bd6eb150'
    DefaultWeather()
    const [wicon, setWicon] = useState()
    const [show, setShow] = useState(false)
    const [res, setRes] = useState(true)
    const [city, setCity] = useState('tehran')
    const [country, setCountry] = useState('IR')
    const searchBarRef = useRef();
    
    // setWicon(SelectWeathertIcon.DefaultWeather())

    const search = async (e) => {
        const element = searchBarRef.current;
        const _city = element.value;
        setCity(_city)
       
        if (_city === '') {
            return 0;
        }
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

            writeDataInHTML(data)
            document.getElementsByClassName('description')[0].innerHTML = data2.weather[0].description

            writeTextInHTML()
            
            setWicon(SelectWeathertIcon(data2.weather[0].icon))
        } else {
            setRes(false)
        }
    }


  return (
    <body>
        <div className = 'container'>
            <div className='top-bar'>
                <input type = 'text' className='cityInput' placeholder='Search' ref={searchBarRef}/>
                <div className='search-icon' onClick={(e) => {search(e)}}>
                    <img src = {search_icon}/>
                </div>

            </div>
            <div className='search-again' style={{display: 'none'}}>
                <h2>Not Found!<b/>Please try again.</h2>
            </div>
            <div className='chart-data-container'>
            <div className='today-weather'>
                <div className='top'>
                    <div className='weather-image'>
                        <img className= 'weather-icon' src = {wicon}/>
                    </div>
                    <div className='temp-and-des'>
                        <div className='weather-temp'></div>
                        <div className='description'></div>
                    </div>
                    
                </div>
                <div className='data-container'>
                    <div className='element'>
                        <img  src = {humidity_icon} className='icon img-humidity' ></img>
                        <div className='data'>
                            <div className='humidity-percent'></div>
                            <div className='text humidity-text'></div>
                        </div>
                    </div>
                    <div className='element'>
                        <img src = {wind_icon} className='icon img-wind' ></img>
                        <div className='data'>
                            <div className='wind-rate'></div>
                            <div className='text wind-text'></div>
                        </div>
                    </div>
                    
                    <div className='element'>
                        <img src = {sunrise_icon} className='icon img-sunrise' ></img>
                        <div className='data'>
                            <div className='sunrise-time'></div>
                            <div className='text sunrise-text'></div>
                        </div>
                    </div>
                    <div className='element'>
                        <img src = {sunset_icon} className='icon img-sunset' ></img>
                        <div className='data'>
                            <div className='sunset-time'></div>
                            <div className='text sunset-text'></div>
                        </div>
                    </div>

                    <div className='element'>
                        <img src = {low_icon} className='icon img-low' ></img>
                        <div className='data'>
                            <div className='low-temp'></div>
                            <div className='text low-text'></div>
                        </div>
                    </div>
                    <div className='element'>
                        <img src = {high_icon} className='icon img-high' ></img>
                        <div className='data'>
                            <div className='high-temp'></div>
                            <div className='text high-text'></div>
                        </div>
                    </div>
                    <div className='element'>
                        <img src = {uv_icon} className='icon img-uv' ></img>
                        <div className='data'>
                            <div className='UV-index'></div>
                            <div className='text UV-index-text'></div>
                        </div>
                    </div>
                    <div className='element'>
                        <img src = {pressure_icon} className='icon img-pressure'></img>
                        <div className='data'>
                            <div className='pressure'></div>
                            <div className='text pressure-text'></div>
                        </div>
                    </div>
                </div>
            
            </div>
            <div className='chart-forecast'>
                <div className='forecast-location-container'>
                    <div className='forecast-container'>
                    <DailyWeather city = {city} display = {show}/>
                    </div>
                    <div className='location-time'>
                        <img src = {location_icon}></img>
                        <h1>{city.charAt(0).toUpperCase() + city.slice(1)}, {country}</h1>
                        <CurrentDay/>
                    </div>
                </div>
                <div className='chart'>
                    <div className='chart-header'> 
                        <h2>Hourly Forecast</h2>
                    </div>
                    <Chart city = {city} display = {show} />
                    </div>
            </div>
            </div>
        </div>
    </body>
  )
}







export default WeatherApp
