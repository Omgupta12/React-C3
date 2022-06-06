import React, { useContext } from "react";

// use react-router Link or NavLink
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const { cartCount } = useContext(CartContext);

  const handlelogin = () => {
    logout();
  };

  return (
    <div data-cy="navbar">
      {/* <Link data-cy="navbar-home-link">Logo</Link> */}
      <span data-cy="navbar-cart-items-count">Cart: ({cartCount})</span>
      <button data-cy="navbar-login-logout-button" onClick={handlelogin}>
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;