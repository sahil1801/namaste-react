import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
    
    const [btnNameReact, setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // Subscribing to the store using a Selector - (Read data from store)
    const cartItems =  useSelector((store) => store.cart.items);

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-32 ml-4" src= {LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 items-center">
                    <li className="px-4">Online status: {onlineStatus ? "🟢" : "🔴"  }</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to= "/about">About Us</Link></li>
                    <li className="px-4"><Link to= "/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold"><Link to="/cart">Cart ({cartItems.length})</Link></li>
                    <button className="px-4" 
                    onClick={() => { 
                        btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");}}
                        >
                        {btnNameReact}</button>
                    <li className="p-4 font-bold">{loggedInUser}</li>    
                </ul>
            </div>
        </div>
    )
};