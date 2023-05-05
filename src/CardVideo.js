import React from "react";
import InfosUser from "./InfosUsuarios";

export default function CardVideo(props){
console.log(props)
    
    
    return (
        
        <div className="box-pagina-principal" onClick={()=>props.reproduzirVideo(props.video.nome)} > 
        <img src={props.video.imagem}/>

            <InfosUser infosUser={props.infosUsuario}/>

        </div>
        
        
    )

}
