import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./components/Homepage";
import NavBar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Products from "./components/Products";
import Landing from "./components/Landing";
import Register from "./components/Register";

const appElement = document.getElementById('app');
const root = createRoot(appElement);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "about",
                element: <About />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "home",
                element: <Landing />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
])

root.render(<RouterProvider router = {router} />);