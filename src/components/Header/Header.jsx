import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../Cart/Cart";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const { items } = useCart();

  const toggleCartVisibility = () => {
    setCartIsVisible((prev) => !prev);
  };

  const cartItemsCount = items.reduce(
    (current, item) => current + item.amount,
    0
  );

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">ReactMeals</h1>
          <button
            onClick={toggleCartVisibility}
            className="flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 px-4 py-2 rounded-full transition-colors"
          >
            <FaShoppingCart />
            <span>Your Cart</span>
            <span className="bg-indigo-900 text-white px-2 py-1 rounded-full text-sm">
              {cartItemsCount}
            </span>
          </button>
        </div>
      </header>
      {cartIsVisible && <Cart onClose={toggleCartVisibility} />}
    </>
  );
};

export default Header;
