import React,{useState} from 'react';
import './App.css';
import Search from './components/search/Search';
import Currentweather from './components/Currentweather';
import Forecast from './components/forecast/Forecast';
function App() {
  const [currentweather,setcurrentweather]=useState(null)
    const [forcastweather,setforcastweather]=useState(null)
  const handleonsearchchange=(searchdata)=>{
    
    const [lat,long]=searchdata.value.split(" ");
    const currentweatherfetch=fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=79827069d4bbeffb9f316c984108ddd9`)
    const forecastfetch=fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=79827069d4bbeffb9f316c984108ddd9`)
    Promise.all([currentweatherfetch,forecastfetch])
    .then(async(response)=>{
      const weatherresponse=await response[0].json()
      const fetchresponse=await response[1].json()
      setcurrentweather({city:searchdata.label, ...weatherresponse})
      setforcastweather({city:searchdata.label, ...fetchresponse})
    })
    .catch((err)=>{console.log(err)})
  }
  console.log(currentweather)
  return (
    <div className="App">
      <Search onSearchChange={handleonsearchchange}/>
      {currentweather && <Currentweather data={currentweather}/>}
      {forcastweather && <Forecast data={forcastweather}/>}
    </div>
  );
}

export default App;
