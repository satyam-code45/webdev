import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Class11Program } from "./components/Class11Program";
import { Class12Program } from "./components/Class12Program";
import { Landing } from "./components/Landing";
import { ErrorPage } from "./components/ErrorPage";
import { Layout } from "./components/Layout";
import { Signup } from "./components/Signup";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/neet/online-coaching-class-11' element={<Class11Program />} />
          <Route path='/neet/online-coaching-class-12' element={<Class12Program />} />
          <Route path='/' element={<Landing />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/sign-up' element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
