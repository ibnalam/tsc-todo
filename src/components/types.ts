

export type TodoProps = {
    todo: Todotype
    handledelete: Function
}

export type Todotype = {
     
        id: string,
        title: string
    
}

export type TodosProps = {
    todos: Todotype[];
    handledelete: Function
}