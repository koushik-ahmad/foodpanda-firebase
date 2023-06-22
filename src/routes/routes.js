import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Login from "../components/Login";
import Signup from "../components/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/feature',
                element: <Feature></Feature>
            },
            {
                path: '/pricing',
                element: <Pricing></Pricing>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    }
])

export default router;