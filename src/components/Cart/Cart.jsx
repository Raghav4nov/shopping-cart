import { useCart } from "../../context/CartContext";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import CartItem from "./CartItem";

const Cart = ({ onClose }) => {
  const { items, totalAmount, addItem, removeItem } = useCart();

  const totalPrice = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  const cartItems = (
    <ul className="max-h-80 overflow-y-auto">
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      <div className="space-y-4">
        {cartItems}
        <div className="flex justify-between items-center font-bold text-xl">
          <span>Total Amount</span>
          <span>{totalPrice}</span>
        </div>
        <div className="flex justify-end gap-2">
          <Button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800"
          >
            Close
          </Button>
          {hasItems && (
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Order
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
