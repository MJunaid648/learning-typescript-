import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import NameList from "./components/NameList";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import StyledDiv from "./components/StyledDiv";

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
const PropsnTypes = () => {
  return (
    <div className="App">
      {/* Props of string or number type */}
      <Greet name="Junaid" messageCount={10} />
      {/* Optional prop */}
      <Greet name="Junaid" />
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
      {/* Props of Event type */}
      <Button
        handleClickWithParams={(event, id) => {
          console.log(event);
          console.log(id);
        }}
      />
      <Input
        value=""
        onChange={(event) => {
          console.log(event);
        }}
      />
      {/* Passing CSS Style as Props */}
      <StyledDiv style={{ border: "1p solid black", padding: "10px" }} />
      {/* Type export and reusability */}
      <NameList names={nameList} />
    </div>
  );
};

export default PropsnTypes;
