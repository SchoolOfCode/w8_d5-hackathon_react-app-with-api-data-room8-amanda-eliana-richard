function Input({ handleChange }) {
  return (
    <input
      type="number"
      onChange={handleChange}
      placeholder="Enter calories manually"
    />
  );
}

export default Input;
