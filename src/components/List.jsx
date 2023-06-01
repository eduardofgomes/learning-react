const List = () => {
    let superHeroes = [
        'Batman',
        'Superman',
        'Flash'
    ]
    return (
        <>
            <h1>Super heroes</h1>
            {superHeroes.length === 0 && <p>No super hero found</p>}
            <ul className="list">
                {superHeroes.map(hero => <li key={hero}>{hero}</li>)}
            </ul>
        </>
    )
}

export default List;