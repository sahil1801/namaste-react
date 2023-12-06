import React from "react";


export class UserClass extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
           userInfo:{
            name: "Dummy",
            location: "Default",
           }
        }

        // console.log(this.props.name + " Child Constructor ");    
    }

    async componentDidMount(){
        // console.log(this.props.name + "Child Did mount");
        // API call

        const data = await fetch("https://api.github.com/users/sahil1801");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
        console.log(json);
    }

    render(){
        //  console.log(this.props.name + " Child Render ");

        const {name, location, avatar_url} = this.state.userInfo;

        return <div className="user-card">
        <img src={avatar_url}/>    
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>Contact: @spsavaliya</h4>
    </div>
    }  
}

// export default UserClass;