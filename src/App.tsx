import React from 'react'
import Todos from './components/Todos'
import { useState } from 'react'
import PostTodo from './components/PostTodo'
import { Todotype } from './components/types'


const todoData = [
  {
    id: "1",
    title: "todo title 1"
  },
  {
    id: "2",
    title: "todo title 2"
  },
  {
    id: "3",
    title: "todo title 3"
  },
  {
    id: "4",
    title: "todo title 4"
  },
  {
    id: "5",
    title: "todo title 5"
  },
  {
    id: "6",
    title: "todo title 6"
  },
]

const App = () => {
  const handledelete = (id: string) => {
    const filterData = todos.filter(todo => todo.id !== id)
    settodos(filterData)
  }

  const [todos, settodos] = useState(todoData)

  const handleAddTodo = (newtodo: Todotype) =>{
    settodos(prevState => [...prevState, newtodo])

  }

  return (
    <div>
      <PostTodo handleAddTodo={handleAddTodo}/>
      <Todos todos={todos} handledelete={handledelete}/>

    </div>
  )
}

export default App