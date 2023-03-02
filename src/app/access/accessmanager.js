import React from "react";
import { useState } from "react";
import Login from './login'
import SignUp from "./signup";

function AccessManager() {
    const [currentForm, setCurrentForm] = useState('login')

    const toggleForm = (formName) => {
        setCurrentForm(formName)
    }
    
    return(
        <div>
            {currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />}
        </div>
    )
}

export default AccessManager;