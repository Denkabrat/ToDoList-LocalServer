import {NavLink} from 'react-router-dom';
import { useHttp } from '../hooks/http.hook';
import './RegisterPage.scss'


const RegisterPage = (props) => {

    const {request} = useHttp();

    const {login,password,setLogin,setPassword,repeatPassword,setRepeatPassword} = props;
   
    const onHandleChange = async(e) =>{
        e.preventDefault();

        let newAccount = {};

        if(password === repeatPassword && login.length > 5 && password.length === 8){
            newAccount = {
                userLogin:login,
                userPassword:password,
                secondPassword:repeatPassword
            }
           await request("http://localhost:3001/accounts","POST",JSON.stringify(newAccount))
            .then(data => console.log(data))
            .then(data => alert('Аккаунт создан'))
            .catch(err => alert("Ошибка"))

        }

        document.querySelector('input').value = ''
    }
    



    
    
        return(
            <div>
                <h1 className='SignIn'>Registration</h1>
                <form action="submit" onSubmit={onHandleChange}>
                    <input 
                    onChange={(e)=> setLogin(e.target.value)}
                    maxLength='10'
                    className='data_Input' 
                    name="login"    
                    type='text' 
                    placeholder="Enter your login"/>
    
    
                        <input 
                        onChange={(e)=> setPassword(e.target.value)}
                        maxLength='30'
                        className='data_Input' 
                        name="password" 
                        type='password' 
                        placeholder="Enter your Password"/>

                <input 
                        onChange={(e)=> setRepeatPassword(e.target.value)}
                        maxLength='30'
                        className='data_Input' 
                        name="password" 
                        type='password' 
                        placeholder="Repeat your Password"/>
    
                     <button className='btn_create_account' type="submit"><span>Create a new account</span></button>
                     <NavLink to='/log' className='link_to_enter'><button className='btn_create_acc'>Have a account ?</button></NavLink>
                </form>
            </div>
        )
    
    
    }

export default RegisterPage;