import React from 'react'

const Todo = (props)=>{
    console.log(props)
    console.log('hello')
    return(
        <>
            <p>{props.item.name}</p>
        </>
    )
}
export default Todo