"use client"
import axios from "axios"
import { useState } from "react"
export default function Signup(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return(
        <div className="w-screen h-screen flex items-center justify-center space-x-3">
            <div className=" flex items-center justify-center space-x-3">
                <input type="text" placeholder="username" onChange={e => {
                    setUsername(e.target.value);
                }}/>
                <input type="password" placeholder="password" onChange={e => {
                    setPassword(e.target.value);
                }}/>
            </div>
            <button onClick={()=>{
                
                axios.post("http://localhost:3000/api/v1/signup",{
                    username,
                    password
                })
            }}>Sign up</button>
        </div>
    )
}