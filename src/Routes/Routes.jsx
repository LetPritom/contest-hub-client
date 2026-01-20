import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layout/MainLayouts";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Signin from "../Pages/SignIn/Signin";
import SignUp from "../Pages/SingUp.jsx/SignUp";
import Profile from "../Pages/Profile.jsx/Profile";
import AllContest from "../Pages/AllContest/AllContest";
import DashboardLayout from "../Layout/DashboardLayout";
import ContestDetails from "../Pages/ContestDetails/ContestDetails";
import Private from "../Private/Private";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyParticipatedContests from "../Pages/Dashboard/Users/MyParticipatedContests";
import AddContest from "../Pages/Dashboard/Seller/AddContest";
import MyCreateContestPage from "../Pages/Dashboard/Seller/MyCreateContestPage";
import SubmittedTasksPage from "../Pages/Dashboard/Seller/SubmittedTasksPage";

import ManageContest from "../Pages/Dashboard/Admin/ManageContest";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import MyWinningContests from "../Pages/Dashboard/Users/MyWinningContests";
import EditContestPage from "../Pages/Dashboard/Seller/Editcontestpage";
import PaymentSuccess from "../Pages/Pyment/PaymentSuccess";
import About from "../Components/About/About";
import Stories from "../Components/Stories/Stories";
import Leaderboard from "../Components/Leaderboard/Leaderboard";
import PrivateCreator from "../Private/PrivateCreator";
import AdminCreator from "../Private/AdminCreator";
import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/all-contest",
        element: <AllContest></AllContest>,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard></Leaderboard>,
      },
      {
        path: "/policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/stories",
        element: <Stories></Stories>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/payment-success",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/detail-contest/:id",
        element: <ContestDetails></ContestDetails>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <Private>
        <DashboardLayout></DashboardLayout>
      </Private>
    ),
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>,
      },
      {
        path: "my-participate",
        element: <MyParticipatedContests></MyParticipatedContests>,
      },
      {
        path: "my-profile",
        element: <Profile></Profile>,
      },
      {
        path: "my-winning",
        element: <MyWinningContests></MyWinningContests>,
      },
      {
        path: "add-Contest",
        element: (
          <PrivateCreator>
            <AddContest></AddContest>
          </PrivateCreator>
        ),
      },
      {
        path: "created-Contests",
        element: (
          <PrivateCreator>
            <MyCreateContestPage></MyCreateContestPage>
          </PrivateCreator>
        ),
      },
      {
        path: "submitted-tasks/:id",
        element: (
          <PrivateCreator>
            <SubmittedTasksPage></SubmittedTasksPage>
          </PrivateCreator>
        ),
      },
      {
        path: "edit-contest/:upId",
        element: (
          <PrivateCreator>
            <EditContestPage></EditContestPage>
          </PrivateCreator>
        ),
      },
      {
        path: "manage-contest",
        element: (
          <AdminCreator>
            <ManageContest></ManageContest>
          </AdminCreator>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminCreator>
            <ManageUsers></ManageUsers>
          </AdminCreator>
        ),
      },
    ],
  },
]);
