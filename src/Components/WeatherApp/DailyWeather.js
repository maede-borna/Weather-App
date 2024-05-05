import React, {useState, useEffect} from 'react'
import './WeatherApp.jsx'
import './WeatherApp.css'

import humidity_icon from '../Assets/Assets/humidity.png'
import temp_icon from '../Assets/Assets/temp.png'

const DailyWeather = ({ city, display }) => {
  const apiKey = 'c9cf8ebdb0b44ab5a4e55726242804';
  const [dailyData, setDailyData] = useState(null);
  const [fiveDaysWeather, setFiveDaysWeather] = useState([]);
  const search = async () => {
    const daily_url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=6`;
    const response = await fetch(daily_url);
    if (response.status === 200) {
      const data = await response.json();
      setDailyData(data);
    }
  };

  useEffect(() => {
    search();
  }, []);

  useEffect(() => {
    if (dailyData) {
      const forecastData = dailyData.forecast.forecastday.map((day) => {
        const date = new Date(day.date);
        const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
        const month = date.toLocaleString('en-US', { month:'short' });
        const dayOfMonth = date.getDate();
        console.log(day.day.condition.icon)
        return {
          date: `${dayOfWeek}, ${dayOfMonth} ${month}`,
          condition: day.day.condition.text,
          temp: day.day.avgtemp_c,
          humidity: day.day.avghumidity,
          wicon: day.day.condition.icon,
        };
      });
      setFiveDaysWeather(forecastData);
    }
  }, [dailyData]);

  return (
    <div className='forecast-container'>
      <h2 className='forecast-header'>5 Days Weather Forecast</h2>
      {fiveDaysWeather.slice(1).map((day, index) => (
        <div key={index} className='each-day'>
          {console.log(day)}
          <img src={day.wicon} />
          <div className='forecast-date-weather'>
            <h4 className='forecast-date'>{day.date}</h4>
            <p className='forecast-weather'>{day.condition}</p>
          </div>
          <div className='forecast-temp'>
            <img src={temp_icon} />
            <p>{Math.round(day.temp)}°</p>
          </div>
          <div className='forecast-humidity'>
            <img src={humidity_icon} />
            <p>{Math.round(day.humidity)} %</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyWeather;