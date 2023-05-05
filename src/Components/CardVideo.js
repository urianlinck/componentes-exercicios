import React from "react";
import InfosUser from "../InfosUsuarios";
import { BoxPrincipal, 
        ImgBox } from "./style";

export default function CardVideo(props){
console.log(props)
    
    
    return (
        
        <BoxPrincipal onClick={()=>props.reproduzirVideo(props.video.nome)} > 
        <ImgBox src={props.video.imagem}/>

            <InfosUser infosUser={props.infosUsuario}/>

        </BoxPrincipal>
        
        
    )

}
