import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layout/MainLayouts";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Signin from "../Pages/SignIn/Signin";
import SignUp from "../Pages/SingUp.jsx/SignUp";
import Profile from "../Pages/Profile.jsx/Profile";
import AllContest from "../Pages/AllContest/AllContest";
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
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/all-contest',
                element:<AllContest></AllContest>
            },
        ]
    }
])