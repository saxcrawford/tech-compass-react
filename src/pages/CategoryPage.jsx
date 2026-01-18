import { useParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const CategoryPage = () => {
    const {categoryId} = useParams();

    return (
        <div className="app">
            <Header />
            <main>
                <h1>Category: {categoryId}</h1>
                <p>Tutorials will go here!</p>
            </main>
            <Footer />
        </div>
    );
}

export default CategoryPage;