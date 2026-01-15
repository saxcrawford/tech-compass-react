import './App.css'
import {useState, useEffect} from "react";
import Header from "./components/Header.jsx";
import CategoryCard from "./components/CategoryCard.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import {Cpu, Globe, Monitor, Shield, Smartphone, Wrench} from "lucide-react";

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('dark-mode') === 'dark'
    });
    useEffect(() => {
        localStorage.setItem('dark-mode', darkMode ? 'dark' : 'light');
    }, [darkMode]);
    const categories = [
        { id: 1, title: 'Internet Basics', description: 'Wi-Fi, browsers, email, and staying safe online', icon: Globe, difficulty: 'Calm Waters' },
        { id: 2, title: 'Computer Fundamentals', description: 'Hardware, software, files, and everyday tasks', icon: Monitor, difficulty: 'Calm Waters' },
        { id: 3, title: 'Smartphones & Tablets', description: 'Apps, settings, photos, and mobile tips', icon: Smartphone, difficulty: 'Calm Waters' },
        { id: 4, title: 'Setup & Installation', description: 'Setting up devices, software, and accounts', icon: Wrench, difficulty: 'Open Seas' },
        { id: 5, title: 'Security & Privacy', description: 'Passwords, scams, viruses, and protecting yourself', icon: Shield, difficulty: 'Open Seas' },
        { id: 6, title: 'Advanced Topics', description: 'BIOS, networking, building PCs, and more', icon: Cpu, difficulty: 'Uncharted Waters' },
    ]
    const filteredCategories = categories.filter(category =>
        category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <>
            <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
                <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
                <section className='hero'>
                    <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                </section>
                <section className='categories'>
                    <h2 className='section-title'>Chart Your Course</h2>
                    <p className='section-subtitle'>Choose a heading to begin your voyage</p>
                    <div className='category-grid'>
                        {filteredCategories.map(category => (
                            <CategoryCard
                                key={category.id}
                                title={category.title}
                                description={category.description}
                                icon={category.icon}
                                difficulty={category.difficulty}
                            />
                        ))}
                    </div>
                    {filteredCategories.length === 0 && <p>No categories found</p>}
                </section>
                <section className='about'>
                    <About />
                </section>
                <Footer />
            </div>
        </>
    )
}

export default App