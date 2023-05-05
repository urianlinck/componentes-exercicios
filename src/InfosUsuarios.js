import React from "react";

export default function InfosUser (props){
    return(
        <>
        <p>{props.infosUser.user}</p>
        <ul>
            <li>Nome: {props.infosUser.nome}</li>
            
            <img src={props.infosUser.foto} width={50}/>
        </ul>
        </>
    )
}