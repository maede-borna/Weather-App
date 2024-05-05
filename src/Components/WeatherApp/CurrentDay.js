import React, {useEffect} from 'react'
import './WeatherApp.css'

const CurrentDay = () => {
    const todayInfo = () => {
        const date = new Date();
        const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
        const month = date.toLocaleString('en-US', { month: 'long' });
        const dayOfMonth = date.getDate();
        let hour = date.getHours();
        const minute = date.getMinutes();
        const ampm = hour >= 12? 'PM' : 'AM';
        hour = hour % 12 || 12;

        
        const currentdate = `${dayOfWeek}, ${month} ${dayOfMonth}`
        const currentHour = `${hour}:${minute.toString().padStart(2, '0')} ${ampm}`
        
        return [currentdate, currentHour]
    }

    

  return (

    <div className='current-day'>
        <h3>{todayInfo()[0]}</h3>
        <h3>{todayInfo()[1]}</h3>
    </div>
  )
}

export default CurrentDay