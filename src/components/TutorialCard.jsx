import {Link} from "react-router-dom";

const TutorialCard = ({id, title, description}) => {
    return (
        <Link to={`/tutorial/${id}`} className='category-card'>
            <h3>{title}</h3>
            <p>{description}</p>
        </Link>
    )
}

export default TutorialCard;