import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import styled from 'styled-components'

const toDoList = []

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList: toDoList
    }
  }

  addToList = (itemName) => {
    this.setState({
      ...this.state,
      toDoList: [
        ...this.state.toDoList,
        {
          name: itemName,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  toggleCompleted = (itemId) => {
    const updatedList = this.state.toDoList.map(item => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      else {
        return item;
      }
    });
    this.setState({
      ...this.state,
      toDoList: updatedList
    });
  }

  clearCompleted = () => {
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <MainDiv>
        <Header>Welcome to Matt's Todo App!</Header>
        <TodoDiv>  
          <TodoForm addToList={this.addToList} />
          <br/>
          <TodoList toDoList={this.state.toDoList} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted} />
        </TodoDiv>
      </MainDiv>
    );
  }
}

const MainDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;
background: black;
`

const TodoDiv = styled.div`
width: 30%;
display: flex;
flex-direction: column;
background: cyan;
justify-content: center;
align-items: center;
padding: 1% 0 1% 0;
border-radius: 10px;
`

const Header = styled.h1`
color: gold;
`

export default App;