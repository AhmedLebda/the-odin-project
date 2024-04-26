import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ShopLayout from "./pages/shop/ShopLayout";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";

const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "shop",
                element: <ShopLayout />,
            },
            {
                path: "shop/:id",
                element: <Product />,
            },
            {
                path: "checkout",
                element: <Checkout />,
            },
        ],
    },
];

export default routes;
