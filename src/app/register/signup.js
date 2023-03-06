import React from "react";
import { useState } from "react";

function SignUp({onFormSwitch}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://sinemazone.onrender.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password

            })
        })
            .then(r=>r.json())
            .then(data=>console.log(data))
    }
    
    return (
        <div className="register_forms">
            <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} >
            <label htmlFor="name">Full Name</label>
            <input 
             type="text"
             required 
             name="name" 
             id="name" 
             placeholder="Your full name" 
             value={name} 
             onChange={(e)=>setName(e.target.value)} />

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

            <button type="submit">Signup</button>
        </form>
            <button className="toggle-btn" onClick={()=>onFormSwitch('login')} >Already have an account? Sign in here!</button> 
        </div>
    )
}

export default SignUp;