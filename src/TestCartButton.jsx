import { useCart } from "./TestCartContext";

export function TestCartButton({ item }) {
  const { addItemToCart } = useCart();
  function handleAddToCart() {
    addItemToCart({ ...item, quantity: 1 });
  }
  return <div onClick={handleAddToCart}>Add to Cart</div>;
}
