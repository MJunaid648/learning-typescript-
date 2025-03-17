import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: "Junaid",
      email: "junaid@example.com",
    });
  };

  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <div>
      <h4>UseState</h4>
      <button onClick={handleLogout}>logout</button>
      <button onClick={handleLogin}>login</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div> <br />
    </div>
  );
};
