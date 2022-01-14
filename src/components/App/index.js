import './App.css';
import List from '../List';
import Budget from '../Budget';
import Total from '../Total';
import { useState } from 'react';
import IngredientSearch from '../IngredientSearch';

const categories = [
  {
    id: 1,
    itemText: 'Breakfast',
    itemTotal: 0,
  },
  {
    id: 2,
    itemText: 'Lunch',
    itemTotal: 0,
  },
  {
    id: 3,
    itemText: 'Dinner',
    itemTotal: 0,
  },
  { id: 4, itemText: 'Snacks', itemTotal: 0 },
];

function App() {
  const [items, setItems] = useState(categories);
  const [value, setValue] = useState(0);

  function handleClick(index) {
    console.log(index, value);
    const updatedItems = [
      ...items.slice(0, index),
      { ...items[index], itemTotal: items[index].itemTotal + value },
      ...items.slice(index + 1),
    ];
    setItems(updatedItems);
  }

  function handleChange(e) {
    setValue(Number(e.target.value));
  }

  return (
    <div className="App">
      <h1>Calorie Counter App</h1>
      <IngredientSearch
        items={items}
        setItems={setItems}
        handleClick={handleClick}
        setValue={setValue}
      />
      <Budget items={items} />
      <List
        items={items}
        handleClick={handleClick}
        handleChange={handleChange}
      />
      <Total items={items} />
    </div>
  );
}

export default App;
