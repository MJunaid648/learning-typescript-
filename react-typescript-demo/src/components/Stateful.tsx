import Counter from "../state/Counter";
import User from "./User";

const StateFul = () => {
 

  return (
    <div>
      {/* UseState */}
      <User /> <br />
      {/* UseReducer */}
      <Counter/>
    </div>
  );
};

export default StateFul;
