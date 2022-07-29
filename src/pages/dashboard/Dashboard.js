import React from "react";
import './dashboard.scss';

const Dashboard = () => {
  return(
      <div className={'d-flex align-items-center justify-content-around dashboard waver'}>
        <button>tasks</button>
        <button>members</button>
      </div>
  )
}

export default Dashboard;