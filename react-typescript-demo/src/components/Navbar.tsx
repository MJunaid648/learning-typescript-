import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Props & Types</Link>
        </li>
        <li>
          <Link to="/state">Stateful</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
