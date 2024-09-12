import { useState } from "react";
import { Link } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";

const NavBar = () =>{
    const [button, setButton] = useState("Login")
    const userStatus = useUserStatus();
    return (
        <div className='flex justify-between bg-orange-400 p-4 text-lg'>
            <div className='flex items-center'>Logo</div>
            <ul className='flex p-2'>
                <li className='px-4'>
                    Online Status: {userStatus ? '🟢' : '🔴'}
                </li>
                <li className='px-4'>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className='px-4'>
                    <Link to={'/about'}>About</Link>
                </li>
                <li className='px-4'>
                    <Link to={'/grocery'}>Grocery</Link>
                </li>
                <li className='px-4'>
                    <Link to={'/contact'}>Contact</Link>
                </li>
                <li className='px-4'>Cart</li>
            </ul>

            <button className="bg-blue-400 text-black border border-black rounded-lg px-4 py-2 " onClick={()=>{
                button == "Login" ? setButton("Logout") : setButton("Login")
            }}>{button}</button>
        </div>
    )
}

export default NavBar;