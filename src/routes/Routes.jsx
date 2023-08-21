import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import BookServices from "../pages/BookService/BookServices";
import Bookings from "../pages/BookService/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'bookService/:id',
                element: <BookServices></BookServices>,
                loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path: '/myBooking',
                element:<PrivateRoutes> <Bookings></Bookings></PrivateRoutes>
            }
        ]
    }
]);

export default route;