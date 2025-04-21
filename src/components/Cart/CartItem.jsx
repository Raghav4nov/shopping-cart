import Button from "../UI/Button";

const CartItem = ({ name, amount, price, onAdd, onRemove }) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className="flex justify-between items-center border-b border-gray-200 py-4">
      <div>
        <h3 className="font-medium">{name}</h3>
        <div className="flex justify-between w-40 mt-2">
          <span className="text-gray-600">{formattedPrice}</span>
          <span className="border border-gray-300 px-2 rounded-md">
            x {amount}
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={onRemove}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800"
        >
          −
        </Button>
        <Button
          onClick={onAdd}
          className="w-8 h-8 flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white"
        >
          +
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
