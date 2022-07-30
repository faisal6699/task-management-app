import React, {useEffect, useState} from "react";
import './memberCard.scss'
import {Link} from "react-router-dom";

const MemberCard = ({member, task}) => {
    const [counter, updateCounter] = useState(0);
    useEffect(() => {
        if(task) {
            const count = task.filter(t => t.assigned_to === member.id);
            updateCounter(count.length);
        }
    }, [])
    return(
        <div className="card member-card mb-2">
            <div className="card-body">
                <Link to={{pathname: `/members/${member.name}`, info: {member}}} className="card-title">{member.name}</Link>
                <h6 className="card-subtitle my-2 text-muted">Number of tasks: {counter}</h6>
            </div>
        </div>
    )
}

export default MemberCard;