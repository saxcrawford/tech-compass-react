import './App.css'
import {useState} from "react";
import Header from "./components/Header.jsx";
import CategoryCard from "./components/CategoryCard.jsx";
import {Cpu, Globe, Monitor, Shield, Smartphone, Wrench} from "lucide-react";

function App() {
    const [searchItem, setSearchTerm] = useState('');
    const categories = [
        { id: 1, title: 'Internet Basics', description: 'Wi-Fi, browsers, email, and staying safe online', icon: Globe, difficulty: 'Calm Waters' },
        { id: 2, title: 'Computer Fundamentals', description: 'Hardware, software, files, and everyday tasks', icon: Monitor, difficulty: 'Calm Waters' },
        { id: 3, title: 'Smartphones & Tablets', description: 'Apps, settings, photos, and mobile tips', icon: Smartphone, difficulty: 'Calm Waters' },
        { id: 4, title: 'Setup & Installation', description: 'Setting up devices, software, and accounts', icon: Wrench, difficulty: 'Open Seas' },
        { id: 5, title: 'Security & Privacy', description: 'Passwords, scams, viruses, and protecting yourself', icon: Shield, difficulty: 'Open Seas' },
        { id: 6, title: 'Advanced Topics', description: 'BIOS, networking, building PCs, and more', icon: Cpu, difficulty: 'Uncharted Waters' },
    ]

    return (
        <>
            <Header />
            <div className="app">
                <h1>Tech Compass</h1>
                <p>React version coming soon...</p>
                {categories.map(category => (
                    <CategoryCard
                        key={category.id}
                        title={category.title}
                        description={category.description}
                        icon={category.icon}
                        difficulty={category.difficulty}
                    />
                ))}
            </div>
        </>
    )
}

export default App