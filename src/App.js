import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar';
import CardsSection from './components/CardsSection';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import CustomRouteError from './components/CustomRouteError';
import RestInfo from './components/RestInfo';
import RestInfoApi from './components/RestInfoApi';
import CardsSectionApi from './components/CardsSectionApi.js';
// import Grocery from "./components/Grocery.js"    **Not this**

const Grocery = lazy(()=> import("./components/Grocery.js"))    //use lazy() to import Component 'dymanically when needed'
// AppLayout Component
const AppLayout = () => {
  return (
    <div className="appLayout">
      <NavBar />
      {/* The Outlet component will render the matched child route */}
      <Outlet />
    </div>
  );
};

// Define routes using createBrowserRouter
const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Main layout with NavBar
    children: [
      {
        path: "/",
        element: <CardsSection />,
        // element: <CardsSectionApi />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        //Suspense shows a fallback UI while a lazily loaded component is being fetched.
        //(It make sure that react wait for the lazy component to be load)
        element: ( <Suspense fallback={<h1>Loading....</h1>}> 
                    <Grocery />
                  </Suspense> )
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restInfo/:resId",
        element: <RestInfo />,
        // element: <RestInfoApi />
      },
    ],
    errorElement: <CustomRouteError />, // Error page for unmatched routes
  },
]);

// Render the application using RouterProvider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
