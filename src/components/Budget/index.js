function Budget({ items }) {
  function reduceFunction(cur, acc) {
    return cur + acc.itemTotal;
  }

  let caloriesConsumed = items.reduce(reduceFunction, 0);

  return (
    <div>
      <h1>You have {' ' + 3000 - caloriesConsumed + ' '} Calories Remaining</h1>
    </div>
  );
}

export default Budget;
