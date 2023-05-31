const List = () => {
    const superheroes = [
        'Batman',
        'Superman',
        'Flash'
    ]
    return (
        <>
            <h1>Super heroes</h1>
            <ul className="list">
                {superheroes.map(hero => <li key={hero}>{hero}</li>)}
            </ul>
        </>
    )
}

export default List;