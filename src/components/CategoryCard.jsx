import {Link} from "react-router-dom";

const CategoryCard = (category) => {
	const categoryId = category.title.toLowerCase().replace(/\s+/g, "-");
	const difficultyClass = category.difficulty.toLowerCase().replace(" ", "-");
	const {icon: Icon} = category;

	return (
		<Link to={`/category/${categoryId}`} className="category-card">
			<span className={`difficulty-badge ${difficultyClass}`}>{category.difficulty}</span>
			<div className="category-icon">
				<Icon size={28}/>
			</div>
			<h3>{category.title}</h3>
			<p>{category.description}</p>
		</Link>
	);
};

export default CategoryCard;