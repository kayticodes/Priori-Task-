import React from "react";
import TaskRow from "./TaskRow.js";

function TaskTable({ tasks }) {
    return (
        <table id="taskslist">
            <caption>Tasks</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                    <th>Time Estimate</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, i) => <TaskRow task={task} key={i} />)}
            </tbody>
        </table>
        
    );
}

export default TaskTable;