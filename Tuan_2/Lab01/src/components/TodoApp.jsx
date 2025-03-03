import { useState } from "react"


function TodoApp() {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const handleAdd= () =>{
        setTodos([...todos, text])
    }

    const handleRemove = (index) => {
        const todoList = [...todos]
        todoList.splice(index,1)
        setTodos(todoList)
        

    }


    return (
        <div className="lab03">
            <h1>Lab03</h1>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <br/>
            <button onClick={handleAdd}>Add</button>
            <br/>
            <ol>
                {todos.length > 0 ? (
                    todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => handleRemove(index)}>Remove</button>
                        </li>
                    ))
                ) : (
                    <div>Không có công việc</div>
                )}
            </ol>
        </div>
    )
}

export default TodoApp