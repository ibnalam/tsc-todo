import React from 'react'
import { TodoProps, Todotype } from './types'


const Todo = (props: TodoProps) => {
    const DeleteTodo = (id: string) => {
        props.handledelete(id)
    }
    const {id, title} = props.todo

  return (
    <article className='todo'>
        <h3>{id}</h3>
        <p>{title}</p>
        <button onClick={()=> {DeleteTodo(id)}}>Delete</button>
    </article>
  )
}

export default Todo