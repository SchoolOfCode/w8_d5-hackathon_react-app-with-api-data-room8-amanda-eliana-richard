function Button({ handleClick, index }) {
  return <button onClick={() => handleClick(index)}>+</button>;
}

export default Button;
