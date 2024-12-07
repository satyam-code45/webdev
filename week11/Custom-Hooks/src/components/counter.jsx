import { useState } from "react";

export function Counter(){
    const {count, increaseCount} = useCounter();
    return(<div>
        <button onClick={increaseCount}>Increase {count}</button>
    </div>)
}
export function useCounter() {
    const [count, setCount] = useState(0);
    function increaseCount() {
        setCount(count => count+1);
    }
    return{
        count: count,
        increaseCount: increaseCount
    }
}