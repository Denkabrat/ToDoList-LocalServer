import {NavLink} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import MainPage from './MainPage';
import './LoginPage.scss'


const LoginPage = (props) => {



    const {request} = useHttp();

    const [enterLogin,setEnterLogin] = useState('');
    const [enterPassword,setEnterPassword] = useState('')
    const [turn,setTurn] = useState('')

    


    const handleSubmit = () => {
        
        request("http://localhost:3001/accounts")
        .then(data => data.forEach(({userLogin,userPassword,secondPassword,id}) => {
    
          if(enterLogin === userLogin && userPassword === enterPassword){
            
                setTurn('/MainPage');
            
          }else{
            alert('Неверный логин или пароль')
          }
            
        }))
    }
    


  

        return(
            <div>
                <h1 className='SignIn'>Sign In</h1>
                <form action="submit" onSubmit={handleSubmit}>
                    <input 
                    onChange={(e)=> setEnterLogin(e.target.value)}
                    maxLength='30'
                    className='data_Input' 
                    name="login"    
                    type='text' 
                    placeholder="Enter your login"/>
    
    
                        <input 
                        onChange={(e)=> setEnterPassword(e.target.value)}
                        maxLength='30'
                        className='data_Input' 
                        name="password" 
                        type='password' 
                        placeholder="Enter your Password"/>
    
                     <NavLink to={turn}><button 
                     className='btn_LogIn' 
                     onClick={()=> handleSubmit()}
                     type="submit">Log in</button> </NavLink> 

                     <NavLink to='/' className='link_to_create'><button className='btn_create_acc'>Create a new account</button></NavLink>
                </form>
            </div>
        )
    
    
    }

export default LoginPage;