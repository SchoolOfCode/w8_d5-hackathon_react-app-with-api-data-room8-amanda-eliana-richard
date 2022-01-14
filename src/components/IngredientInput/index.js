function IngredientInput({ handleChange }) {
  return (
    <input type="text" onChange={handleChange} placeholder="Search a food" />
  );
}

export default IngredientInput;
