import React from 'react';
import { useLocation,Routes, Route, Outlet, Link } from "react-router-dom";
// @ts-ignore
const PageBchildrenA = React.lazy(() => import("../../components/pageBchildrenA"))
const PageBchildrenB = React.lazy(() => import("../../components/PageBchildrenB"))
interface props {

}

const Index = function () {
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
                        <Link to="/PageB">Dashboard Home</Link>
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

export default Index
