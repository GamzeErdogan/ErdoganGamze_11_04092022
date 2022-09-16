import { createContext } from "react";
import useFetch from './useFetch';
import Loader from './components/Loader';

export const dataContext = createContext();

export const DataProvider = ({children}) =>{
    const { loading, data: datas } = useFetch("http://localhost:3000/data/logements.json");
    if (loading) return <Loader />
       
return (
    <dataContext.Provider value={{data: datas}}>
        {children}
    </dataContext.Provider>
)



}
