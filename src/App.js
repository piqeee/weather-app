import logo from './logo.svg';
import './App.css';
import Lefttab from './Components/LeftTab';
import { useState } from 'react';
import {WEA_API_KEY, WEA_API_URL} from './Components/api';
import Search from './Components/search';
import Widget from './Components/widgets';
import Highlight from './Components/highlights';
import { DataProvider } from './Components/DataContext';



function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handleOnSearchChange = (searchData) => {

    const[lat, lon] = searchData.value.split(" ");
    const fetch_Weather = fetch(`${WEA_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEA_API_KEY}`);
    const fetch_Forecast = fetch(`${WEA_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEA_API_KEY}`);

    Promise.all([fetch_Weather, fetch_Forecast])
    .then(async (response) => {
        const weatherRes = await response[0].json();
        const forecastRes = await response[1].json();
        setWeather({ city: searchData.label, ...weatherRes});
        setForecast({ city: searchData.label, ...forecastRes});
    })
    .catch((error) => {
        console.error("error, u stoopid");
        throw error;
    })

  }


  
  return (
    <DataProvider>
      <div>
        <div className="w-[1694px] h-[1000px] bg-[#D3D3D3] flex">
          <div className = "w-[30%] h-[100%] bg-[#707A7E] relative shadow-[10px_-2px_20px_2px_rgba(0,0,0,0.3)]">
            <Search onSearchChange = {handleOnSearchChange} />
            {weather && <Lefttab data={weather}/>}
          </div>
          <div className="w-[70%] flex-col h-full">
            <div className="w-full h-[150px] flex justify-center items-center text-7xl font-bold font-mono">
              <p>Vincent's Weather App</p>
            </div>
            <div className="flex w-full justify-between mt-20 pl-8 pr-8">
              {forecast && <Widget data={forecast.list[4]} idx={0}/>}
              {forecast && <Widget data={forecast.list[12]} idx={1} />}
              {forecast && <Widget data={forecast.list[20]} idx={2} />}
              {forecast && <Widget data={forecast.list[28]} idx={3} />}
              {forecast && <Widget data={forecast.list[36]} idx={4} />}
            </div>
            <div className="w-full h-[50px] text-xl flex justify-center items-center font-mono mt-3">
              <p className="decoration-3">Highlights</p>
            </div>
            <Highlight />
          </div>
        </div>
      </div>
    </DataProvider>
    
  );
}

export default App;
