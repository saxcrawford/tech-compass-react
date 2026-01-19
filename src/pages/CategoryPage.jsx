import {Link, useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import tutorialsData from "../data/tutorialsData.js";

const CategoryPage = () => {
    const {categoryId} = useParams();
    const filteredTutorials = tutorialsData.filter(
        item => item.category.toLowerCase().replace(/ /g, '-') === categoryId
    );

    return (
        <div className="app">
            <Header />
            <main>
                {filteredTutorials.length > 0 ? (
                    <>
                        <h1>{filteredTutorials[0].category}</h1>
                        {filteredTutorials.map(tutorialItem => (
                                <Link to={`/tutorial/${tutorialItem.id}`} key={tutorialItem.id}>
                                    <div>
                                        <h2>{tutorialItem.title}</h2>
                                        <p>{tutorialItem.description}</p>
                                    </div>
                                </Link>
                            ))}
                    </>
                ) : (
                    <p>No tutorials found</p>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default CategoryPage;