import { Link, NavLink } from "react-router-dom";
import NavCart from "./NavCart";

const navActiveStyles = ({ isActive }) =>
    isActive ? "border-b-2 border-blue-900" : "";

const Navbar = () => {
    return (
        <nav className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 p-8 shadow-md">
            <div
                data-name="logo"
                className="sm:mr-auto  text-4xl font-extrabold "
            >
                <Link to="/">
                    Osiris
                    <span className=" text-blue-900"> Outlet</span>
                </Link>
            </div>
            <div className="flex items-center gap-4 text-lg font-semibold">
                <NavLink to="/" className={navActiveStyles}>
                    Home
                </NavLink>
                <NavLink to="shop" className={navActiveStyles}>
                    Shop
                </NavLink>
                <NavLink to="About" className={navActiveStyles}>
                    About Us
                </NavLink>
                <NavCart />
            </div>
        </nav>
    );
};

export default Navbar;
