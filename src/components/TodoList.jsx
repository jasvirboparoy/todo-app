import React from 'react';
import { Item } from './Item';
import { TextInput } from './TextInput';

export class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(newItem) {
    const items = this.state.items;
    items.push(newItem);
    this.setState({
      items: items
    });
  }

  render() {

    const listStyling = {
      paddingBottom: "300px"
    };

    console.log(this.state.items);
    return (
      <div style={listStyling}>
        {
          this.state.items.map(item => {
            return <Item todoTask={item}/>
          })
        }
        <TextInput placeholder="+ Add Item" onSubmit={this.addItem} />
      </div>
    )
  }
}
