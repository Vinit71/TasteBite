import { useEffect, useState } from "react";

const User = (props) =>{
    // const {name} = props.name;    
    useEffect(()=>{
        fetchDetails();
        console.log("useEffect called");
        
        return()=>{
            clearInterval(myInterval);
        }
    },[])

    const myInterval = setInterval(() => {     //starting a interval
        console.log("Hey");
    }, 1000);

    const [userData, setUserData] = useState({});

    const userName = "vinit71"
    const fetchDetails = async () =>{
        const userData = await fetch(`https://api.github.com/users/${userName}`);
        const jsonData = await  userData.json();
        setUserData(jsonData);
        console.log(jsonData);
        
    }
        const {name, bio, avatar_url} = userData;
    return (
        <div className="card-about">
            <img src={avatar_url} alt="User Avatar" className="avatar-about" />
            <div className="card-about-content">
                <h2>{name}</h2>
                <h3>{bio}</h3>
            </div>
        </div>
    )
}

export default User;