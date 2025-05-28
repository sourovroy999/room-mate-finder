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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut/>,
    errorElement:<ErrorPage/>,
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
      },
      {
        path:'/userroomform',
        element:<UserRoomForm/>
      },
      {
        path:'/mylisting/:email',
        element:<MyListing/>,
        loader:({params})=>fetch(`http://localhost:5000/mylisting/${params.email}`)
      },
      {
        path:'/browseListing',
        element:<BrowseListing/>,
       loader:()=>fetch(`http://localhost:5000/useraddedroom`)
      },
      {
        path:'/browseListing/:id',
        element:<SingleRoom/>,
        loader:({params})=>fetch(`http://localhost:5000/useraddedroom/${params.id}`)
      },
      {
        path:'/mylisting/update-room-data/:id',
        element:<UpdateRoomData/>,
        loader:({params})=>fetch(`http://localhost:5000/useraddedroom/${params.id}`)


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