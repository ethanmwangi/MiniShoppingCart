import ProductCard from "./ProductCard";
import { useState } from "react";
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
  const [cartCount, setCartCount] = useState(0);
   function handleClick() {
      setCartCount(cartCount + 1);
    }
  const productCards = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        name={product.name}
        price={product.price}
        onAddToCart={handleClick}
      />
    );
  });
  return (
    <div>
      {productCards}
      <p>Cart:{cartCount}</p>
    </div>
  );
}

export default App;