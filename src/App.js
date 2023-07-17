import React, { useEffect, useState } from "react";
import hotBg from "./assets/hot.jpg";
import coldBg from "./assets/cold.jpg";
import Descriptions from "./components/Descriptions";
import getFormattedData from "./WeatherService";


const App = () => {
  const[city , setCity] = useState("paris"); 
  const[weather , setWeather] = useState(null);
  const[units , setUnits] = useState("metric");
  const[bg , setBg] = useState(hotBg);

  useEffect(()=>{
    const fetchData = async () => {
      const data = await getFormattedData(city , units);
      setWeather(data);
      console.log(data);

      // dynamic bg
    const threshold = units === "metric" ? 20 : 60;
    if (data.main.temp <= threshold) setBg(coldBg);
    else setBg(hotBg);
      
    }
    fetchData();
    },[units , city]);


  const handleUnits =(e) =>{

    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");

  }

  const handleKeyPressed = (e) => {
    
      if (e.keyCode === 13) {
        setCity(e.currentTarget.value);
        e.currentTarget.blur();
      }
    };


    // const iconURL = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  

  return(
    <div className="app" style={{backgroundImage : `url(${bg})`}}>
      <div className="overlay">
      {weather && (
        <div className="container">
          <div className="section section__inputs">
            <input 
              onKeyDown = {handleKeyPressed} 
              type="text" 
              name="city" 
              placeholder="Enter city.." 

              />

            <button onClick={(e) => handleUnits(e)}>°F</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>{weather.name},{weather.sys.country}</h3>
              {/* <img alt="https://openweathermap.org/img/wn/01d@2x.png" src="WeathetIcon" /> */}
              <h3>{weather.weather[0].description}</h3>
            </div>
            <div className="temperature">
              <h1>{`${weather.main.temp.toFixed()} ° ${units === "metric" ? "C" : "F"}`}</h1>
            </div>
          </div>

          {/* bottom description */}
            <Descriptions weather={weather} units={units}/>

        </div>
      )}
        
      </div>
    </div>
  )
}

export default App;