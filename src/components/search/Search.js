import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

function Search({onSearchChange}) {
  const [search,setsearch] =useState(null)
  const loadOptions= (inputValue) =>{
    return fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=${inputValue}`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e34d9026e1mshcc748820b4b1f3fp197063jsn1d005b4071ab',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    }).then((response)=>response.json())
    .then((response)=>{
      return(
        {
        options:response.data.map((city)=>{
          return  (
            {
          value:`${city.latitude} ${city.longitude}`,
          label:`${city.name},${city.countryCode},${city.regionCode}`,
            }
          )
        })
      }
      )
    })
    .catch(error=>console.log(error))
  }
  const handleonchange = (searchdata) =>{
    setsearch(searchdata);
    onSearchChange(searchdata);
  }
  return (
   <AsyncPaginate
   placeholder="search for city"
   debounceTimeout={500}
   value={search}
   onChange={handleonchange}
   loadOptions={loadOptions}/>
  )
}

export default Search