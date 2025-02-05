import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Landing from '../components/Landing'
import Class11 from '../components/Class11'
import Class12 from '../components/Class12'
import Error from '../components/Error'
import Layout from '../components/Layout'

function App() {

  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Landing/>}></Route>
            <Route path='/class-11' element={<Class11/>}></Route>
            <Route path='/class-12' element={<Class12/>}></Route>
            <Route path='*' element={<Error/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
