import React from "react";
import "./styles.css";
import CardVideo from "./CardVideo";




export default function App() {
  const titulo = "Título do vídeo";
  function infosVideo(titulo){
    alert(`O vídeo ${titulo} está sendo reproduzido`);
  }

  const video1 = {
    imagem: "https://picsum.photos/400/400?a=1",
    nome: "titulo1"
  }
  const video2 = {
    imagem: "https://picsum.photos/400/400?a=1",
    nome: "titulo2"
  }
  const video3 = {
    imagem: "https://picsum.photos/400/400?a=1",
    nome: "titulo3"
  }
  const video4 = {
    imagem: "https://picsum.photos/400/400?a=1",
    nome: "titulo4"
  }
  const video5 = {
    imagem: "https://picsum.photos/400/400?a=1",
    nome: "titulo5"
  }
  const video6 = {
    imagem: "https://picsum.photos/400/400?a=1",
    nome: "titulo6"
  }
  const video7 = {
    imagem: "https://picsum.photos/400/400?a=1",
    nome: "titulo7"
  }
  const video8 = {
    imagem: "https://picsum.photos/400/400?a=1",
    nome: "titulo8"
  }
  const user1 = {
    nome: "nome1",
    foto: "https://picsum.photos/400/400?a=2"
  }
  const user2 = {
    nome: "nome2",
    foto: "https://picsum.photos/400/400?a=3"
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>
          <section className="painel-de-videos">
          
          <CardVideo video={video1} reproduzirVideo={infosVideo} infosUsuario={user1}/>
          <CardVideo video={video2} reproduzirVideo={infosVideo} infosUsuario={user2}/>
          <CardVideo video={video3} reproduzirVideo={infosVideo} infosUsuario={user1}/>
          <CardVideo video={video4} reproduzirVideo={infosVideo} infosUsuario={user2}/>
          <CardVideo video={video5} reproduzirVideo={infosVideo} infosUsuario={user1}/>
          <CardVideo video={video6} reproduzirVideo={infosVideo} infosUsuario={user2}/>
          <CardVideo video={video7} reproduzirVideo={infosVideo} infosUsuario={user1}/>
          <CardVideo video={video8} reproduzirVideo={infosVideo} infosUsuario={user2}/>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
