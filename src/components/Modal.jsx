import {useState, useEffect} from 'react'
import './Modal.css'

const Modal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {
        console.log('Modal')
    }, [modalIsOpen])

    return (
        <>
            <button onClick={() => setModalIsOpen(true)}>Modal</button>
            { modalIsOpen && <div className="modal-content">
                <div className="modal-close" onClick={() => setModalIsOpen(false)}>
                    <span className="close">&times;</span>
                </div>
                <div className="modal-information">
                    <img src="https://picsum.photos/200" className="image-modal text" alt="Image not found"/>
                    <h2 className="text">Title</h2>
                    <p className="text overview">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quibusdam quasi corrupti deserunt voluptate corporis ducimus tempore facilis rerum dolor sequi, dolores distinctio mollitia. Temporibus aspernatur labore commodi doloremque sunt!</p>
                </div>
            </div>}
        </>
    )
}

export default Modal