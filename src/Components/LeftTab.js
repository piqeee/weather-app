import Search from './search';
import {WEA_API_KEY, WEA_API_URL} from './api';
import { useState } from 'react';


const Lefttab = ({handleOnSearchChange, data}) => {
    const changeToCelcius = (data) => {
        const res = data - 273;
        const intValue = Math.floor(parseFloat(res));
        const result = intValue.toString().padStart(2, '0');

        return result;
    }
    return (
        <div className="relative w-full h-full text-ellipsis overflow-hidden whitespace-nowrap">
            <div className="flex justify-center items-center w-[240px] h-[240px] mr-auto ml-auto mt-28 bg-[#424041] rounded-2xl shadow-[_1px_4px_3px_rgba(0,0,0,0.3)]">
                <img alt="weather" src={`../icons/${data.weather[0].icon}.png`} className="w-[200px]"/>
            </div>
            <div className="mt-20 bg-[#e6e6fa] w-[70%] ml-auto mr-auto pt-[20px] rounded-2xl shadow-[_1px_4px_3px_rgba(0,0,0,0.3)] flex pl-[20px] pr-[20px] h-44">
                <div className="flex-col  w-[40%]">
                    <div className="flex justify-center ">
                        <img alt="location" src="../icons/location.png" className="w-[20px] h-[20px] mt-1" />
                        <p className="w-max h-max text-2xl ml-[3px]">{data.city}</p>
                    </div>
                    <p className="w-max h-max text-sm">Details:</p>
                    <div className="flex text-sm">
                        <p className="w-max h-max">Feels Like: </p>
                        <p className="w-max h-max ml-2 font-semibold">{changeToCelcius(data.main.feels_like)}</p>
                    </div>
                    <div className="flex text-sm">
                        <p className="w-max h-max">Wind: </p>
                        <p className="w-max h-max ml-2 font-semibold">{data.wind.speed} m/s</p>
                    </div>
                    <div className="flex text-sm">
                        <p className="w-max h-max">Humidity: </p>
                        <p className="w-max h-max  ml-2 font-semibold">{data.main.humidity}%</p>
                    </div>
                </div>
                <div className="flex-col w-full  text-4xl text-ellipsis overflow-hidden whitespace-nowrap">
                    <div className="flex justify-end">
                        <p className="w-max h-max text-8xl font-semibold">{changeToCelcius(data.main.temp)}</p>
                        <img alt="celcius" src="../icons/weather.png" className="w-[32px] h-[32px]" />
                    </div>
                    <div className="w-full flex justify-center">
                        <p className="text-2xl w-max">{data.weather[0].description}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default Lefttab;