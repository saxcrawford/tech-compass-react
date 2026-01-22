import {useTheme} from "./ThemeContext.jsx";
import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";


const Layout = () => {
    const {darkMode} = useTheme()

    return (
        <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;