import React, {useState, useEffect} from'react';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from'recharts';
import './WeatherApp.jsx'
import './WeatherApp.css'

const Chart = ({ city, display }) => {
  let api_key = '183e8030cb89d14488d78220bd6eb150'
  const [res, setRes] = useState(true)
  const [hourlyData, setHourlyData] = useState([]);
  const search = async () => {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=9&exclude=hourly&units=Metric&appid=${api_key}`
    
    let response = await fetch(url)
      if (response.status === 200) {
        setRes(true)
        let data = await response.json()
        setHourlyData(getHourlyWeather(data))
        
      }
      
  }


  useEffect(() => {
    search(); 
  }, [city]);


  return (
    <div className='chart-container'>
      <AreaChart width={850} height={300} data={hourlyData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Area type="monotone" dataKey="temperature" fill="#1051e8" fillOpacity={0.5} stroke="#2124de" strokeWidth={2} />
        <Line type="monotone" dataKey="temperature" stroke="#2124de" strokeWidth={2}
          dot={{ stroke: '#121352', strokeWidth: 2, r: 4 }}/>
        <XAxis dataKey="hour" tickCount={24}
          tickFormatter={(tick) => `${tick}:00 ${tick < 12? 'AM' : 'PM'}`}
          axisLine={{ stroke: '#cbd8f5' }}
          tickLine={{ stroke: '#cbd8f5' }}
          tick={{ fill: '#dadee8' }}
          tickOffset={10} 
          tickMargin={15} 
          />
          
        <YAxis axisLine={{ stroke: 'white' }}
          tickLine={{ stroke: 'white' }}
          tickFormatter={(tick) => `${tick}°C`}
          tick={{ fill: '#dadee8' }}/>
          
        <CartesianGrid stroke= '#cbd8f5' strokeDasharray="5 5" />
        <Tooltip cursor={{ stroke: '#cbd8f5', strokeWidth: 1 }}
          formatter={(value,name, props) => [
            `${value}°C`,
            `at ${props.payload.hour}:00`,
          ]}/>
      </AreaChart>
    </div>
    
  );
};

function getHourlyWeather(data) {
  const currentDate = new Date().toLocaleDateString();
  const tomorrowDate = new Date(Date.now() + 86400000).toLocaleDateString();
  const hourlyData = data.list.filter((item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    return (date === currentDate) || (date  === tomorrowDate); 
    
  });

  const hours = hourlyData.map((item) => {
    const date = new Date(item.dt * 1000);
    const hour = date.getHours();
    return {
      hour,
      temperature: item.main.temp,
    };
  });
  return hours;
  
  
}

export default Chart;


