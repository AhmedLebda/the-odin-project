import { Outlet } from "react-router-dom";
import Navbar from "../components/custom/Navbar";
const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Outlet></Outlet>
            <h2>Footer Layout...</h2>
        </div>
    );
};

export default Layout;
