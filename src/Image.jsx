import {useState} from 'react'

export function Image(props) {
    const [count, setcount] = useState(0)
    const changeCount = () => {  
        setcount(count + 1)
    }
    return (
        <>
            <p className="count-test" alt="" />
            <button className="button-count" onClick={changeCount}>Clicked {count} times</button>
        </>
    )
}