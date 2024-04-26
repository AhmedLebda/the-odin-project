import { Outlet } from "react-router-dom";
import Navbar from "../components/custom/Navbar";
import Footer from "../components/custom/Footer";
const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Layout;
