import React from "react";
import './tasks.scss';
import TaskCard from "../../components/taskCard/TaskCard";
import TaskForm from "../../components/taskForm/TaskForm";

const Tasks = () => {
    return (
        <>
            <div className={'tasks waver'}>
                <div className={'task-card'}>
                    <TaskCard/>
                </div>
                <button data-bs-toggle="modal" data-bs-target="#addTask">Create new task</button>
            </div>
            <div className="modal fade" id="addTask" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="addTaskLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addTaskLabel">New task form</h5>
                            <button className={'btn-close mb-2'} data-bs-dismiss="modal" aria-label="Close"> </button>
                        </div>
                        <div className="modal-body">
                            <TaskForm />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Tasks;