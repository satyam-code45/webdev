import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const[visible,setVIsible] = useState(false)
  useEffect(function(){
    const interval = setInterval(function () {
      setVIsible(visible => !visible)
    },5000)
    return function(){
      clearInterval(interval)
    }
  },[])
    return (
    <>
      {visible ? <Counter count = {count} setCount={setCount}></Counter> : "Counter is on the way"}
      <Counter2 count = {count2} setCount={setCount2}></Counter2>
    </>
  )
}

function Counter(props){
  

  //gaurding our setInterval from re-renders
  //since dependency array is empty it only runs when the components mount 
  useEffect(function() {
    console.log("on mount ");
    
    let clock = setInterval(function(){
      console.log("from setInterval");
      
      props.setCount(count => count + 1)
    },1000)

    //runs on  unmount
    return function(){
      console.log("on unmount");
      clearInterval(clock)
    }
  },[])

  return <div>
    <h1>{props.count}</h1>
  </div>
}
function Counter2(props){
  
  useEffect(function() {
    console.log("on count2 changes ");
    
    return function(){
      console.log("on count2 ");
    }
  },[props.count])

  function increaseCount() {
    props.setCount(count=>count+1)
  }

  return <div>
    <button onClick={increaseCount}>Count {props.count}</button>
  </div>
}
export default App
