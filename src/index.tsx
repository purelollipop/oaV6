import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Link,useRoutes} from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login";
import NotFind from "./pages/notFind";
import ShowPage from "./pages/showPage"
import PageC from "./pages/pageC"
const PageA = React.lazy(() => import("./pages/pageA/pageA"));
const PageB = React.lazy(() => import("./pages/pageB"));


ReactDOM.render(
    <BrowserRouter>
        <App />
        {/*<Routes>*/}
        {/*    <Route path="/" element={ <App />} >*/}
        {/*        <Route path="/" element={<Main />} >*/}
        {/*            <Route index element={<ShowPage />} />*/}
        {/*            <Route path="/PageA/*" element={*/}
        {/*                <React.Suspense fallback={<>...</>}>*/}
        {/*                    <PageA />*/}
        {/*                </React.Suspense>*/}
        {/*            } >*/}
        {/*            </Route>*/}
        {/*            <Route path="/PageB/*" element={*/}
        {/*                <React.Suspense fallback={<>...</>}>*/}
        {/*                    <PageB />*/}
        {/*                </React.Suspense>*/}
        {/*            } />*/}
        {/*            <Route path="/PageC" element={<PageC />} />*/}
        {/*        </Route>*/}
        {/*        <Route path="/login" element={<Login />} />*/}
        {/*        <Route path="*" element={<NotFind />} />*/}
        {/*    </Route>*/}
        {/*</Routes>*/}
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
