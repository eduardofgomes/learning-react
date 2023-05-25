import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const changeButton = () => {
    count <= 9 ? setCount(count + 1) : alert("You've clicked too many times in this button!")
  }
  return (
    <>
      <button onClick={changeButton}>clicked {count}</button>
    </>
  )
}

export default App
