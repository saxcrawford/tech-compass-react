import {Link, useParams} from "react-router-dom";
import tutorialsData from "../data/tutorialsData.js";

const TutorialPage = () => {
	const {tutorialId} = useParams();
	const tutorial = tutorialsData.find(item => item.id === Number(tutorialId));

	return (
		<main className="tutorial-page">
			{!tutorial ? (
				<p>Tutorial not found</p>
			) : (
				<article className="tutorial-content">
                  <span className={`difficulty-badge ${tutorial.difficultyLevel.toLowerCase().replace(/ /g, "-")}`}>
                      {tutorial.difficultyLevel}
                  </span>
					<h1 className="tutorial-title">{tutorial.title}</h1>
					<p className="tutorial-description">{tutorial.description}</p>
					<Link
						to={`/category/${tutorial.category.toLowerCase().replace(/ /g, "-")}`}
						className="tutorial-meta-link"
					>
						Category: {tutorial.category}
					</Link>
					<div className="tutorial-body">
						{tutorial.sections ? (
							tutorial.sections.map((section, index) => (
								<section key={index} className="tutorial-section">
									<h2>{section.heading}</h2>
									<p>{section.content}</p>
								</section>
							))
						) : (
							<p>{tutorial.content}</p>
						)}
					</div>
				</article>
			)}
		</main>
	);
};

export default TutorialPage;