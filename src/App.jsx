import ProductCard from "./ProductCard";
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
  const productCards = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        name={product.name}
        price={product.price}
      />
    );
  });

  return (
    <div>
      {productCards}
    </div>
  );
}