import { Link, NavLink } from "react-router-dom";
import NavDropdown from "./NavDropdown";
import ShoppingCart from "./cart/ShoppingCart";

const navActiveStyles = ({ isActive }) =>
    isActive ? "border-b-2 border-blue-900" : "";

const Navbar = () => {
    return (
        <nav className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 p-8 shadow-md">
            <div
                data-name="logo"
                className="sm:mr-auto  text-4xl font-extrabold "
            >
                <Link to="/">
                    Osiris
                    <span className=" text-blue-900"> Outlet</span>
                </Link>
            </div>
            <div className="flex items-center gap-10 text-lg font-semibold">
                <NavLink to="/" className={navActiveStyles}>
                    Home
                </NavLink>

                <NavDropdown />
                <NavLink to="About" className={navActiveStyles}>
                    About Us
                </NavLink>
                <ShoppingCart />
            </div>
        </nav>
    );
};

export default Navbar;
