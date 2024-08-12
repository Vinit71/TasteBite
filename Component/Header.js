import React from "react";

export default Header = () =>{
    const logo = "Logo";
    const userIcon = "User";

    return (
    <div style={{display: "flex"}} id="header">
        <h1>{logo}</h1>
        <input type="text" />
        <h1>{userIcon}</h1>
    </div>
    )
}