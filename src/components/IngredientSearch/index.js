import { useState, useEffect } from 'react';
import IngredientInput from '../IngredientInput';
import WeightInput from '../WeightInput';
import MealInput from '../MealInput';
import AddToMeal from '../AddToMeal';

function IngredientSearch({ handleClick, setValue }) {
  const [ingredient, setIngredient] = useState('');
  const [calorie, setCalorie] = useState(0);
  const [weight, setWeight] = useState(0);
  const [meal, setMeal] = useState('default');

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=79461896&app_key=%209869e5f420b57b8f9d793d8ddd042a32%09&ingr=${ingredient}&nutrition-type=logging`
      );
      const data = await response.json();
      setCalorie(data.parsed[0].food.nutrients.ENERC_KCAL);
    };
    loadData();
  }, [ingredient]);

  useEffect(() => {
    setValue(Number((calorie / 100) * weight));
  }, [ingredient, weight, meal, calorie, setValue]);

  function ingredientHandleChange(e) {
    setIngredient(e.target.value);
  }

  function weightHandleChange(e) {
    setWeight(e.target.value);
  }

  function mealHandleChange(e) {
    setMeal(e.target.value);
  }

  function addToMeal() {
    switch (meal) {
      case 'default':
        break;
      case 'breakfast':
        handleClick(0);
        break;
      case 'lunch':
        handleClick(1);
        break;
      case 'dinner':
        handleClick(2);
        break;
      case 'snacks':
        handleClick(3);
        break;
      default:
        handleClick(0);
    }
  }

  return (
    <div>
      <IngredientInput handleChange={ingredientHandleChange} />
      <p>{calorie} calories / 100g</p>
      <WeightInput handleChange={weightHandleChange} />
      <p>{(calorie / 100) * weight} calories for your food</p>
      <MealInput handleChange={mealHandleChange} />
      <AddToMeal handleClick={addToMeal} />
    </div>
  );
}

export default IngredientSearch;
