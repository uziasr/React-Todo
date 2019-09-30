// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

function TodoList(props){
    return(
        <>
{props.todo.forEach(
    item=>{
        console.log(item)
        return (<Todo item={item}/>)
    }
)}
</>
)

}

export default TodoList