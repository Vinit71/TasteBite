//class based components
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);   //super() is used to initilize the parent class constructor so that we can use all properties from the parent class
        this.userName = "vinit71"
        this.state = {
            userData: {},
        }
        // console.log("Constructor called");   
    }

    async componentDidMount(){
        const fetchData = await fetch(`https://api.github.com/users/${this.userName}`)
        const jsonData = await fetchData.json();
        this.setState({
            userData : jsonData,
        })

        // this.interval = setInterval(() => {     //start an interval
        //     console.log("Hi");
        // }, 1000);
        // console.log("Component Mount");
    }

    componentDidUpdate(){
        // console.log("Component Updated");
    }

    componentWillUnmount(){
        // console.log("Component UnMounted");
        clearInterval(this.interval);   //clear interval
    }
    render(){
        // console.log("render");
        const {name, bio, avatar_url} = this.state.userData;
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
}

export default UserClass;