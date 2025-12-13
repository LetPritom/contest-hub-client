import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layout/MainLayouts";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Signin from "../Pages/SignIn/Signin";
import SignUp from "../Pages/SingUp.jsx/SignUp";
export const router = createBrowserRouter([

    {
        path: '/' ,
        element:<MainLayouts></MainLayouts>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Signin></Signin>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
        ]
    }
])