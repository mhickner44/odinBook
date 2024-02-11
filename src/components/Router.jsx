import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import LoginPage from "./Login.jsx";
import ProfilePage from "./Profile.jsx"

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />
          
        }, {
            path:"/login",
            element: <LoginPage/>
        },
        {
            path:"/profile",
            element: <ProfilePage/>
        }

    ]);

    return <RouterProvider router={router} />;
};

export default Router;