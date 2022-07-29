import React from "react";
import './taskCard.scss'
import {Link} from "react-router-dom";

const TaskCard = () => {
  return(
      <div className="card task-card">
        <div className="card-body">
          <Link to={'/'} className="card-title">Working</Link>
          <h6 className="card-subtitle my-2 text-muted">Creation date: Sunday</h6>
          <p className="card-text">Assigned to: Faisal Ahmed</p>
        </div>
      </div>
  )
}

export default TaskCard;