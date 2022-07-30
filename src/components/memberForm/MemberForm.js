import React from "react";
import './memberForm.scss';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addNewMemberAction} from "../../store/actions/addNewMemberAction";

const MemberForm = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        console.log(data);
        dispatch(addNewMemberAction(data));
    };
    return(
        <form className="member-form" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name", {required: true})}
                   placeholder="Name" />
            {errors.name?.type === 'required' && <label className={'error'}>Name is required</label>}
            <input type={'email'} {...register("email")}
                   placeholder={'Email'} />
            <label className={'error'}>{errors.email?.message}</label>
            <button>Update Member</button>
        </form>
    )
}

export default MemberForm;