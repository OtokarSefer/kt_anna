import Meals from "./components/Meals.js";
import Header from "./components/Header";
import CartProvider from "./store/CartContext.js";

const App = () => {
 return (
    <CartProvider>
      <Header />
      <Meals />
    </CartProvider>
  );
}

export default App;
