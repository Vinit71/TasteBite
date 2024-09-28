import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import tasteBite_logo from "../utils/tasteBite_logo.webp"
const NavBar = () => {
  const [button, setButton] = useState("Login");
  const userStatus = useUserStatus();

  const { userName, userAge } = useContext(userContext);

  let cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-[#20B2A6] p-4 text-lg">
      <img className=" w-14 flex items-center" src={tasteBite_logo} alt="" />
      <ul className="flex p-2">
        <li className="px-4">Online Status: {userStatus ? "🟢" : "🔴"}</li>
        <li className="px-4">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="px-4">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="px-4">
          <Link to={"/grocery"}>Grocery</Link>
        </li>
        <li className="px-4">
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li className="px-4">
          <Link to={"/cart"}>Cart ({cartItems.length})</Link>
        </li>
        {/* <li className="px-4">{userName}</li> */}
        {/* <li className="px-4">{userAge}</li> */}
      </ul>

      <div className="flex items-center">
        <button
          className="bg-blue-400 text-black border border-black rounded-lg py-1 w-20 "
          onClick={() => {
            button == "Login" ? setButton("Logout") : setButton("Login");
          }}
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default NavBar;