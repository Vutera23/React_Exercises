import { useCart } from "./TestCartContext";

export function NewTest() {
  const { items, totalQuantity, totalPrice } = useCart;

  return (
    <div>
      <h2>Your Cart</h2>
      <div className="">Total Item: {totalQuantity}</div>
      <div className="">Total Price:${totalPrice.toFixed(2)}</div>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.key}>
              <div>
                <strong>{item.name}</strong> -${item.price} {item.quantity}
              </div>
              <button>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
