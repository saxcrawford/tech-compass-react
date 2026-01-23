import "./App.css";
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import TutorialPage from "./pages/TutorialPage.jsx";
import Layout from "./components/Layout.jsx";

const App = () => {
	return (
		<Routes>
			<Route element={<Layout/>}>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/category/:categoryId" element={<CategoryPage/>}/>
				<Route path="/tutorial/:tutorialId" element={<TutorialPage/>}/>
				<Route path="*" element={<NotFoundPage/>}/>
				<Route path="/#categories" element={<HomePage/>}/>
				<Route path="/#about" element={<HomePage/>}/>
			</Route>
		</Routes>
	);
};

export default App;