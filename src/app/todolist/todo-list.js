import React from 'react';
import { ToDoItem } from './todo-item';

export function TodoList(props) {
    const itemList = props.items.map((aItem, index) => (
        <li key={index}>
            <ToDoItem aItem={aItem} {...props} />
        </li>
    ));
    return (
        <ul>
            {itemList}
        </ul>
    );
};