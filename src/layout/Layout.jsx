import { Outlet } from "react-router-dom"
export const Layout = () => {
    return (
        <>
            <header>TDT</header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>2024</p>
            </footer>
        </>
    )
}
