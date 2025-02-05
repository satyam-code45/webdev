import React, { useState } from "react";
import { usePrev } from "../../hooks/usePrev";

export default function Previous() {
 
 const [state, setState] = useState(0)
 const prev = usePrev(state);   
 return <>
    <p>state {state}</p>
    <button onClick={()=> {
        setState((currentState)=> currentState + 1 )
    }}>Change Value</button>
    <p>The Previous state was {prev}</p>
  </>;
}
