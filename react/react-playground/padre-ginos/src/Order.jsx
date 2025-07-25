import { useState, useEffect } from "react";
import Pizza from "./Pizza";
import Cart from './Cart'

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true);

  let price, selectedPizza;
  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = intl.format(selectedPizza.sizes[pizzaSize]);
  }

  async function fetchPizzaTypes() {
    const pizzaRes = await fetch("/api/pizzas");
    const pizzaJson = await pizzaRes.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  console.log(selectedPizza);

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        setCart([...cart, {pizza: selectedPizza, size: pizzaSize, price}])
      }}>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <label htmlFor="pizza-size">Pizza size</label>
          <div>
            <span>
              <input
                checked={pizzaSize === "S"}
                type="radio"
                name="pizzza-size"
                onChange={(e) => setPizzaSize(e.target.value)}
                value="S"
                id="pizza-s"
              />
              <label htmlFor="pizza-s">Small</label>
            </span>
            <span>
              <input
                checked={pizzaSize === "M"}
                type="radio"
                name="pizzza-size"
                onChange={(e) => setPizzaSize(e.target.value)}
                value="M"
                id="pizza-m"
              />
              <label htmlFor="pizza-m">Medium</label>
            </span>
            <span>
              <input
                checked={pizzaSize === "L"}
                type="radio"
                name="pizzza-size"
                onChange={(e) => setPizzaSize(e.target.value)}
                value="L"
                id="pizza-l"
              />
              <label htmlFor="pizza-l">Large</label>
            </span>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        {loading ? (
          <div>Is Loading</div>
        ) : (
          <div className="order-pizza">
            <Pizza
              name={selectedPizza.name}
              description={selectedPizza.description}
              image={selectedPizza.image}
            />
            <p>{price}</p>
          </div>
        )}
      </form>
      {
        loading ? <h2>Loading...</h2> : <Cart cart={cart} />
      }
    </div>
  );
}
