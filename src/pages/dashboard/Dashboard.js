import React from "react";
import './dashboard.scss';
import {Link} from "react-router-dom";

const Dashboard = () => {
  return(
      <div className={'d-flex align-items-center justify-content-around dashboard waver'}>
        <Link to={'/tasks'}><button>tasks</button></Link>
        <Link to={'/members'}><button>members</button></Link>
      </div>
  )
}

export default Dashboard;