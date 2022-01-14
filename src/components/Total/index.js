function Total({ items }) {
  function reduceFunction(cur, acc) {
    return cur + acc.itemTotal;
  }

  let caloriesConsumed = items.reduce(reduceFunction, 0);

  return (
    <div>
      <h1>
        You have consumed
        {' ' + caloriesConsumed + ' '}
        calories today
      </h1>
    </div>
  );
}

export default Total;
