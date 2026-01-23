import {CompassIcon, SunIcon, MoonIcon, Menu} from "lucide-react";
import {Link} from "react-router-dom";
import {useTheme} from "./ThemeContext.jsx";
import {HashLink} from "react-router-hash-link";
import {useState} from "react";

const Header = () => {
	const {darkMode, setDarkMode} = useTheme();
	const [menuVisible, setMenuVisible] = useState(false);

	const menuButtonClick = () => {
		if (window.innerWidth < 780) {
			setMenuVisible(!menuVisible);
		}
	};

	return (
		<header className="header">
			<nav className="nav">
				<Link to={"/"} className="logo">
					<CompassIcon className="logo-icon" size={32}/>
					<span>TechCompass</span>
				</Link>
				<ul className={`nav-links`}>
					<li><HashLink smooth to="/#categories">Chart Your Course</HashLink></li>
					<li><HashLink smooth to="/#about">About</HashLink></li>
					<li>
						<button className="theme-toggle" onClick={() => {
							setDarkMode(!darkMode);
						}} aria-label="Toggle dark mode">
							{darkMode ? <SunIcon/> : <MoonIcon/>}
						</button>
					</li>
				</ul>
				<button className="theme-toggle mobile" onClick={() => {
					setDarkMode(!darkMode);
				}} aria-label="Toggle dark mode">
					{darkMode ? <SunIcon/> : <MoonIcon/>}
				</button>
				<Menu className="menu-logo" onClick={menuButtonClick}/>
			</nav>
			<div className={`nav-links-mobile ${menuVisible ? "visible" : ""}`}>
				<ul className={`nav-links ${menuVisible ? "visible" : ""}`}>
					<li><HashLink smooth to="/#categories">Chart Your Course</HashLink></li>
					<li><HashLink smooth to="/#about">About</HashLink></li>
				</ul>
			</div>
		</header>
	);
};

export default Header;