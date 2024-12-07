import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
export function Header() {
    return <div>
        <Link to={"/"}>Allen</Link>
        |
        <Link to={"/neet/online-coaching-class-11"}>Class 11</Link>
        |
        <Link to={"/neet/online-coaching-class-12 "}>Class 12</Link>
        |
        <Link to={"/sign-up"}>Signup</Link>

    
    </div>
  }
  