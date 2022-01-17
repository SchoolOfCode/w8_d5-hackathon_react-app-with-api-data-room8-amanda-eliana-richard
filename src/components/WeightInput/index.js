function WeightInput({ handleChange }) {
  return (
    <input
      type="number"
      onChange={handleChange}
      placeholder="Enter the weight /g"
    />
  );
}

export default WeightInput;
