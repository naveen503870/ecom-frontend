import { useEffect, useState } from "react";
import { useNavigate ,useHistory} from 'react-router-dom';
import Header from "./Header";

function Register() {

    // useEffect(() =>{
    //     if(localStorage.getItem("user-info")){
    //         navigate.push("/add");
    //         console.log("running effect");
    //     }
    // })
    const [name, setName] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [email, setEmail] = useState(" ");
    const navigate = useHistory();

async function signUp(){
    let item = {name, password, email}
    console.log(name, password, email);

    let result = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(item)
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
                <h1>Register Page</h1>
                <input type="text" value={name} placeholder="name" onChange={(e)=>setName(e.target.value)} className="form-control" />
                <br />
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="password"  className="form-control" />
                <br />
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"  className="form-control" />
                <br />
                <button onClick={signUp}  className="btn btn-primary">Sign Up</button>
            </div>
        </>
    )
}
export default Register