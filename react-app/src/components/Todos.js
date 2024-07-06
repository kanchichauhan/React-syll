import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from './Features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

  return (
    <div>
        Todos
        {todos.map((eachTodo) => (<ul>
            <li key={eachTodo.id}>{eachTodo.text}
                <button onClick={() => dispatch(removeTodo(todos.id))}>X</button>
            </li>
        </ul>))}
    </div>
  )
}

export default Todos