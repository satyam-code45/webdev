import {useRef, useState} from 'react'
export function Signup(){
    const inputRef = useRef();
    function focusOnInput() {
        inputRef.current.focus();
    }
    return <div>
      <input  ref= {inputRef}type="text" ></input>
      <input  type="text" ></input>
      <button onClick={focusOnInput}>Submit</button>
    </div>
  }