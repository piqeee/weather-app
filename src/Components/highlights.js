
import { useData } from './DataContext';
import { DataContext } from './DataContext';
import { useContext} from 'react';


const Highlight = () => {
    const { export_data } = useContext(DataContext);
    return(
        <div className="w-[60%] h-[400px] mt-5 flex flex-wrap ml-auto mr-auto justify-between items-between">
            <div className="bg-[#424041] rounded-2xl shadow-[_1px_4px_3px_rgba(0,0,0,0.3)] w-[300px] h-[168px]">
                <div className="w-full h-[30%] text-xl flex justify-center items-center font-mono">
                    <p>Wind</p>
                </div>
                <div className="w-full h-[70%] text-6xl flex justify-center items-center font-mono text-white">
                    <p>{export_data?.wind} m/s</p>
                </div>
            </div>
            <div className="bg-[#424041] rounded-2xl shadow-[_1px_4px_3px_rgba(0,0,0,0.3)] w-[300px] h-[168px]">
                <div className="w-full h-[30%] text-xl flex justify-center items-center font-mono">
                    <p>Feels Like</p>
                </div>
                <div className="w-full h-[70%] text-6xl flex justify-center items-center font-mono text-white">
                    <p>{export_data?.feels_like}°C</p>
                </div>                
            </div>
            <div className="bg-[#424041] rounded-2xl shadow-[_1px_4px_3px_rgba(0,0,0,0.3)] w-[300px] h-[168px]">
                <div className="w-full h-[30%] text-xl flex justify-center items-center font-mono">
                    <p>Humidity</p>
                </div>
                <div className="w-full h-[70%] text-6xl flex justify-center items-center font-mono text-white">
                    <p>{export_data?.humidity}%</p>
                </div>                
            </div>
            <div className="bg-[#424041] rounded-2xl shadow-[_1px_4px_3px_rgba(0,0,0,0.3)] w-[300px] h-[168px]">
                <div className="w-full h-[30%] text-xl flex justify-center items-center font-mono">
                    <p>Sea Level</p>
                </div>
                <div className="w-full h-[70%] text-6xl flex justify-center items-center font-mono text-white">
                    <p>{export_data?.sea_level} m</p>
                </div>                
            </div>
        </div>
    )

}

export default Highlight;