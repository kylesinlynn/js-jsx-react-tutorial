import './App.css'
import { Apple } from './components/fruits/Apple'
import { Grape } from './components/fruits/Grape'
import { Orange } from './components/fruits/Orange'
import { useState } from 'react'

const App = () => {
    const [number, setNumber] = useState(0)

    const increase = () => {
        setNumber(number + 1)
    }
    const decrease = () => {
        setNumber(number - 1)
    }
    const increaseByFive = () => {
        setNumber(number + 5)
    }
    const decreaseByFive = () => {
        setNumber(number - 5)
    }
    const reset = () => {
        setNumber(0)
    }

    return (<div className='App'>
        <h1>Hello World!</h1>
        <Apple />
        <Grape />
        <Orange />

        <div>
            <h2>States</h2>
            <p>Number : {number}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease} disabled={number === 0 ? true: false}>Decrease</button>
            <button onClick={increaseByFive}>Increase by 5</button>
            <button onClick={decreaseByFive} disabled={number === 0 ? true: false}>Decrease by 5</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
)}

export default App