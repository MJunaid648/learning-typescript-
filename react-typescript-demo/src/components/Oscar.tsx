type OscarProps = {
  children: React.ReactNode;
};
const Oscar = (props: OscarProps) => {
  return <p>{props.children}</p>;
};

export default Oscar;
