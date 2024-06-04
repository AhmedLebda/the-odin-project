import MainLayout from "./pages/layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/404";
import SignUp from "./pages/user/SignUp";
import SignIn from "./pages/user/SignIn";
const routes = [
    {
        path: "/",
        element: <MainLayout />,
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
                path: "sign-up",
                element: <SignUp />,
            },
            {
                path: "sign-in",
                element: <SignIn />,
            },
        ],
    },
];

export default routes;
