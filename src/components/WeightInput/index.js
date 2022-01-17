function WeightInput({ handleChange }) {
  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Enter the weight /g"
    />
  );
}

export default WeightInput;
