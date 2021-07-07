import React from 'react'
import styled from 'styled-components'

const TodoCard = styled.div`
width: 15%;
padding: 45px 30px;
background: yellow;
margin: 5%;
border-radius: 5px;
box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
p{
    text-align: center;
    font-family:'Roboto', sans-serif;
    font-weight: 700;
    font-size: 24px;
}
`
const Todo = (props)=>{
    return(
        <TodoCard onClick={() => props.toggleItem(props.item.id)}
        className={`item${props.item.completed ? ' completed' : ''}`}>

            <p>{props.item.name}</p>
        </TodoCard>
    )
}
export default Todo