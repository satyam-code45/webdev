import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col;' >
        <div >chils 1</div>
        <div >child 2</div>
        <div >child 3</div>
      </div>
    </>
  )
}

export default App
