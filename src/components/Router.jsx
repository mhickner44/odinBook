import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import LoginPage from "./Login.jsx";
import ProfilePage from "./Profile.jsx"
import SignUp from "./SignUp.jsx";
import Feed from "../pages/Feed.jsx"
import PostCreate from "../components/PostCreate"

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
        },
        {
            path:"/SignUp",
            element: <SignUp/>
        },
        {
            path:"/Feed",
            element: <Feed/>
        },
        ,
        {
            path:"components/PostCreate",
            element: <PostCreate/>
        }
    ]);

    return <RouterProvider router={router} />;
};

export default Router;