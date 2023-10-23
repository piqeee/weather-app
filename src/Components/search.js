import { AsyncPaginate } from 'react-select-async-paginate';
import { useState, useEffect } from 'react';
import { GEO_API_URL, geoApioptions } from './api';



const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const handleOnChange = (data) => {
        setSearch(data);
        onSearchChange(data);

    }


    const loadOptions = async (input) => {
        try {
            const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${input}`, geoApioptions);
            const result = await response.json();

            if (!result.data) {
                console.error('API response does not have the expected "data" property:', result);
                return { options: [] };
            }

            const options = result.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}` ,
                        label: `${city.name}, ${city.countryCode}` ,
                    };
            });

            return {
                options: options
            };
        } catch (error) {
            console.error(error);
            throw error;
        }

    }
    useEffect(() => {
        return () => setSearch(null);
    }, []);
    return (
        <AsyncPaginate 
            placeholder="Search for cities"
            debounceTimeout={600}
            value={search}
            onChange = {handleOnChange}
            loadOptions = {loadOptions}
            className= "w-[70%] mr-auto ml-auto absolute top-[50px]"
        />
            
    );
}

export default Search;

