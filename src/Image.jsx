import {useState} from 'react'

export function Image(props) {
    const [img, setImg] = useState("https://picsum.photos/600")
    const changeImg = () => {  
        setImg("https://picsum.photos/400")
    }
    return (
        <>
            <img src={img} className="img-test" alt="" />
            <button className="button-img" onClick={changeImg}>{props}</button>
        </>
    )
}