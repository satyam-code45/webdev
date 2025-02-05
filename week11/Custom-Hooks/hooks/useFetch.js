import { useEffect, useState } from "react"


export function useFetch(url){
    const [data, setData] = useState({});
    async function getDetails(){
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }
    useEffect(()=>{
        getDetails();  //we cant make async function in useEffect so we defined getDetails() outside
    },[url])
    return {
        data
    }
}