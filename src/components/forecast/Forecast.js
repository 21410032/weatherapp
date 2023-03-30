import React from 'react'
import './forecast.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
const weekdays=['Monday','Tuesday','wednesday','Thursday','Friday','Saturday','Sunday']
const day=new Date().getDay();
const forecastdays=weekdays.slice(day,weekdays.length).concat(weekdays.slice(0,day));
console.log(forecastdays)
function Forecast({data}) {
    
  return (
    <div>
        
        <label className='title'>Daily</label>
        <Accordion allowZeroExpanded >
           {data.list.slice(0,7).map((item,index)=>{
            return(
            <AccordionItem key={index}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className='daily-item'>
                        <img alt='weather' className='icon' src={`icon/${item.weather[0].icon}.png`}></img>
                        <label>{forecastdays[index]}</label>
                        <div className='right'>
                        <label className='desc'>{item.weather[0].description}</label>
                        <label className='min-max'>{Math.round(item.main.temp_min)-273}°C/{" "}{Math.round(item.main.temp_max)-273}°C</label>
                        </div>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel >
                    <div className='data'>
                    <div className='data-left'>
                    <div className='daily-pressure'>
                    <label className='heading'>Pressure:</label>
                    <label>{item.main.pressure}</label>
                    </div>
                    <div className='daily-clouds'>
                    <label className='heading'>Clouds:</label>
                    <label>{item.clouds.all}</label>
                    </div>
                    <div className='daily-pressure'>
                    <label className='heading'>Sea level:</label>
                    <label>{item.main.pressure}</label>
                    </div>
                    </div>
                    <div className='data-right'>
                    <div className='daily-pressure'>
                    <label className='heading'>Humidity:</label>
                    <label>{item.main.humidity}%</label>
                    </div>
                    <div className='daily-pressure'>
                    <label className='heading'>Wind speed:</label>
                    <label>{item.wind.speed}</label>
                    </div>
                    <div className='daily-pressure'>
                    <label className='heading'>Feels like:</label>
                    <label>{item.main.feels_like-273}</label>
                    </div>
                    </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
)})}
        </Accordion>
    </div>
  )
}

export default Forecast