import FoodMenu from "./FoodMenu";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const dispatch=useDispatch()

  const handleClearCart=()=>{
    dispatch(clearCart())

  }
  const cartItems = useSelector((store) => store.cart.items); // SUBSCRIBING TO A SPECIFIC PORTION --

  return (
    <>
      <h1>Cart-{cartItems.length}</h1>
      <button onClick={()=>{handleClearCart()}}>clear cart</button>
      <div  className="menu"> {cartItems.map(items=> 
        <FoodMenu key={items.id} {...items} />
      )}</div>
     
      {/* <FoodMenu {...cartItems[0]}/> */}
    </>
  );
};

export default Cart;
