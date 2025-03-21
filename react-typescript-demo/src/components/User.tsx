import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Junaid",
      email: "junaid@gmail.com",
    });
  };

  const handleLogout = () => setUser(null);

  return (
    <div>
      <h4>UseState</h4>
      <button onClick={handleLogout}>logout</button>
      <button onClick={handleLogin}>login</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div> <br />
    </div>
  );
};

export default User;