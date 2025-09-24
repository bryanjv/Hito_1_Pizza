import PropTypes from "prop-types";
import { formatCurrency } from "../utils/formatCurrency";

const CardPizza = ({ name, price, img, ingredients = [] }) => {
  return (
    <div className="card" style={{ maxWidth: 480, margin: "12px auto" }}>
      <img src={img} alt={name} style={{ width: "100%", height: "auto" }} />
      <div className="card-body">
        <h3 className="card-title" style={{ marginBottom: 8 }}>{name}</h3>
        <p style={{ margin: 0, fontWeight: 600 }}>Ingredientes:</p>
        <ul style={{ marginTop: 6 }}>
          {ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
        <h4 style={{ marginTop: 8 }}>Precio: ${formatCurrency(price)}</h4>
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button type="button">Ver más</button>
          <button type="button">Añadir</button>
        </div>
      </div>
    </div>
  );
};

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string),
};

export default CardPizza;
