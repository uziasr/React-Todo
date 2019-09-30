import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './components/TodoComponents/Todo.css'

const todoItems = [{
    task: null,
      id: Date.now(),
      completed: false
},
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state ={
      item: todoItems
    }
  }

  addItem = (itemName)=>{
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState(
      {item: ([...this.state.item, newItem])}
    )
  }

  toggleItem = id =>{
    console.log(id)
    this.setState({
        item: this.state.item.map(item=>{
          if(item.id === id){
            console.log(item.completed)
          return{
            ...item,
            completed: !item.completed
          }
        }else{
          return item;
        }
        })
    })

}

clearCompleted = () => {
  this.setState({
    item: this.state.item.filter(item => !item.completed)
  });
};


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
        <TodoList todo={this.state.item} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted}/>
        
      </div>
    );
  }
}

export default App;
