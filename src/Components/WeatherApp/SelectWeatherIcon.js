import React, { useState } from 'react'

import icon_01d from '../Assets/Assets/weather/01d.png'
import icon_01n from '../Assets/Assets/weather/01n.png'
import icon_02d from '../Assets/Assets/weather/02d.png'
import icon_02n from '../Assets/Assets/weather/02n.png'
import icon_03d from '../Assets/Assets/weather/03d.png'
import icon_03n from '../Assets/Assets/weather/03n.png'
import icon_04d from '../Assets/Assets/weather/04d.png'
import icon_04n from '../Assets/Assets/weather/04n.png'
import icon_09d from '../Assets/Assets/weather/09d.png'
import icon_09n from '../Assets/Assets/weather/09n.png'
import icon_10d from '../Assets/Assets/weather/10d.png'
import icon_10n from '../Assets/Assets/weather/10n.png'
import icon_11d from '../Assets/Assets/weather/11d.png'
import icon_11n from '../Assets/Assets/weather/11n.png'
import icon_13d from '../Assets/Assets/weather/13d.png'
import icon_13n from '../Assets/Assets/weather/13n.png'
import icon_50d from '../Assets/Assets/weather/50d.png'
import icon_50n from '../Assets/Assets/weather/50n.png'


function SelectWeatherIcon(code) {
  var icon = ''
switch (code)  {
  case '01d': 
    icon = icon_01d;
    break;
  case '01n':
    icon = icon_01n;
    break;
  case '02d':
    icon = icon_02d;
    break;
  case '02n':
    icon = icon_02n;
    break;
  case '03d': 
    icon = icon_03d;
    break;
  case '03n':
    icon = icon_03n;
    break;
  case '04d':
    icon = icon_04d;
    break;
  case '04n':
    icon = icon_04n;
    break;
  case '09d': 
    icon = icon_09d;
    break;
  case '09n':
    icon = icon_09n;
    break;
  case '10d':
    icon = icon_10d;
    break;
  case '10n':
    icon = icon_10n;
    break;
  case '11d': 
    icon = icon_11d;
    break;
  case '11n':
    icon = icon_11n;
    break;
  case '13d':
    icon = icon_13d;
    break;
  case '13n':
    icon = icon_13n;
    break;
  case '50d':
    icon = icon_50d;
    break;
  case '50n':
    icon = icon_50n;
    break;

}
return icon
}



export default SelectWeatherIcon
