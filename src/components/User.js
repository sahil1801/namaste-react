import { useState } from "react";

export const User = ({ name }) => {
    const [count] = useState(0);
    const [count2] = useState(1);


    return <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>
        <h2>{name}</h2>
        <h3>Location: Bhopal</h3>
        <h4>Contact: @spsavaliya</h4>
    </div>
}