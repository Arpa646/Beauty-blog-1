import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from './Componant/Layout/Layout.jsx';
import Home from './Componant/pages/Home/Home.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import PostDetails from './Componant/pages/Home/Pots/PostDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/details/:id",
        element: <PostDetails></PostDetails>,

      //  loader:() => fetch('Post.json')
      loader: () => fetch(`/Post.json`)

      }
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
