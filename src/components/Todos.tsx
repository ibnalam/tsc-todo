import React from 'react'
import Todo from './Todo'
import { TodosProps, Todotype } from './types'


const Todos = (props: TodosProps) => {
    
  return (
    <section className='todos'>
         {
            props.todos.map(todo => <Todo key={todo.id} todo={todo} handledelete={props.handledelete}/>)
        }
    </section>
  )
}

export default Todos