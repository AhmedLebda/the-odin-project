import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

import AuthContextProvider from "./contexts/AuthContext";

const router = createBrowserRouter(routes);

function App() {
    return (
        <AuthContextProvider>
            <RouterProvider router={router} />
        </AuthContextProvider>
    );
}

export default App;
