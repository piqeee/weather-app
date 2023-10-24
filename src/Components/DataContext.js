
import React, { createContext, useContext, useState } from 'react';


 export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [export_data, setExportData] = useState(null);
    console.log(process.env)

    return (
        <DataContext.Provider value={{export_data, setExportData}}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
}