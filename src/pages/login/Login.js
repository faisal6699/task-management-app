import React from "react";
import './login.scss';

const Login = () => {
  return(
      <form className="login waver">
        <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
            <button>Login</button>
      </form>
  )
}

export default Login;