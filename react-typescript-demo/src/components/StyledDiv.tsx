type StyleProp = {
  style: React.CSSProperties;
};
const StyledDiv = ({ style }: StyleProp) => {
  return <div style={style}>I am stylish😎</div>;
};

export default StyledDiv;
