import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cartSlice";
const Cart = () => {
  // const {} = props;    //why i tried to use props here. its what we are avoiding using redux 🤣
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch(clearItems(cartItems));
  };
  return (
    <div className="w-6/12 m-auto">
      <h1 className="flex justify-center text-4xl font-bold">Cart Page</h1>
      <button
        className="bg-red-600 text-white border border-red-800 rounded-xl py-1 px-2"
        onClick={clearCart}
      >
        Clear Cart
      </button>
      <div className="">
        {cartItems.length > 0 ? (
          <ItemList foods={cartItems} />
        ) : (
          <h1 className="flex justify-center items-center border border-b-black mt-4 text-xl">Add Items to your cart</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
