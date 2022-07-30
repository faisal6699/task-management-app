import React, {useEffect, useState} from "react";
import './tasks.scss';
import TaskCard from "../../components/taskCard/TaskCard";
import TaskForm from "../../components/taskForm/TaskForm";
import {useDispatch, useSelector} from "react-redux";
import {getAllTaskAction} from "../../store/actions/getAllTasksAction";

const Tasks = () => {
    const [allTasks, setAllTasks] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTaskAction());
    }, [])
    const {tasks} = useSelector(state => state.getAllTaskReducer);

    useEffect(() => {
        if (tasks) {
            console.log(tasks);
            setAllTasks(tasks.result)
        }
    }, [tasks])
    const {new_task} = useSelector(state => state.addNewTaskReducer);

    useEffect(() => {
        if(new_task) {
            document.getElementById('close-button').click();
            dispatch(getAllTaskAction());
        }
    }, [new_task])

    return (
        <>
            <div className={'tasks waver'}>
                <div className={'task-card'}>
                    {allTasks.length &&
                        allTasks.map(task =>
                            <TaskCard task={task}/>)
                    }
                </div>
                <button data-bs-toggle="modal" data-bs-target="#addTask">Create new task</button>
            </div>
            <div className="modal fade" id="addTask" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="addTaskLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addTaskLabel">New task form</h5>
                            <button className={'btn-close mb-2'} id={'close-button'} data-bs-dismiss="modal" aria-label="Close"> </button>
                        </div>
                        <div className="modal-body">
                            <TaskForm/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Tasks;