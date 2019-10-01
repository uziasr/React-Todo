// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
import styled from 'styled-components'

const TodoCardWrap = styled.div`
display: flex;
flex-wrap: wrap;

`

function TodoList(props){
    return(
        <TodoCardWrap>
        {props.todo.map(
            item=>{
                if(item.name){

                return (<Todo key={item.id} item={item} toggleItem={props.toggleItem}/>)}
        })}
        </TodoCardWrap>
    );

};

export default TodoList