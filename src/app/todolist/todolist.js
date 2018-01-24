import React from 'react';

export class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            heading: 'My To-Do List',
            items: ["item1", "item2", "item3"]
        };
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
    }
    add(e) {
        this.setState({ items: [...this.state.items, 'item4'] });
    }

    delete(e) {
        /*TODO*/
    }

    render() {
        return (
            <div>
                <span>Enter something new to add to your list: </span>
                <br />
                <input type="text"/>
                <button onClick={this.add}>add</button>

                <hr />

                <p>{this.state.heading}</p>
                <ul>
                    {this.state.items.map(v => { return <li key={v}>{v}</li> })}
                </ul>
            </div>
        );
    }
}