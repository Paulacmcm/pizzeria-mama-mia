import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas.js";
 // Importar el array de pizzas

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="row">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.name}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
