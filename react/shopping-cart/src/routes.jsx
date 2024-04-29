import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/shop/Shop";
import { loader as shopLoader } from "./pages/shop/Shop.loader";
import ProductOverview from "./pages/ProductOverview";
import { loader as productOverviewLoader } from "./pages/ProductOverview.loader";
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
                element: <Shop />,
                loader: shopLoader,
            },
            {
                path: "shop/:id",
                element: <ProductOverview />,
                loader: productOverviewLoader,
            },

            {
                path: "checkout",
                element: <Checkout />,
            },
        ],
    },
];

export default routes;
