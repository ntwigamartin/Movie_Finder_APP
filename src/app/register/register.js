import React from "react";
import { useState } from "react";
import './register.css'
import Login from './login'
import SignUp from "./signup";

function Register() {
    const [currentForm, setCurrentForm] = useState('login')

    const toggleForm = (formName) => {
        setCurrentForm(formName)
    }
    
    return(
        <div className="form_container">
            {currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />}
        </div>
    )
}

export default Register;