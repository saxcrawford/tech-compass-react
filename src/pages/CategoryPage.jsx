import {Link, useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import tutorialsData from "../data/tutorialsData.js";
import {useTheme} from "../components/ThemeContext.jsx";

const CategoryPage = () => {
    const {categoryId} = useParams();
    const {darkMode} = useTheme();
    const filteredTutorials = tutorialsData.filter(
        item => item.category.toLowerCase().replace(/ /g, '-') === categoryId
    );

    return (
        <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
            <Header />
            <main className="category-page">
                {filteredTutorials.length > 0 ? (
                    <>
                        <h1 className="category-title">{filteredTutorials[0].category}</h1>
                        <div className="tutorial-list">
                            {filteredTutorials.map(tutorialItem => (
                                <Link key={tutorialItem.id} to={`/tutorial/${tutorialItem.id}`} className="tutorial-card">
                                    <div className="tutorial-card-content">
                              <span className={`difficulty-badge ${tutorialItem.difficultyLevel.toLowerCase().replace(/ /g, '-')}`}>
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
            <Footer />
        </div>
    );
}

export default CategoryPage;