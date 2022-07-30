import React, {useEffect, useState} from "react";
import './updateTask.scss';
import {useForm} from "react-hook-form";
import {dateFormatter} from "../../helpers/dateFormatter";
import {useDispatch, useSelector} from "react-redux";
import {getAllMemberAction} from "../../store/actions/getAllMemberAction";
import {Link, useHistory, useLocation} from 'react-router-dom';
import {updateTaskAction} from "../../store/actions/updateTaskAction";
import {deleteTaskAction} from "../../store/actions/deleteTaskAction";

const UpdateTask = () => {
    const [allMembers, setAllMembers] = useState([]);
    const [taskStatus, setTaskStatus] = useState(false);

    // get All members
    useEffect(() => {
        dispatch(getAllMemberAction());
    }, [])
    const {members} = useSelector(state => state.getAllMemberReducer)
    useEffect(() => {
        if (members) {
            setAllMembers(members.result);
        }
    }, [members]);
    const {register, formState: {errors}, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const location = useLocation();
    const task = location.info.task;

    // update task request
    const onSubmit = (data) => {
        data.created = dateFormatter();
        data.assigned_to = Number(data.assigned_to);
        const member = allMembers.find(member => member.id === data.assigned_to);
        data.assigned_name = member ? member.name : '';
        data.id = task.id;
        dispatch(updateTaskAction(data))
        setTaskStatus(true);
    };

    // delete task request
    const deleteTask = () => {
        dispatch(deleteTaskAction(task));
        setTaskStatus(true);
    }

    const {updated_task} = useSelector(state => state.updateTaskReducer);
    const {deleted_task} = useSelector(state => state.deleteTaskReducer);
    const history = useHistory();

    // route change after task delete or update
    useEffect(() => {
        if(taskStatus) {
            if(updated_task || deleted_task) {
                setTaskStatus(false);
                history.push('/tasks');
            }
        }
    }, [updated_task, deleted_task])

    return(
        <>
            <form className="task-form-update waver" onSubmit={handleSubmit(onSubmit)}>
                <Link to={'/tasks'} className={'btn-close float-end link-to-button'}> </Link>
                <input type="text" {...register("title", {required: true})}
                       placeholder="Title" defaultValue={task.title}/>
                {errors.title?.type === 'required' && <label className={'error'}>Title is required</label>}
                <textarea placeholder={'description'} {...register("description")}
                    defaultValue={task?.description}/>
                <select {...register("assigned_to", {required: true})}>
                    <option selected disabled hidden>Choose one assignee</option>
                    {allMembers.length &&
                        allMembers.map(member => <option
                            value={member.id} selected={member.id === task.assigned_to}>
                            {member.name}</option>)}

                </select>
                <div className="d-flex justify-content-between align-items-center">
                    <button type={'submit'}>Update task</button>
                    <button type={'button'} data-bs-toggle="modal" data-bs-target="#deleteTask">Delete Task</button>
                </div>
            </form>
            <div className="modal fade" id="deleteTask" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="deleteTaskLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteTaskLabel">Delete member</h5>
                            <button className={'btn-close mb-2'} id={'close-button-member'} data-bs-dismiss="modal" aria-label="Close"> </button>
                        </div>
                        <div className="modal-body">
                            <p>This member will be deleted. Are you sure?</p>
                        </div>
                        <div className="modal-footer">
                            <button className={'btn btn-danger mr-2'}
                                    onClick={() => deleteTask()} data-bs-dismiss="modal" aria-label="Close">Yes</button>
                            <button className={'btn btn-primary'} data-bs-dismiss="modal" aria-label="Close">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateTask;
