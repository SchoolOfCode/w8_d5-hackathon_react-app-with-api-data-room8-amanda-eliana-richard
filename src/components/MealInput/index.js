function MealInput({ handleChange }) {
  return (
    <select id="meals" name="meals" onChange={handleChange}>
      <option value="default">Select a meal</option>
      <option value="breakfast">Breakfast</option>
      <option value="lunch">Lunch</option>
      <option value="dinner">Dinner</option>
      <option value="snacks">Snacks</option>
    </select>
  );
}

export default MealInput;
