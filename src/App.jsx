import './App.css'
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/category/:categoryId' element={<CategoryPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default App