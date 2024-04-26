import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <h1>NavBar Layout.....</h1>
            <Outlet></Outlet>
            <h2>Footer Layout...</h2>
        </div>
    );
};

export default Layout;
