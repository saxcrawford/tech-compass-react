import {CompassIcon, SunIcon, MoonIcon} from "lucide-react";

function Header() {
    return (
        <header>
            <CompassIcon size={32}/><span>TechCompass</span>
            <ul className="nav-links">
                <li><a href="#categories">Chart Your Course</a></li>
                <li><a href="#about">About</a></li>
                <li>
                    <button className="theme-toggle" aria-label="Toggle dark mode">
                        <SunIcon />
                        <MoonIcon />
                    </button>
                </li>
            </ul>
        </header>
    )
}

export default Header;