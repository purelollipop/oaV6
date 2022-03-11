import React from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import PageA from "./pageA"
import PageB from "./pageB"
interface props {

}

const Main: React.FC<props> = (props) => {
    const a = 123
    const b = 456
    let navigate = useNavigate();
    const clickFunA = ()=>{
        navigate('/PageA')
    }
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
                }} to={`/PageB${b}`}>PageB</NavLink>
            </nav>
            <button onClick={clickFunA}>pageA</button>
        </div>
        <div style={{border:'1px solid black',padding:'20px'}}>
            <Outlet />
        </div>
    </div>);
};

export default Main
