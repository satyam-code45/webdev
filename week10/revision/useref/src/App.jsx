import { useState, useRef     } from 'react'

function App() {
  
  const inputRef = useRef();

  function focusOnInput(){
    //document.getElementById("name").focus()
    //another way to get the element is using useRef
    inputRef.current.focus()
  }

  return (
    <>
      <div>
        <input ref={inputRef} id='name' type='text'></input>
        <input id='email' type='text'></input>
        <button onClick={focusOnInput}>Submit</button>
      </div>
    </>
  )
}

export default App
