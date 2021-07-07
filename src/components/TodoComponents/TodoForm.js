import React from 'react'
import styled from 'styled-components'
// import styled from 'styled-components'

const FormWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
font-family:'Roboto', sans-serif;
border-box: box;
width: 25%;
margin: 3% auto;
background: dodgerblue;
border: black 3px solid;
padding: 50px 80px;
`

const FormWrap = styled.div`
display: flex;
justify-content: space-between;
// width:100%;
    button{
        border-radius: 5px;
        background:black;
        color: whitesmoke;
        border:none;
        width: 60px;
        height: 25px;
        :active{
            background: whitesmoke;
            color:black;
        }
    }

`

class TodoForm extends React.Component{
    constructor(){
        super()
        this.state ={
            item:''
        };
    }
    handleChanges = event =>{
        // event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitItem = event =>{
        event.preventDefault();
        this.props.addItem(this.state.item)
    };

    clearButton = event =>{
        event.preventDefault();
        this.props.clearCompleted()

    }

    render(){
    return(
        <FormWrapper>
            <h1>TODO LIST</h1>
        <FormWrap>
            <form onSubmit={this.submitItem}>
                <input
                type='text'
                name='item'
                onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
            <form onSubmit={this.clearButton}>
                <button>Clear</button>
            </form>
        </FormWrap>
        </FormWrapper>
    )
}
}

export default TodoForm