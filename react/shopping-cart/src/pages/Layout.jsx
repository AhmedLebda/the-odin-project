import { Outlet } from "react-router-dom";
import Navbar from "../components/custom/Navbar";
import Footer from "../components/custom/Footer";
const Layout = () => {
    return (
        <div className="grid grid-rows-layout min-h-screen">
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Layout;
