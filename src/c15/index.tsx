import React from "react";

interface Getting {
    name:string;
}
const Hello = (props:Getting) => <h1>{props.name}</h1>;
export default Hello;