import { Outlet } from "react-router-dom";
import Navbar from "../components/custom/Navbar";
import Footer from "../components/custom/Footer";
import CartContextProvider from "../contexts/CartContextProvider";
const Layout = () => {
    return (
        <div className="grid grid-rows-layout min-h-screen">
            <CartContextProvider>
                <Navbar />
                <Outlet></Outlet>
            </CartContextProvider>
            <Footer />
        </div>
    );
};

export default Layout;
