const Book = (props) => {
    return (
        <>
            <h1>Title: {props.title}</h1>
            <h3>Author: {props.author}</h3>
        </>
    )
}

const BookList = () => {
    return (
        <>
            <Book
                title="Metro"
                author="IDK"
            />
            <Book
                title="The shining"
                author="Steven King"
            />
        </>
    )
}

export default BookList