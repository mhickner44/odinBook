import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import App from "../App";
import LoginPage from "./Login.jsx";
import ProfilePage from "../pages/ProfilePage.jsx"
import SignUp from "./SignUp.jsx";
import Feed from "../pages/Feed.jsx"
import PostCreate from "../components/PostCreate"
import FriendReq from "../pages/friendReq"
import PostPage from "../pages/PostPage"
import UserList from "../pages/UserList"
import PrivateRoutes from "./PrivateRoutes"
import Login from "./Login.jsx";




const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <PrivateRoutes />,
            children: [
                { index: true, element: <Feed /> },
                {
                    path: "profilePage/:id", element: <ProfilePage />
                },
                { path: "profilePage", element: <ProfilePage /> },
                { path: "Feed", element: <Feed /> },
                { path: "components/PostCreate", element: <PostCreate /> },
                { path: "FriendRequests", element: <FriendReq /> },
                { path: "FriendRequests", element: <UserList /> },
                { path: "PostPage/:id", element: <PostPage /> },
            ]
        },{
            path: "/Login",
            element: <Login />,
        },
        {
            path: "/Signup",
            element: <SignUp />,
        }
    ]);

    return <RouterProvider router={router} />;
};

export default Router;