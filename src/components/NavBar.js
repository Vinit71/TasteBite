import { useState } from "react";
import { Link } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";

const NavBar = () =>{
    const [button, setButton] = useState("Login")
    const userStatus = useUserStatus();
    return (
        <div className='navbar'>
            <div className='logo'>Logo</div>
            <ul className='links'>
                <li>
                    Online Status: {userStatus ? '🟢' : '🔴'}
                </li>
                <li className='link'>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className='link'>
                    <Link to={'/about'}>About</Link>
                </li>
                <li className='link'>
                    <Link to={'/grocery'}>Grocery</Link>
                </li>
                <li className='link'>
                    <Link to={'/contact'}>Contact</Link>
                </li>
                <li className='link'>Cart</li>
            </ul>

            <button className="nav-btn" onClick={()=>{
                button == "Login" ? setButton("Logout") : setButton("Login")
            }}>{button}</button>
        </div>
    )
}

export default NavBar;