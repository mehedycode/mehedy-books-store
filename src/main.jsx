import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Layout from './components/Layout/Layout';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
import BookDetails from './components/BookDetails/BookDetails';
import ReadWishlist from './components/ReadWishlist/ReadWishlist';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children:[
      {
     path: '/',
     element: <Home></Home>
      },
      {
        path: '/readsBook',
        element: <ReadWishlist></ReadWishlist>
      },
      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>
      },
      {
        path: '/books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('/Books.json')
        
      },
    ]
    
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
