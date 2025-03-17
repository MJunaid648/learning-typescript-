type ButtonProps = {
  //   handleClickVoid: () => void;
  handleClickWithParams: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};
const Button = ({ handleClickWithParams }: ButtonProps) => {
  return (
    <button onClick={(event) => handleClickWithParams(event, 2)}>Button</button>
  );
};

export default Button;