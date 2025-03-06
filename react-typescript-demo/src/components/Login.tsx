import { useState } from "react";
import User from "./User";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logoutHandler = () => setIsLoggedIn(false);
  const loginHandler = () => setIsLoggedIn(true);

  return (
    <div>
      <p>User Is {isLoggedIn ? "Logged in" : "Logged out"}</p>
      <button onClick={logoutHandler}>logout</button>
      <button onClick={loginHandler}>login</button>
      <h4>User</h4>
      <User/>
    </div>
  );
};

export default Login;
