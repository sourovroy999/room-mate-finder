import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import './index.css'


import ReactDOM from "react-dom/client";
import MainLayOut from "./Components/MainLayOut.jsx/MainLayOut";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AuthProvider from "./Provider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>

      },
      {
        path:'/register',
        element:<Register/>
      }

    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(

  <AuthProvider>
  <RouterProvider router={router} />

  </AuthProvider>

);