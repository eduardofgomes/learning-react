import {useState} from 'react';


const List = () => {
    let superHeroes = [
        'Batman',
        'Superman',
        'Flash'
    ]
    const [selected, setSelected] = useState()

    return (
        <>
            <h1>Super heroes</h1>
            {superHeroes.length === 0 && <p>No super hero found</p>}
            <ul className="list">
                {superHeroes.map((hero, index) => (
                    <li
                        key={hero}   
                        onClick={() => {
                            setSelected(index), console.log(selected)
                        }}
                    >
                        {hero}{selected}
                    </li>
                    ))}
            </ul>
        </>
    )
}

export default List;