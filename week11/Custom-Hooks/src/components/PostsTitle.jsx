import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/useFetch";

export function Posts(){
    const [id, setId] = useState(1);
    const {data} = useFetch("https://jsonplaceholder.typicode.com/posts/"+id);
    return (
    <div >
        <div>
            <button onClick={()=> setId(1)}>1</button>
            <button onClick={()=> setId(2)}>2</button>
            <button onClick={()=> setId(3)}>3</button>
            <button onClick={()=> setId(4)}>4</button>
        </div>
        <div>
            {data.title}
        </div>
    </div>
    )
}

