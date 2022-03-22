import React, {useEffect} from 'react';
import {NavLink, Outlet, useLocation, useNavigate} from "react-router-dom";

interface props {

}

function Main ():JSX.Element | null{
    let navigate = useNavigate();
    useEffect(()=>{
        if (!window.sessionStorage.getItem('token')){
            navigate('/login')
        }
    },[])
    // let navigate = useNavigate();
    const clickFunA = ()=>{
        navigate('/PageA')
    }
    const exitFun = ()=>{
        window.sessionStorage.setItem('token','')
        console.log(window.sessionStorage)
        navigate('/login')
    }
    if (!window.sessionStorage.getItem('token')){
        return null
    } else {
        return (<div style={{display:'flex',flexFlow:'nowrap'}}>
            <div>
                <nav>
                    <NavLink style={({ isActive }) => {
                        return {
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "red" : "",
                        };
                    }} to={`/PageA`}>PageA</NavLink>
                </nav>
                <nav>
                    <NavLink style={({ isActive }) => {
                        return {
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "red" : "",
                        };
                    }} to={`/PageB`}>PageB</NavLink>
                </nav>
                <nav>
                    <NavLink style={({ isActive }) => {
                        return {
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "red" : "",
                        };
                    }} to={`/PageC`}>PageC</NavLink>
                </nav>
                <button onClick={clickFunA}>pageA</button>
            </div>
            <button onClick={exitFun}>退出</button>
            <div style={{border:'1px solid black',padding:'20px'}}>
                <Outlet />
            </div>
        </div>);
    }
};

export default Main
