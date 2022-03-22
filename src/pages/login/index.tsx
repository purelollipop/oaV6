import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";

interface props {

}

const Index: React.FC<props> = (props) => {
    let navigate = useNavigate();
    const [val,setVal] = useState<string>('')
    const loginFun = () => {
        console.log(val)
        window.sessionStorage.setItem('token',val)
        navigate('/')
    }
    return(
        <>
        loginlogin
            <input onChange={(event)=>{setVal(event.target.value)}}/>
            <button onClick={loginFun}>login</button>
        </>
    );
};

export default Index
