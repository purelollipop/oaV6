import React from 'react';
import { useLocation,Routes, Route, Outlet, Link } from "react-router-dom";
const PageBchildrenA = React.lazy(() => import("../components/pageBchildrenA.tsx"))
const PageBchildrenB = React.lazy(() => import("../components/PageBchildrenB.tsx"))
interface props {

}

const PageB = function () {
    let location = useLocation();
    console.log(location)
    // return (<>pageBpageBpageBpageBpageB</>);
    return (
        <Routes>
            <Route path="/" element={<DashboardLayout />}>
                <Route index element={
                    <React.Suspense fallback={<>...</>}>
                        <PageBchildrenA />
                    </React.Suspense>
                } />
                <Route path="messages" element={
                    <React.Suspense fallback={<>...</>}>
                        <PageBchildrenB />
                    </React.Suspense>
                } />
            </Route>
        </Routes>
    );
};
function DashboardLayout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="dashboard">Dashboard Home</Link>
                    </li>
                    <li>
                        <Link to="messages">Messages</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}

export default PageB
