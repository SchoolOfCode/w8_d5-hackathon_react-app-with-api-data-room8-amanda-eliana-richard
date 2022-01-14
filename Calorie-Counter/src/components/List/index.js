import Button from '../Button';
import Input from '../Input';

function List({ items, handleChange, handleClick }) {
  return (
    <main>
      {items.map((item, index) => {
        return (
          <section key={index}>
            <h2>{item.itemText}</h2>
            <p>Calories: {item.itemTotal}</p>
            <Input handleChange={handleChange} key={item.id} />
            <Button
              handleClick={handleClick}
              index={index}
              key={item.itemText}
            />
          </section>
        );
      })}
    </main>
  );
}

export default List;
