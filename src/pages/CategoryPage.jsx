import {Link, useParams} from "react-router-dom";
import tutorialsData from "../data/tutorialsData.js";

const CategoryPage = () => {
	const {categoryId} = useParams();
	const filteredTutorials = tutorialsData.filter(
		item => item.category.toLowerCase().replace(/ /g, "-") === categoryId
	);

	return (
		<main className="category-page">
			{filteredTutorials.length > 0 ? (
				<>
					<h1 className="category-title">{filteredTutorials[0].category}</h1>
					<div className="tutorial-list">
						{filteredTutorials.map(tutorialItem => (
							<Link key={tutorialItem.id} to={`/tutorial/${tutorialItem.id}`} className="tutorial-card">
								<div className="tutorial-card-content">
                          <span
	                          className={`difficulty-badge ${tutorialItem.difficultyLevel.toLowerCase().replace(/ /g, "-")}`}>
                              {tutorialItem.difficultyLevel}
                          </span>
									<h2>{tutorialItem.title}</h2>
									<p>{tutorialItem.description}</p>
								</div>
							</Link>
						))}
					</div>
				</>
			) : (
				<div className="no-results">
					<p>No tutorials found in this category</p>
				</div>
			)}
		</main>
	);
};

export default CategoryPage;