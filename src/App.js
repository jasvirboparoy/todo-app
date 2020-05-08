import React from 'react';
import { TodoList } from './components/TodoList';
import { TextInput } from './components/TextInput';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Jasvir"
    };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    const titleStyle = {
      fontSize: "40px",
      fontWeight: "bold",
    };
    return (
      <div className="App" className="p-12 bg-gray-400 items-center bg-auto h-screen">
        <div
          className="font-sans text-5xl font-bold"
        >
          Welcome {this.state.name}! Here is your item list!
        </div>
        <TodoList />
        <TextInput placeholder="Not you? Enter your name" onSubmit={this.changeName} />
      </div>
    );
  }
}

export default App;
