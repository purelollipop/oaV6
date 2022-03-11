import './App.css';
import {
    Outlet, Link
} from "react-router-dom";
import NotFind from "./pages/notFind.tsx"
import Main from "./pages/main.tsx";
import Logo from "./pages/logo.tsx";
import React from "react";
function App() {
  return (
    <div className="App">
        <Outlet />
    </div>
  );
}

export default App;
