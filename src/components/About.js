import { Component } from "react";
import {User} from "./User";
import {UserClass} from "./UserClass";
import { UserContext } from "../utils/UserContext";

export class About extends Component{
constructor(props){
    super(props);

    // console.log(" Parent Constructor ");
}

componentDidMount(){
    // console.log("Parent Did mount");
}
    render(){
    // console.log(" Parent Render ");

        return (
            <div>
                <h1>About Class Component</h1>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="text=xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                {/* <User name={"Sahil Savaliya (Function)"}/> */}
                <UserClass name = {"First"} location= {"Bhopal"}/>

            </div>
        )
    }
}



