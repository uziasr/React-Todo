import React from 'react'

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


    render(){
    return(
        <label>
            <form onSubmit={this.submitItem}>
                <input
                type='text'
                name='item'
                onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        </label>
    )
}
}

export default TodoForm