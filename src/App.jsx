import ProductCard from "./ProductCard";
import { useState } from "react";
const cart = [];
const products = [
  {
    id: 1,
    name: "Nike Air max",
    price: 1200
  },
  {
    id: 2,
    name: "Adidas Samba",
    price: 1500
  },
  {
    id: 3,
    name: "Puma Suede",
    price: 1000
  }
];
function App() {
  const [cart, setCart] = useState([]);
  function handleClick(product) {
    setCart([...cart, product]);
    console.log(product);
  }
  const productCards = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        name={product.name}
        price={product.price}
        onAddToCart={() => handleClick(product)}  //When the button gets clicked, run handleClick and give it THIS produc//
      />
    );
  });
  return (
    <div>
      {productCards}
      <p>Cart:{cart.length}</p> // to tell us how many items aree in the new array//
      {cart.map((item) => {
       return (
        <p key={item.id}>{item.name} - ${item.price}</p>
        );
      })};
    </div>
  );
}

export default App;