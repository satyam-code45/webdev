import { useEffect, useState } from "react"

export function Posts(){
    const postsTitle = usePosts();
    return <div>
        {postsTitle}
    </div>
}

export function useFetch(url){
    const [data, setData] = useState({});

    async function getDetails(){
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }
    useEffect(()=>{
        getDetails();
    },[])
    return {
        data
    }
}