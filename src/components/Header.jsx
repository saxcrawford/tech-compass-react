import {CompassIcon, SunIcon, MoonIcon} from "lucide-react";
import {Link} from "react-router-dom";
import {useTheme} from "./ThemeContext.jsx";
import { HashLink } from 'react-router-hash-link';

function Header() {
    const {darkMode, setDarkMode} = useTheme()
    return (
        <header className="header">
            <nav className="nav">
                <Link to={'/'} className="logo">
                    <CompassIcon className="logo-icon" size={32}/>
                    <span>TechCompass</span>
                </Link>
                <ul className="nav-links">
                    <li><HashLink smooth to='/#categories'>Chart Your Course</HashLink></li>
                    <li><HashLink smooth to='/#about'>About</HashLink></li>
                    <li>
                        <button className="theme-toggle" onClick={() => {setDarkMode(!darkMode)}} aria-label="Toggle dark mode">
                            {darkMode ? <SunIcon /> : <MoonIcon />}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;