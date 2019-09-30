import React from 'react'

const Todo = (props)=>{
    console.log(props.item)
    return(
        <>
            <p>{props.item.id}</p>
        </>
    )
}
export default Todo