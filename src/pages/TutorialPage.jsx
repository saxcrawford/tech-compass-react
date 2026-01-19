import {useParams} from "react-router-dom";
import tutorialsData from "../data/tutorialsData.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const TutorialPage = () => {
    const {tutorialId} = useParams();
    const tutorial = tutorialsData.find(item => item.id === Number(tutorialId));

    return (
        <div className="app">
            <Header />
            <main>
                {!tutorial ? (
                    <p>Tutorial not found</p>
                ) : (
                    <>
                        <h1>{tutorial.title}</h1>
                        <h3>{tutorial.description}</h3>
                        <p>{tutorial.category}</p>
                        <p>{tutorial.difficultyLevel}</p>
                        <p>{tutorial.content}</p>
                    </>
                )}
            </main>
            <Footer />
        </div>
    )
}

export default TutorialPage;