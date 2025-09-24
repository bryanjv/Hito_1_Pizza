// src/components/Home.jsx
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../data/pizzas";

const Home = () => {
  return (
    <>
      <Header />
      {pizzas.map((pz) => (
        <CardPizza
          key={pz.id}
          name={pz.name}
          price={pz.price}
          ingredients={pz.ingredients}
          img={pz.img}
        />
      ))}
    </>
  );
};

export default Home;
