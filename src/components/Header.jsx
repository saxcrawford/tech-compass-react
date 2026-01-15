import {CompassIcon, SunIcon, MoonIcon} from "lucide-react";

function Header({darkMode, setDarkMode}) {
    return (
        <header className="header">
            <nav className="nav">
                <a href="#" className="logo">
                    <CompassIcon className="logo-icon" size={32}/>
                    <span>TechCompass</span>
                </a>
                <ul className="nav-links">
                    <li><a href="#categories">Chart Your Course</a></li>
                    <li><a href="#about">About</a></li>
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