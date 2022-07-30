import React, {useEffect, useState} from "react";
import './taskForm.scss';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {getAllMemberAction} from "../../store/actions/getAllMemberAction";
import {addNewTaskAction} from "../../store/actions/addNewTaskAction";
import {dateFormatter} from "../../helpers/dateFormatter";

const TaskForm = () => {
    const [allMembers, setAllMembers] = useState([]);
    const {register, formState: {errors}, handleSubmit} = useForm();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMemberAction());
    }, [])
    const {members} = useSelector(state => state.getAllMemberReducer)
    useEffect(() => {
        if (members) {
            setAllMembers(members.result);
        }
    }, [members]);
    const onSubmit = (data) => {
        data.created = dateFormatter();
        data.assigned_to = Number(data.assigned_to);
        const member = allMembers.find(member => member.id === data.assigned_to);
        data.assigned_name = member ? member.name : '';
        dispatch(addNewTaskAction(data))
    };
    return (
        <>
            <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("title", {required: true})}
                       placeholder="Title"/>
                {errors.title?.type === 'required' && <label className={'error'}>Title is required</label>}
                <textarea placeholder={'description'} {...register("description")}/>
                <select {...register("assigned_to", {required: true})}>
                    <option selected hidden>Choose one assignee</option>
                    {allMembers.length &&
                        allMembers.map(member => <option value={member.id}>{member.name}</option>)}

                </select>
                <button>Update Task</button>
            </form>
        </>
    )
}

export default TaskForm;