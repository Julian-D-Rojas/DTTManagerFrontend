import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../layout/layout"
import { Error } from "../pages/Error"
import { Home } from "../pages/home"
import { Information } from "../pages/Information"

export const router = createBrowserRouter([{
    element: <Layout />,
    errorElement: <Error />,
    children: [{ path: `/`, element: <Home /> }, { path: `/information`, element: <Information /> }],
}]) 