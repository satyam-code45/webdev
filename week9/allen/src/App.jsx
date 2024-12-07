import { useEffect, useState } from "react";

function App() { 
  return (
    <div style={{}}>
      <Clock/>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  function increaseCount(){
      setCount(count+1);
  }
  function decreaseCount(){
    setCount(count-1);
  }
  function resetCount(){
    setCount(0);
  }
  return(
    <div>
      <h1 id="text">{count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  )
}
function Clock() {
  const [count, setCount] = useState(0);

  useEffect(function(){
   let clocks = setInterval(function(){
      setCount(count => count+1);
    },1000);

    return function(){
      clearInterval(clocks)
    }
  },[]);

  return(
    <div>
      <h1 id="text">{count}</h1>
    </div>
  )
}
export default App
