import React, {useEffect, useState} from "react";
import './updateMember.scss';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {useForm} from "react-hook-form";

// redux
import {useDispatch, useSelector} from "react-redux";
import {updateMemberAction} from "../../store/actions/updateMemberAction";
import {deleteMemberAction} from "../../store/actions/deleteMemberAction";
import {updateTaskAction} from '../../store/actions/updateTaskAction';

const UpdateMember = () => {
    const [memberStatus, setMemberStatus] = useState(false);
    const [deletedMember, setDeletedMember] = useState({});
    const {register, formState: {errors}, handleSubmit} = useForm();
    const location = useLocation();

    // get member & task
    const member = location?.info.member;
    const task = location?.info.task;
    const dispatch = useDispatch();

    // update member request
    const onSubmit = (data) => {
        data.id = member.id;
        dispatch(updateMemberAction(data));
        setMemberStatus(true);
    };

    // delete member request
    const deleteMember = () => {
        dispatch(deleteMemberAction(member));
        setMemberStatus(true);
        setDeletedMember(member);
    }

    // result after update & delete
    const {updated_member} = useSelector(state => state.updateMemberReducer);
    const {deleted_member} = useSelector(state => state.deleteMemberReducer);
    const history = useHistory();
    useEffect(() => {
        if(memberStatus) {
            if(updated_member) {
                console.log(updated_member);
                updateTaskAfterMemberUpdate()
            }
            if(deleted_member) {
                updateTaskAfterMemberDelete();
            }
            setMemberStatus(false);
            history.push('/members');
        }
    }, [updated_member, deleted_member])

    // after member delete task data update
    function updateTaskAfterMemberDelete() {
        const memberHasTask = task.filter(t => t.assigned_to === deletedMember?.id);
        if(memberHasTask.length) {
            memberHasTask.map(taskWithMember => {
                taskWithMember.assigned_to = null;
                taskWithMember.assigned_name = '';
                dispatch(updateTaskAction(taskWithMember));
            })
        }
        setDeletedMember({});
    }

    // after member update task data update
    function updateTaskAfterMemberUpdate() {
        const memberHasTask = task.filter(t => t.assigned_to === updated_member?.result?.id);
        if(memberHasTask.length) {
            memberHasTask.map(taskWithMember => {
                taskWithMember.assigned_name = updated_member?.result?.name;
                dispatch(updateTaskAction(taskWithMember));
            })
        }
    }

    return(
        <div>
        <form className="member-form-update waver" onSubmit={handleSubmit(onSubmit)}>
            <Link to={'/members'} className={'btn-close float-end link-to-button'}> </Link>
            <input type="text" {...register("name", {required: true})}
                   placeholder="Name" defaultValue={member.name} />
            {errors.name?.type === 'required' && <label className={'error'}>Name is required</label>}
            <input type={'email'} {...register("email")} defaultValue={member.email}
                   placeholder={'Email'} />
            <label className={'error'}>{errors.email?.message}</label>
            <div className="d-flex justify-content-between align-items-center">
                <button type={'submit'}>Update Member</button>
                <button type={'button'} data-bs-toggle="modal" data-bs-target="#deleteMember">Delete Member</button>
            </div>
        </form>
            <div className="modal fade" id="deleteMember" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="deleteMemberLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteMemberLabel">Delete member</h5>
                            <button className={'btn-close mb-2'} id={'close-button-member'} data-bs-dismiss="modal" aria-label="Close"> </button>
                        </div>
                        <div className="modal-body">
                            <p>This member will be deleted. Are you sure?</p>
                        </div>
                        <div className="modal-footer">
                            <button className={'btn btn-danger mr-2'}
                                    onClick={() => deleteMember()} data-bs-dismiss="modal" aria-label="Close">Yes</button>
                            <button className={'btn btn-primary'} data-bs-dismiss="modal" aria-label="Close">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateMember;
