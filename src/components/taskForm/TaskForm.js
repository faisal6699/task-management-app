import React from "react";
import './taskForm.scss';

const TaskForm = () => {
    return(
        <>
        <form className="task-form">
            <input type="text" placeholder="Title" />
            <textarea placeholder={'description'} />
            <select>
                <option selected hidden>Choose one assignee</option>
                <option>Faisal</option>
            </select>
            <button>Update Task</button>
        </form>
            </>
    )
}

export default TaskForm;