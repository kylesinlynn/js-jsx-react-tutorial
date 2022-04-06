import './App.css'
import { useState, useRef } from 'react'

const TodoList = [
    {
        id: 1,
        title: 'Learn React',
        completed: false
    }
]

const App = () => {
    const [todo, setTodo] = useState(TodoList)
    const newTodo = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodoTitle = newTodo.current.value
        if (newTodoTitle.trim()) {
            setTodo([...todo, {
                id: todo.length + 1,
                title: newTodoTitle,
                completed: false
            }])
            newTodo.current.value = ''
        }
    }

    const handleToggle = (id) => {
        setTodo(todo.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const handleDelete = (id) => {
        setTodo(todo.filter(todo => todo.id !== id))
    }

    return (
    <div className='App'>
        <h1>ToDo Lists</h1>
        <form onSubmit={handleSubmit}>
            <input ref={newTodo} type='text' placeholder='Add Todo' />
            <button type='submit'>Add</button>
        </form>
        <ul>
            {todo.map(todo => (
                <li key={todo.id}>
                    {todo.title}
                    <input type='checkbox' checked={todo.completed} onChange={() => handleToggle(todo.id)} />
                    <button onClick={() => handleDelete(todo.id)}>X</button>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default App