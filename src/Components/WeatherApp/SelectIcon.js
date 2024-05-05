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

function SelectIcon () {
    document.getElementsByClassName('img-humidity').setAttribute('src', humidity_icon)
}

export default SelectIcon