import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Main from "./pages/main.tsx";
import Logo from "./pages/logo.tsx";
import NotFind from "./pages/notFind.tsx";
import Show from "./pages/show.tsx"
import PageC from "./pages/pageC.tsx"
const PageA = React.lazy(() => import("./pages/pageA.tsx"));
const PageB = React.lazy(() => import("./pages/pageB.tsx"));

// const PageC = React.lazy(() => import("./pages/pageC.tsx"));
// import PageB from "./pages/pageB.tsx"

ReactDOM.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={ <App />} >
              <Route path="/" element={<Main />} >
                  <Route index element={<Show />} />
                  <Route path="/PageA" element={
                      <React.Suspense fallback={<>...</>}>
                          <PageA />
                      </React.Suspense>
                  } >

                  </Route>
                  <Route path="/PageB/*" element={
                      <React.Suspense fallback={<>...</>}>
                          <PageB />
                      </React.Suspense>
                  } />
                  <Route path="/PageC" element={<PageC />} />
              </Route>
              <Route path="/logo" element={<Logo />} />
              <Route path="*" element={<NotFind />} />
          </Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
