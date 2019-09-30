// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

function TodoList(props){
    return(
        <>
        {props.todo.map(
            item=>{
                return (<Todo key={item.id} item={item} toggleItem={props.toggleItem}/>)
        })}
         <button onClick={props.clearCompleted}>Clear Completed</button>
        </>
    );

};

export default TodoList