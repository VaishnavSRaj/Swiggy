import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

export const Tittle = () => {
  //? NAMED EXPORT
  return (
    <Link to="/">
      <img
        alt="logo"
        className="logo"
        src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
      />
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const user = useContext(userContext);
  const cartItems=useSelector(store=>store.cart.items)
  console.log(cartItems);
  return (
    <div className="header">
      <Tittle />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li><Link to="/cart"> Cart- {cartItems.length} items</Link></li>
        </ul>
      </div>
      <div className="btn">
        {isLoggedIn ? (
          <button
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            logout
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            login
          </button>
        )}
        <div className="user">
          <h4>{user.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Header; //? DEFAULT EXPORT
