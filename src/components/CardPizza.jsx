import { formatCurrency } from "../utils/formatCurrency";

const CardPizza = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div style={{width: '30%', margin: '10px', padding: '10px'}}>
      <img src={props.img} alt="Imagen de Pizza" />
      <h3>{props.name}</h3>
      <p>🧀 Ingredientes:</p>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {props.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>Precio: {formatCurrency(props.price)}</h4>
      <button>Ver Más</button>
      <button>Añadir</button>
    </div>
  );
};

export default CardPizza;
