type NameList = {
  names: {
    first: string;
    last: string;
  }[];
};
const PersonList = ({names}: NameList) => {
  return (
    <div>
      {names.map((name, index) => {
        return (
          <p key={index}>
            {name.first} {name.last}
          </p>
        );
      })}
    </div>
  );
};

export default PersonList;
