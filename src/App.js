import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import CardsSection from "./components/CardsSection";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import CustomRouteError from "./components/CustomRouteError";
import RestInfo from "./components/RestInfo";
import RestInfoApi from "./components/RestInfoApi";
import CardsSectionApi from "./components/CardsSectionApi.js";
import userContext from "./utils/UserContext.js";
//redux
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
// import Grocery from "./components/Grocery.js"    **Not this**

const Grocery = lazy(() => import("./components/Grocery.js")); //use lazy() to import Component 'dymanically when needed'

const AppLayout = () => {
  const userData = useContext(userContext);
  const [nameState, setNameState] = useState(userData.userName);
  const [ageState, setAgeState] = useState(userData.userAge);

  useEffect(() => {
    const data = {
      nameData: "Vinit",
      ageData: "20",
    };
    setNameState(data.nameData);
    setAgeState(data.ageData);
  }, []);

  // const {userName, userAge} = useContext(userContext);

  return (
    <Provider store={appStore}>
      <userContext.Provider
        value={{ userName: nameState, userAge: ageState, setNameState }}
      >
        <div className="appLayout">
          {/* <userContext.Provider value={{userName: "Elon Musk", userAge: "45"}}> */}
          <NavBar />
          {/* </userContext.Provider>      */}
          {/* The Outlet component will render the matched child route */}
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
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
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <CustomRouteError />, // Error page for unmatched routes
  },
]);

// Render the application using RouterProvider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
