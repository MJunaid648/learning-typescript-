import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

const personName = {
  first: "Bruce",
  last: "Wayne",
};

const nameList = [
  {
    first: "Muhammad",
    last: "Junaid",
  },
  {
    first: "Shahzaib",
    last: "Iqbal",
  },
  {
    first: "Farooq",
    last: "Butt",
  },
];

function App() {
  return (
    <div className="App">
      {/* Props of string or number type */}
      <Greet name="Junaid" messageCount={10} />
      {/* Optional prop */}
      <Greet name="Junaid"  />
      {/* Props of object type */}
      <Person name={personName} />
      {/* Props of array type */}
      <PersonList names={nameList} />
      {/* Props that must be specific values */}
      <Status status="success" />
      {/* Children Props */}
      <Heading>I am children props</Heading>
      {/* React component as a Prop */}
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
