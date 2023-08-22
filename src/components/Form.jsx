import Todo from "./Todo"
import { useState } from "react"

const Form = () => {
    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([
        { todo: 'todo 1' },
        { todo: 'todo 2' },
        { todo: 'todo 3' }
    ])

    const handleChange = e => setTodo({[e.target.name]:e.target.value})
    const hancleClick = e => {
        if(Object.keys(todo).length === 0){
            alert('el campo no puede ir vacio')
            return
        }
        setTodos([...todos, todo])
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }

return (
    <>

        <form onSubmit={e => e.preventDefault()}>

            <label>Agregar tarea</label>
            <input type="text" name="todo" onChange={handleChange} />
            <button onClick={hancleClick}>Agregar</button>
        </form>

        {todos.map((value, i) =>(
            <Todo todo={value.todo} key={i} index={i} deleteTodo={deleteTodo}/>
        ))}
    </>

)
}
export default Form