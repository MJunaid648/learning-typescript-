import Counter from "../state/Counter";
import Box from "./context/Box";
import ThemeContextProvider from "./context/ThemeContext";
import User from "./User";
import { UserContextProvider } from "./context/UserContext";
import { User as User2 } from "./context/User";
import DomRef from "./ref hook/DomRef";
import MutableRef from "./ref hook/MutableRef";

const StateFul = () => {
  return (
    <div>
      {/* UseState */}
      <User /> <br />
      {/* UseReducer */}
      <Counter />
      {/* UseContext */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      {/* UseContext with future values */}
      <UserContextProvider>
        <User2 />
      </UserContextProvider>
      {/* Ref Hook */}
      <DomRef/>
      {/* Ref hook with mutatble state */}
      <MutableRef/>
    </div>
  );
};

export default StateFul;
