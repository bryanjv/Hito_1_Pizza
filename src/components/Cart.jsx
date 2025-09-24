// src/components/Cart.jsx
import { useMemo, useState } from "react";
import { pizzaCart } from "../data/pizzas";
import { formatCurrency } from "../utils/formatCurrency";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const inc = (id) => {
    setCart((prev) =>
      prev.map((it) => (it.id === id ? { ...it, quantity: it.quantity + 1 } : it))
    );
  };

  const dec = (id) => {
    setCart((prev) => {
      const next = prev
        .map((it) => (it.id === id ? { ...it, quantity: it.quantity - 1 } : it))
        .filter((it) => it.quantity > 0);
      return next;
    });
  };

  const total = useMemo(
    () => cart.reduce((acc, it) => acc + it.price * it.quantity, 0),
    [cart]
  );

  return (
    <div className="container py-4">
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {cart.map((it) => (
              <li
                key={it.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr auto",
                  gap: 12,
                  alignItems: "center",
                  borderBottom: "1px solid #eee",
                  padding: "12px 0",
                }}
              >
                <img
                  src={it.img}
                  alt={it.name}
                  style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 8 }}
                />
                <div>
                  <h4 style={{ margin: "0 0 4px" }}>{it.name}</h4>
                  <div>Precio: ${formatCurrency(it.price)}</div>
                  <div>Cantidad: {it.quantity}</div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button type="button" onClick={() => dec(it.id)}>-</button>
                  <button type="button" onClick={() => inc(it.id)}>+</button>
                </div>
              </li>
            ))}
          </ul>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 16,
              paddingTop: 12,
              borderTop: "2px solid #ddd",
            }}
          >
            <h3 style={{ margin: 0 }}>Total: ${formatCurrency(total)}</h3>
            <button type="button">Pagar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
