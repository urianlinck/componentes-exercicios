import React from "react";
import InfosUser from "./InfosUsuarios";

export default function CardVideo(){

    function reproduzirVideo() {
        alert("O vídeo está sendo reproduzido");
    }
    return (
        
        <div className="box-pagina-principal" onClick={reproduzirVideo} >
            <img src="https://picsum.photos/400/400?a=1" alt="" />
            <h4>Video</h4>
            <InfosUser/>
        </div>
        
        
    )

}
