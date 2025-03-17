import { Name } from "../types/Name.type";

type NameProps = {
  names: Name[];
};

const NameList = ({ names }: NameProps) => {
  return (
    <div>
      {names.map((name, index) => (
        <h5 key={index}>
          {name.first} {name.last}
        </h5>
      ))}
    </div>
  );
};

export default NameList;