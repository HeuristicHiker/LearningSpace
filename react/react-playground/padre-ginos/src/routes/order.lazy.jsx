// at top
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useContext, useEffect } from "react";

// make sure you modified the relative paths here – VS Code may have done this for you already
import { CartContext } from "../contexts";
import Cart from "../Cart";
import Pizza from "../Pizza";

export const Route = createLazyFileRoute("/order")({
  component: Order,
});

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});


function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [cart, setCart] = useContext(CartContext)
  const [loading, setLoading] = useState(true);

  async function checkout(){
    setLoading(true)

    await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({cart})
    })

    setCart([])
    setLoading(false)

  }

  let price, selectedPizza;
  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = intl.format(selectedPizza.sizes[pizzaSize]);
  }

  function addToCart() {
    setCart([...cart, {pizza: selectedPizza, size: pizzaSize, price}])
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

  return (
    <div className="order-page">
    <div className="order">
      <h2>Create Order</h2>
      <form action={addToCart}>
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
      </div>
      {
        loading ? <h2>Loading...</h2> : <Cart cart={cart} checkout={checkout} />
      }
    </div>
  );
}
