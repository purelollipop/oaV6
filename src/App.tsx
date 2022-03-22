import './App.css';
import React from "react";
import {
  Outlet, Link, useLocation,useRoutes
} from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login";
import NotFind from "./pages/notFind";
import ShowPage from "./pages/showPage"
import PageC from "@/pages/pageC"
// import PageA from "./pages/pageA/pageA"
// import PageB from "./pages/pageB"

const PageA = React.lazy(() => import("@/pages/pageA/pageA"));
const PageB = React.lazy(() => import("@/pages/pageB"));
let obj = {
    PageA:<React.Suspense fallback={<>...</>}>
        {React.createElement(React.lazy(() => import("./pages/pageA/pageA")))}
    </React.Suspense>,
    PageB:<React.Suspense fallback={<>...</>}>
        {React.createElement(React.lazy(() => import("./pages/pageB")))}
    </React.Suspense>,
}


function App() {
    let location = useLocation();
    console.log("app1",location)
    let routes: RouteObject[] = [
        { path: "/",element: <Main />,
            children: [
                {
                    index: true,
                    element: <ShowPage />,
                },
                {
                    element:obj.PageA,
                    path:"/PageA/*"
                },
                {
                    element: obj.PageB,
                    path:"/PageB/*"
                },
                { path: "/PageC", element: <PageC /> },
            ]
        },
        {
            path: "/login",
            element: <Login />,

        },
        { path: "*", element: <NotFind /> },
    ];
    const element = useRoutes(routes);
  return (
      <div className="App">
          {element}
      </div>
  );
}

export default App;
