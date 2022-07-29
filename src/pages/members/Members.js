import React from "react";
import './member.scss';
import MemberCard from "../../components/memberCard/MemberCard";
import MemberForm from "../../components/memberForm/MemberForm";
import TaskForm from "../../components/taskForm/TaskForm";

const Members = () => {
    return(
        <>
        <div className={'members waver'}>
            <div className={'member-card'}>
                <MemberCard />
            </div>
            <button data-bs-toggle="modal" data-bs-target="#addMember">Create new member</button>
        </div>
            <div className="modal fade" id="addMember" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="addMemberLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addMemberLabel">New member form</h5>
                            <button className={'btn-close mb-2'} data-bs-dismiss="modal" aria-label="Close"> </button>
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