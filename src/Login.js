import React, { useState } from 'react'
import Header from './Header'
import { Button } from 'react-bootstrap'
import {useHistory} from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useHistory();

    let item = {email, password}

    async function logIn(){
       let result = await fetch("http://localhost:8000/api/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item),
        });
        result = await result.json();
        console.log("result", result);
        localStorage.setItem("user-info",JSON.stringify(result));
        navigate("/add");

    }
  return (
    <>
    <Header />
    <div className="col-sm-6 offset-sm-3">
    <h1>Login Page</h1>
    <input type="text" className="form-control" placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
    <br />
    <input type="text" className="form-control" placeholder="password"  onChange={(e)=> setPassword(e.target.value)}/>
    <br />
    <Button onClick={logIn}>Login</Button>
    </div>

    </>
  )
}

export default Login