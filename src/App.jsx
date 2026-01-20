import './App.css'
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import TutorialPage from "./pages/TutorialPage.jsx";
import Header from "./components/Header.jsx";

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/category/:categoryId' element={<CategoryPage/>}/>
            <Route path='/tutorial/:tutorialId' element={<TutorialPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
            <Route path='/#categories' element={<HomePage/>}/>
            <Route path='/#about' element={<HomePage/>}/>
        </Routes>
    )
}

export default App