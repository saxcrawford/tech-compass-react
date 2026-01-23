import {Link} from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className="app">
			<main style={{textAlign: "center", padding: "4rem 1rem"}}>
				<h1>404 - Lost at Sea</h1>
				<p>This page doesn't exist.</p>
				<Link to="/">Return to Homepage</Link>
			</main>
		</div>
	);
};

export default NotFoundPage;