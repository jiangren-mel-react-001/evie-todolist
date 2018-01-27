import React from 'react';

export class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            heading: 'My To-Do List',
            items: ["item1", "item2", "item3"]
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleAdd(e) {
        this.setState({ items: [...this.state.items, 'item4'] });
    }

    handleDelete(aItem) {
        let newItemList = this.state.items.filter((value) => value !== aItem); // filter: immutable
        this.setState({items: newItemList})
    }

    handleUpdate(aItem) {
        /*TODO*/
        
    }

    render() {

        return (
            <div>
                <span>Enter something new to add to your list: </span>
                <br />
                <input type="text"/>
                <button onClick={this.handleAdd}>add</button>

                <hr />

                <p>{this.state.heading}</p>
                <ul>
                    {this.state.items.map(aItem => { return (
                        <li key={aItem}>
                            {aItem}
                            <button onClick={this.handleDelete(aItem)}>delete</button>
                            <button onClick={this.handleUpdate(aItem)}>update</button>
                        </li>        
                    )})}
                </ul>
            </div>
        );
    }
}