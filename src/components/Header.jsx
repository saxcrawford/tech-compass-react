import {CompassIcon, SunIcon, MoonIcon} from "lucide-react";

function Header({darkMode, setDarkMode}) {
    return (
        <header>
            <CompassIcon size={32}/><span>TechCompass</span>
            <ul className="nav-links">
                <li><a href="#categories">Chart Your Course</a></li>
                <li><a href="#about">About</a></li>
                <li>
                    <button onClick={() => {setDarkMode(!darkMode)}} aria-label="Toggle dark mode">
                        {darkMode ? <SunIcon /> : <MoonIcon />}
                    </button>
                </li>
            </ul>
        </header>
    )
}

export default Header;