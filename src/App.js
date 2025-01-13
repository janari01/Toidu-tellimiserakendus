import Meals from "./components/Meals";
import Header from "./components/Header";
import { CartFunc } from "./store/CartContext";

const App = () => {
 return (
    <>
    <CartFunc>
      <Header />
      <Meals />
    </CartFunc>
    </>
  );
}

export default App;
