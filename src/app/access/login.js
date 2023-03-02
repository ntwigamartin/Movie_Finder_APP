import React from "react";
import { useState } from "react";

function Login({onFormSwitch}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <>
        <form onSubmit={handleSubmit} >
            <label htmlFor="email">Email</label>
            <input 
             type="email"
             required 
             name="email" 
             id="email" 
             placeholder="youremail@mail.com" 
             value={email} 
             onChange={(e)=>setEmail(e.target.value)} />
            
            <label htmlFor="password">Password</label>
            <input
             type="password"
             required 
             name="password" 
             id="password" 
             placeholder="****" 
             value={password} 
             onChange={(e)=>setPassword(e.target.value)}/>

            <button type="submit">Login</button>
        </form>
            <button onClick={()=>onFormSwitch('signup')} >Dont have an account? Sign up here!</button> 
        </>
    )
}

export default Login;