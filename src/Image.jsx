import {useState} from 'react'

export function Image() {
    const [img, setImg] = useState("https://picsum.photos/600")
    const changeImg = () => {  
        setImg("https://picsum.photos/400")
    }
    
    return (
        <>
            <img src={img} className="img-test" alt="" />
            <Button className="button-img" onClick={changeImg} text="TeSt"></Button>
        </>
    )
}

const Button = (props) =>{
    const insertedText = props.text
    const upperText = insertedText.toUpperCase()
    return <button>{upperText}</button>
}