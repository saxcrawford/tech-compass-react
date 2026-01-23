import {Anchor, Map, Users} from "lucide-react";

const About = () => {
	return (
		<div className="about-content">
			<h2>Why Tech Compass?</h2>
			<p>Technology should empower everyone, not leave them lost at sea. No matter the person,
				Tech Compass is here to help.</p>

			<div className="features">
				<div className="feature">
					<Anchor className="feature-icon"/>
					<span>No confusing jargon</span>
				</div>
				<div className="feature">
					<Map className="feature-icon"/>
					<span>Step-by-step guides</span>
				</div>
				<div className="feature">
					<Users className="feature-icon"/>
					<span>All experience levels</span>
				</div>
			</div>
		</div>
	);
};

export default About;