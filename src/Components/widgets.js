
import { useData } from './DataContext';
import './widgets.css';


const WEEK_DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const Widget = ({data, idx}) => {

    const { setExportData } = useData();
    const getDay = new Date().getDay();
    const getNextDay = WEEK_DAYS.slice(getDay, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, getDay));

    

    const onClickFunc = () => {
        const wind = data.wind.speed;
        const humidity = data.main.humidity;
        const sea_level = data.main.sea_level;
        const feels_like = data.main.feels_like;
        
        setExportData({
            wind: wind,
            humidity: humidity,
            sea_level: sea_level,
            feels_like: feels_like
        });

    }

    return (
        <div className="widgets text-ellipsis overflow-hidden whitespace-nowrap w-[168px] h-[250px] bg-[#424041] rounded-2xl shadow-[_1px_4px_3px_rgba(0,0,0,0.3)] font-mono"
        onClick = {onClickFunc}
        >
            <div className="w-full h-[15%] mt-2 text-xl">
                <p className="w-max h-max ml-auto mr-auto">{getNextDay[idx]}</p>
            </div>
            <div className="w-full h-[35%] mt-3">
                <img className="w-[65px] mr-auto ml-auto" alt="weather" src={`../icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="w-full h-[35%] flex items-center justify-between pl-5 pr-5">
                <div className="text-xl">
                    <p>24°C</p>
                </div>
                <div className="text-xl text-[#D3D3D3]">
                    <p>17°C</p>
                </div>
            </div>

        </div>
    )
}
export default Widget;
