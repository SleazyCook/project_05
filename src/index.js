import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./components/App";
import NavBar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Products from "./components/Products";
import Register from "./components/Register";
import Details from "./components/Details";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login"

const appElement = document.getElementById('app');
const root = createRoot(appElement);


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "products/:id",
                element: <Details />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    }
])


root.render(<RouterProvider router = {router} />);