import React, { useRef } from 'react'

export default  function useDebounce(originalFn) {

    const currentClock = useRef();

    const fn = () =>{
        clearTimeout(currentClock.current);

        currentClock.current = setTimeout(async ()=>{
            await originalFn();
        }, 900)

    }

  return fn
}
