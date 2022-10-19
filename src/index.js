import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./components/Homepage";
import NavBar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Products from "./components/Products";
import Register from "./components/Register";
import Details from "./components/Details";
import Index from "./components/Index";

const appElement = document.getElementById('app');
const root = createRoot(appElement);


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Index />
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
            }
        ]
    }
])


root.render(<RouterProvider router = {router} />);