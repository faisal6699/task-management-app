import React, {useEffect, useState} from "react";
import './member.scss';
import MemberCard from "../../components/memberCard/MemberCard";
import MemberForm from "../../components/memberForm/MemberForm";
import {useDispatch, useSelector} from "react-redux";
import {getAllMemberAction} from "../../store/actions/getAllMemberAction";
import {getAllTaskAction} from "../../store/actions/getAllTasksAction";

const Members = () => {
    const [allMembers, setAllMembers] = useState([]);
    const [allTasks, setAllTasks] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMemberAction());
        dispatch(getAllTaskAction());
    },[])
    const {new_member} = useSelector(state => state.addNewMemberReducer);

    useEffect(() => {
        if(new_member) {
            document.getElementById('close-button-member').click();
            dispatch(getAllMemberAction());
        }
    }, [new_member])

    const {members} = useSelector(state => state.getAllMemberReducer);
    const {tasks} = useSelector(state => state.getAllTaskReducer);

    useEffect(() => {
        if(members) {
            setAllMembers(members.result);
        }
        if(tasks) {
            setAllTasks(tasks.result);
        }
    }, [members, tasks])
    return(
        <>
        <div className={'members waver'}>
            <div className={'member-card'}>
                {
                    allMembers.length && allMembers.map(member =>
                        <MemberCard member={member} task={allTasks}/>
                    )
                }
            </div>
            <button data-bs-toggle="modal" data-bs-target="#addMember">Create new member</button>
        </div>
            <div className="modal fade" id="addMember" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="addMemberLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addMemberLabel">New member form</h5>
                            <button className={'btn-close mb-2'} id={'close-button-member'} data-bs-dismiss="modal" aria-label="Close"> </button>
                        </div>
                        <div className="modal-body">
                            <MemberForm />
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}

export default Members;