import { NavBar } from "./components/NavBar";

import logo from './assets/logo-pethit.png';

import covercd from './assets/cd-thiago-pethit.jpg';
import imagesm01 from './assets/thiago-pethit-rocknroll-sugar-darling_sm_dark.jpg';
import imagesm02 from './assets/thiago-pethit-rocknroll-sugar-darling_lg_sm_dark01.jpg';
import imagesm03 from './assets/thiago-pethit-rocknroll-sugar-darling_sm_dark02.png';

import './styles/home.scss';
import './styles/_global.scss';

function App() {
  return (
    <div className="App">
      <NavBar />

      <section className="home">
        <img src={logo} />
      </section>

      <section className="sobre">
        <div className="container">
          <div className="sobre-content">
            <h1>Rock'n'Roll Sugar Darling</h1>
            <h2>Little Joe deu mais de um passeio pelo lado selvagem de Nova York, como cantou Lou Reed em “Walk on the Wild Side”. Então, se ele, Joe Dallessandro, o ator queridinho de Andy Warhol, pede em uma introdução especialmente gravada para Pethit que prestemos atenção no novo disco do cantor, é bom levar Rock'n'Roll Sugar Darling em conta. O terceiro álbum do músico e ator é um passo ousado em direção ao glam e até ao punk (a referência dos Stooges está bem clara em “Quero Ser Seu Cão”). O disco alterna entre a malícia da faixa-título – “Doce como açúcar, explode na sua boca, vem chupar meu rock and roll” –, os amores intensos de “Romeo” e as despedidas doloridas da excelente “De Trago em Trago”.</h2>

            <p>Pedro Antunes Publicado em 24/11/2014, às 12h05 - Atualizado em 23/02/2015, às 18h28.<br /> <a href="https://rollingstone.uol.com.br/guia-cd/rocknroll-sugar-darling/" target="_blank">https://rollingstone.uol.com.br/guia-cd/rocknroll-sugar-darling/</a></p>
          </div>
        </div>
      </section>

      <section className="musicas">
        <div className="container">
          <h1>Músicas</h1>

          <div className="content">
            <div className="cd-content">
              <img src={covercd} />
              <span>3 de novembro de 2014<br /> 11 músicas, 34 minutos <br />℗ 2014 Thiago Pethit [dist. Tratore]</span>
            </div>

            <div className="faixas-content">
              <h3>Faixas</h3>
              <p>1. Intro</p>
              <p>2. Rock'n'Roll Sugar Darling</p>
              <p>3. Romeo</p>
              <p>4. Quero ser Seu Cão</p>
              <p>5. Save The Last Dance</p>
              <p>6. De Trago Em Trago</p>
              <p>7. 1992</p>
              <p>8. Honey Bi</p>
              <p>9. Voodoo</p>
              <p>10. Perdedor</p>
              <p>11. Story In Blue</p>
            </div>

            <div className="ouca-content">
              <h3>Ouça</h3>
              <p><a href="https://music.apple.com/br/album/rocknroll-sugar-darling/926072778" target="_blank">Apple Music</a></p>
              <p><a href="https://open.spotify.com/album/5ATg9GTiStPN3EfGW557Ju" target="_blank">Spotify</a></p>
              <p><a href="https://www.deezer.com/br/album/8986555" target="_blank">Deezer</a></p>
            </div>
          </div>
        </div>
      </section>

      <section className="agenda">
        <div className="container">
          <h1>Agenda 2017</h1>

          <div className="agenda-content">
            <h2>Janeiro</h2>
            <p>11 / Janeiro - Bauru SP<br/>@ Sesc Bauru 21h</p>
            <p>20 / Janeiro - Bauru SP<br/>@ Part. Especial no show de Juliana Kehl no Sesc Pompeia 21h</p>

            <h2>Fevereiro</h2>
            <p>04 / Fevereiro - São Paulo SP<br/>@ Sesc Consolação 21h</p>

            <h2>Março</h2>
            <p>18 / Março - Serra ES<br/>@ Centro Cultural Eliziario Rangel 20h</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
