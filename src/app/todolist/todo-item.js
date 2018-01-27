import React from 'react';

export function ToDoItem(props) {
    
    const doneButton = <button onClick={() => props.onDoneTodo(props.aItem)}>Done</button>;
        
    return (
        <div>
            {props.aItem.done ? (
                <s>
                    <span>{props.aItem.name}</span>
                </s>
            ) : (
                <span>
                    {props.aItem.name}
                    { doneButton }
                </span>
            )}

            <button onClick={() => props.onRemoveTodo(props.aItem)}>Delete</button>
        </div>
    )
}