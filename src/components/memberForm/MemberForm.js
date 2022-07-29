import React from "react";
import './memberForm.scss';

const MemberForm = () => {
    return(
        <form className="member-form">
            <input type="text" placeholder="Title" />
            <input type={'email'} placeholder={'Email'} />
            <button>Update Member</button>
        </form>
    )
}

export default MemberForm;