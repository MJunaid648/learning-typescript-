// Why types?
// types should be used while building applications and it is a good practice to use types in react applications.
// types are used to define the shape of the data that is passed between components.
// On the other hand, Interfaces should be used while writing libraries.
type GreetProps = {
  name: string;
  messageCount?: number;
};
const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <h2>
      Hi {props.name}! You have {messageCount} unread messages.
    </h2>
  );
};

export default Greet;
