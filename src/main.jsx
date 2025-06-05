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
import UserRoomForm from "./Pages/UserRoomForm";
import MyListing from "./Pages/MyListing";
import BrowseListing from "./Pages/BrowseListing";
import SingleRoom from "./Pages/SingleRoom";
import UpdateRoomData from "./Pages/UpdateRoomData";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import ProtectedRoute from "./Components/PrivateRoute/ProtectedRoute";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:()=>fetch('https://room-mate-finder-server.onrender.com/useraddedroom/availiable')

      },
      {
        path:'/login',
        element:<Login/>

      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/userroomform',
        element:<ProtectedRoute><UserRoomForm/></ProtectedRoute> 
      },
      {
        path:'/mylisting/:email',
        element:<ProtectedRoute><MyListing/></ProtectedRoute>,
        loader:({params})=>fetch(`https://room-mate-finder-server.onrender.com/mylisting/${params.email}`)
      },
      {
        path:'/browseListing',
        element:<BrowseListing/>,
       loader:()=>fetch(`https://room-mate-finder-server.onrender.com/useraddedroom`)
      },
      {
        path:'/browseListing/:id',
        element:<ProtectedRoute><SingleRoom/></ProtectedRoute>,
        loader:({params})=>fetch(`https://room-mate-finder-server.onrender.com/useraddedroom/${params.id}`)
      },
      {
        path:'/mylisting/update-room-data/:id',
        element:<ProtectedRoute><UpdateRoomData/></ProtectedRoute>,
        loader:({params})=>fetch(`https://room-mate-finder-server.onrender.com/useraddedroom/${params.id}`)


      }
      

    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
<>
  <AuthProvider>
  <RouterProvider router={router} />
  <Toaster/>


  </AuthProvider>
  </>

);