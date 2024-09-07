import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(){
        super();
        // console.log("Parent Constructor");
    }

    componentDidMount(){
        // console.log("Parent did Mount");
        
    }
    render(){
        // console.log("Parent render");
        
        return(
            <>
                <User name={"Vinit (Function)"}/>
                <hr />
                {/* <UserClass name={"1st"}/> */}
            </>
        )
    }
}
export default About;