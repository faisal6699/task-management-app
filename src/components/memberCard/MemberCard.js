import React from "react";
import './memberCard.scss'
import {Link} from "react-router-dom";

const MemberCard = () => {
    return(
        <div className="card member-card">
            <div className="card-body">
                <Link to={'/'} className="card-title">Faisal Ahmed</Link>
                <h6 className="card-subtitle my-2 text-muted">Number of tasks: 10</h6>
            </div>
        </div>
    )
}

export default MemberCard;