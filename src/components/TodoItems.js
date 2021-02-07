import React from 'react'

function TodoItems({todoItems}) {
    return (
            <ul>
                {todoItems.map(item => {
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
    )
}

export default TodoItems
