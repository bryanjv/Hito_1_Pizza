import { formatCurrency } from "../utils/formatCurrency";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav>
      <button type="button">🍕 Home</button>

      {token ? (
        <>
          <button type="button">🔓 Profile</button>
          <button type="button">🔒 Logout</button>
        </>
      ) : (
        <>
          <button type="button">🔐 Login</button>
          <button type="button">🔐 Register</button>
        </>
      )}

      <button type="button">🛒 Total: ${formatCurrency(total)}</button>
    </nav>
  );
};

export default Navbar;