import React, { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

type Props = {
    handleAddTodo: Function
}

const PostTodo = (props: Props) => {
    const handleChange =(e: ChangeEvent<HTMLInputElement>)=>{
        settitle(e.target.value)
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newtodopost = {id: new Date().getTime().toString(), title}
        props.handleAddTodo(newtodopost)
        settitle("")
    }

    const [title, settitle] = useState("")

  return (
    <form action="" onSubmit={handleSubmit}>
        <div className='form-input'>
            <label htmlFor="title"> Todo title : </label>
            <input type="text" value={title} name='title' onChange={handleChange} required autoFocus/>

            <button type='submit'>post</button>
        </div>
    </form>
  )
}

export default PostTodo