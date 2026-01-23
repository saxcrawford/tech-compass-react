import {CompassIcon} from "lucide-react";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<CompassIcon className="footer-icon"/>
				<p>&copy; 2025 Tech Compass. Helping everyone navigate technology.</p>
			</div>
		</footer>
	);
};

export default Footer;