import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <CartProvider>
      <Layout />
    </CartProvider>
  );
};

export default App;
