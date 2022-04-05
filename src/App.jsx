import './App.css'
import { useState, useRef } from 'react'

const Fruits = ['Apple', 'Orange']

const App = () => {

    const [fruits, setFruits] = useState(Fruits)
    const newFruit = useRef('')

    const submitFunction = (event) => {
        event.preventDefault()
        const fruit = newFruit.current.value
        setFruits(prev => [...prev, fruit])
        return (newFruit.current.value = '')
    }
    
    return (
    <div className='App'>
        <h1>Form</h1>
        <form onSubmit={submitFunction}>
            <input type="text" ref={newFruit} />
            <input type="submit" />
        </form>
        <p>{fruits.join(', ')}</p>
    </div>
    )
}

export default App