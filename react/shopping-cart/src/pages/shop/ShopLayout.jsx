import { Outlet } from "react-router-dom";
const ShopLayout = () => {
    return (
        <div>
            <h1>shop now...</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default ShopLayout;
