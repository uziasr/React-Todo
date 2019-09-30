import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

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

// onSubmit = () =>{
//   this.setState
// }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.item}/>
      </div>
    );
  }
}

export default App;
