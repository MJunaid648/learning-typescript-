type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
const Input = ({ onChange, value }: InputProps) => {
  return <input value={value} onChange={onChange} />;
};

export default Input;
