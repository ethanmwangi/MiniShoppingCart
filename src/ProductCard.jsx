function ProductCard({ name, price, onAddToCart }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>${price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

    

export default ProductCard;
