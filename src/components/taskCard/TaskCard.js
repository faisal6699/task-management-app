import React from "react";
import './taskCard.scss'
import {Link} from "react-router-dom";

const TaskCard = ({task}) => {
  return(
      <div className="card task-card mb-2">
        <div className="card-body">
          <Link to={{pathname: `/tasks/${task.title}`, info: {task}}}
                className="card-title">{task.title}</Link>
          <h6 className="card-subtitle my-2 text-muted">Creation date: {task?.created}</h6>
          <p className="card-text">Assigned to: {task?.name}</p>
        </div>
      </div>
  )
}

export default TaskCard;