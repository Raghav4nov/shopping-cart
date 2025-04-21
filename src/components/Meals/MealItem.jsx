import { useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useCart } from "../../context/CartContext";

const MealItem = ({ id, name, description, price }) => {
  const amountInputRef = useRef();
  const { addItem } = useCart();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    if (enteredAmount < 1 || enteredAmount > 5) {
      return;
    }

    addItem({
      id,
      name,
      price,
      amount: enteredAmount,
    });
  };

  return (
    <Card className="p-4">
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-600 italic">{description}</p>
          <p className="text-purple-700 font-bold mt-2">${price.toFixed(2)}</p>
        </div>
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-end gap-2"
        >
          <div className="flex items-center gap-2">
            <label htmlFor={`amount-${id}`} className="font-medium">
              Amount
            </label>
            <input
              ref={amountInputRef}
              id={`amount-${id}`}
              type="number"
              min="1"
              max="5"
              step="1"
              defaultValue="1"
              className="w-12 border border-gray-300 rounded px-2 py-1"
            />
          </div>
          <Button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            + Add
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default MealItem;
