function CategoryCard({title, description, icon: Icon, difficulty}) {
    return (
        <>
            <a href="#">
                <span>{difficulty}</span>
                <Icon size={28} />
                <h3>{title}</h3>
                <p>{description}</p>
            </a>
        </>
    )
}

export default CategoryCard;