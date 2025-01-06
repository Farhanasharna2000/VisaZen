import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Components/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ForgetPassword from "../Components/ForgetPassword/ForgetPassword";
import Error from "../Components/Error/Error";
import AllVisas from "../Components/AllVisas/AllVisas";
import AddVisa from "../Components/AddVisa/AddVisa";
import MyAddedVisas from "../Components/MyAddedVisas/MyAddedVisas";
import MyVisaApplications from "../Components/MyVisaApplications/MyVisaApplications";
import VisaDetails from "../Components/VisaDetails/VisaDetails";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,

      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/all-visas",
        element: 
          <AllVisas />,
        loader: () => fetch("https://visazen-server.vercel.app/visaData")
      },
      {
        path: "/visa-details/:id",
        element:<VisaDetails />,
      
      },
      {
        path: "/add-visa",
        element: <AddVisa />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/my-added-visas",
        element: <MyAddedVisas />,
      },
      
  {
    path: "/my-visa-applications",
    element: <MyVisaApplications />,
  },
  {
    path: "/register",
    element: <Register />,

  },
    ]
  },

  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },

  {
    path: "*",
    element: <Error />,
  },
]);

export default router;