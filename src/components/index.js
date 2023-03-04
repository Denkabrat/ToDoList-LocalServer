import React from "react";
import { useLocation } from "react-router";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { useHttp } from "../hooks/http.hook";
import MainPage from '../pages/MainPage';
import { useState } from "react";


const RootComponent = () => {

    const [login,setLogin] = useState('');
    const [password,setPassword] = useState('');
    const [repeatPassword,setRepeatPassword] = useState('');

    const location = useLocation();



  
   
    

    return(
        <div>
            {(location.pathname === '/log'
             ? <LoginPage setLogin={setLogin} 
                          setPassword={setPassword} 
                          login={login} 
                          password={password}/> 
             : location.pathname === '/' 
             ? <RegisterPage
             setLogin={setLogin} 
             setPassword={setPassword} 
             login={login} 
             password={password}
             repeatPassword={repeatPassword}
             setRepeatPassword={setRepeatPassword}
             /> : null )}
        </div>
    )
}

export default RootComponent;