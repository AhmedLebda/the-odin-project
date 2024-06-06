import Button from "@mui/material/Button";
import { NavLink, Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { fetchProtectedRoute_post } from "../api/fetchProtectedRoute";
import { Navigate } from "react-router-dom";

const NavBar = () => {
    const { user, dispatch } = useAuthContext();
    const handleLogout = async () => {
        try {
            const response = await fetchProtectedRoute_post(
                "http://localhost:3000/api/auth/logout",
                user.token
            );
            if (response.msg) {
                dispatch({ type: "LOGOUT" });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <header className="py-4 px-6 flex justify-between items-center shadow-md ">
            {!user && <Navigate to="/sign-in" replace={true} />}
            <Link to="/" className="font-bold text-3xl">
                Blog
            </Link>
            <nav className="flex gap-4">
                {user ? (
                    <Button variant="contained" onClick={handleLogout}>
                        logout
                    </Button>
                ) : (
                    <>
                        <NavLink to="/sign-in">Login</NavLink>
                        <NavLink to="/sign-up">Signup</NavLink>
                    </>
                )}
            </nav>
        </header>
    );
};

export default NavBar;
