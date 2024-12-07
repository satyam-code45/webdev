import { Header } from "./Header";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
export function Layout() {
    return <div style={{height:"100vh"}}>
      <Header />
      <div style={{height: "9 0vh"}}>
        <Outlet />
      </div>
      footer 
    </div>
  }