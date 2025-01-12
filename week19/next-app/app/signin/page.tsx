"use client"
import axios from "axios"
export default function Signin(){

    return(
        <div className="w-screen h-screen flex items-center justify-center space-x-3">
            <div className=" flex items-center justify-center space-x-3">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
            </div>
            <button onClick={()=>{
                axios.post("http://localhost:3000/api/v1/signup")
            }}>Sign in</button>
        </div>
    )
}