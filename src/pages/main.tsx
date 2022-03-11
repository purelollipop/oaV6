import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import PageA from "./pageA"
import PageB from "./pageB"
interface props {

}

const Main: React.FC<props> = (props) => {
    const a = 123
    const b = 456
    return (<div style={{display:'flex',flexFlow:'nowrap'}}>
        <div>
            <nav>
                <NavLink style={({ isActive }) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",
                    };
                }} to={`/PageA${a}`}>PageA</NavLink>
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
        </div>
        <div>
            <Outlet />
        </div>
    </div>);
};

export default Main
