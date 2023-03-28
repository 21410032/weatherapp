import React from 'react'
import './currentweather.css'
function Currentweather({data}) {
  return (
    <div className='currentweather'>
        <div className='top'>
            <div>         
         <p className='city'>{data.city}</p>
         <p className='weather-desc'>{data.weather[0].description}</p>
         </div>
          <div>
            <img alt="weather" src={`icon/${data.weather[0].icon}.png`}/>
          </div>

        </div>
        <div className='bottom'>
         <p className='tempreture'>{data.main.temp}°C</p>
         <div className='details'>
            <div className='parameter-row'>
                <div className='parameter-lavel'>
                 Feels Like:
                </div>
                <div className='parameter-value'>
                {data.main.feels_like}
                </div>
            </div>
            <div className='parameter-row'>
                <div className='parameter-lavel'>
                 Humidity:
                </div>
                <div className='parameter-value'>
                {data.main.humidity}%
                </div>
                {/* <{data.weather.icon}/> */}
            </div>
            <div className='parameter-row'>
                <div className='parameter-lavel'>
                 Wind:
                </div>
                <div className='parameter-value'>
                {data.wind.speed} & {data.wind.degree}
                </div>
            </div>
            <div className='parameter-row'>
                <div className='parameter-lavel'>
                 pressure:
                </div>
                <div className='parameter-value'>
                {data.main.pressure}
                </div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Currentweather