import ProductCard from "./ProductCard";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 1200,
  },
  {
    id: 2,
    name: "Adidas Samba",
    price: 1500,
  },
  {
    id: 3,
    name: "Puma Suede",
    price: 1000,
  },
];

function App() {
  const [cart, setCart] = useState([]);

  function handleClick(product) {
    setCart([...cart, product]);
    console.log(product);
  }

  function removeFromCart(removeId) {
    const newCart = cart.filter((item) => item.id !== removeId);
    setCart(newCart);
  }

  const productCards = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        name={product.name}
        price={product.price}
        onAddToCart={() => handleClick(product)}
      />
    );
  });

  return (
    <div>
      {productCards}

      <p>Cart: {cart.length}</p>

      {cart.map((item, index) => {
        return (
          <div key={`${item.id}-${index}`}>
            <p>
              {item.name} - KES {item.price}
            </p>

            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;