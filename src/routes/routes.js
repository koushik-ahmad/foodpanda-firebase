import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Login from "../components/Login";
import Signup from "../components/Signup";
import ErrorPage from "../components/ErrorPage";
import Profile from "../components/Profile";
import Cart from "../components/Cart";
import Order from "../components/Order";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRoute><Pricing></Pricing></PrivateRoute>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: '/order',
                element: <PrivateRoute><Order></Order></PrivateRoute>
            },
        ]
    }
])

export default router;