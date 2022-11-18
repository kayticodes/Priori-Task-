import React from 'react';

function TaskRow({ task}) {
    return (
        <tr>
            <td>{task.name}</td>
            <td>{task.priority}</td>
            <td>{task.due_date}</td>
            <td>{task.time}</td>
            <td>{task.description}</td>
        </tr>
    )
}

export default TaskRow