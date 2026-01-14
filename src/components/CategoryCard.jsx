function CategoryCard({title, description, icon: Icon, difficulty}) {
    const difficultyClass = difficulty.toLowerCase().replace(' ', '-');

    return (
        <>
            <a href="#" className='category-card'>
                <span className={`difficulty-badge ${difficultyClass}`}>{difficulty}</span>
                <Icon size={28} />
                <h3>{title}</h3>
                <p>{description}</p>
            </a>
        </>
    )
}

export default CategoryCard;