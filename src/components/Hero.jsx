import {ArrowRight, SearchIcon} from "lucide-react";


function Hero({searchTerm, setSearchTerm}) {
    return (
        <>
            <h1>Navigate Technology With Confidence</h1>
            <p className="hero-subtitle">Whether you're just setting sail or charting uncharted waters, we'll guide you
                through — no jargon, no judgment, just clear directions.</p>
            <div className="search-container">
                <div className="search-input-wrapper">
                    <SearchIcon />
                    <input
                        type="search"
                        className="search-input"
                        placeholder="What do you need help with?"
                        value={searchTerm}
                        onChange={ e => setSearchTerm(e.target.value)}
                        aria-label="Search for tech topics"
                    />
                </div>
                <button className="search-button" type="button">
                    Set Course
                    <ArrowRight />
                </button>
            </div>
        </>
    )
}

export default Hero;