import React, { useState } from 'react';
import logo from '../../logo.svg';
import './login.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { API_USERS_URL } from '../../utils/constants';
import ModalRegister from '../../components/ModalRegister/modal-register.componet';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

    function navigateHome() {
        history.push('/home');
    }

    const handleEmail = (e: any) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const requestLogin = (email: string, password: string) => {
        axios.post(API_USERS_URL + 'login', {
            email,
            password
        })
            .then((result: any) => {
                if (result.data.status === 200) {
                    
                    const userInfo = result.data.response;
                    userInfo.password = '';
                    console.log(userInfo);
                    sessionStorage.setItem('loggedIn', 'true');
                    sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
                    navigateHome();
                }

            })
            .catch((error: any) => {
                throw new Error(error);
            });
    }
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="emailInput">Email</label>
                                <input onChange={handleEmail} type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordInput">Password</label>
                                <input onChange={handlePassword} type="password" className="form-control" id="passwordInput" placeholder="Enter password" />
                            </div>
                            <button type="button" onClick={() => requestLogin(email, password)} className="btn btn-primary mr-1">Login</button>
                            <button type="button" onClick ={toggle} className="btn btn-primary ml-1">Register</button>
                        </form>
                    </div>
                </div>
                <ModalRegister
                modal={modal} 
                toggle={toggle}/>
            </header>
        </div>
    );
}

export default Login;
