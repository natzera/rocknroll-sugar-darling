import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';

import { NavBar } from "./components/NavBar";
import { Title } from './components/Ttile';
import { Subtitle } from './components/Subtitle';

import logo from './assets/logo-pethit.png';
import covercd from './assets/cd-thiago-pethit.jpg';

import './styles/home.scss';
import './styles/title.scss';
import './styles/subtitle.scss'
import './styles/_global.scss';


function App() {
  return (
    <div className="App">
      <NavBar />

      <section className="home" id="home">
        <img src={logo} />
      </section>

      <section className="sobre" id="sobre">
        <div className="container">
          <div className="sobre-content">
            <Title
              name="Rock'n'Roll Sugar Darling"
              isDark
            />
            <p>Little Joe deu mais de um passeio pelo lado selvagem de Nova York, como cantou Lou Reed em “Walk on the Wild Side”. Então, se ele, Joe Dallessandro, o ator queridinho de Andy Warhol, pede em uma introdução especialmente gravada para Pethit que prestemos atenção no novo disco do cantor, é bom levar Rock'n'Roll Sugar Darling em conta. O terceiro álbum do músico e ator é um passo ousado em direção ao glam e até ao punk (a referência dos Stooges está bem clara em “Quero Ser Seu Cão”). O disco alterna entre a malícia da faixa-título – “Doce como açúcar, explode na sua boca, vem chupar meu rock and roll” –, os amores intensos de “Romeo” e as despedidas doloridas da excelente “De Trago em Trago”.</p>

            <span>Pedro Antunes Publicado em 24/11/2014, às 12h05 - Atualizado em 23/02/2015, às 18h28.<br /> <a href="https://rollingstone.uol.com.br/guia-cd/rocknroll-sugar-darling/" target="_blank">https://rollingstone.uol.com.br/guia-cd/rocknroll-sugar-darling/</a></span>
          </div>
        </div>
      </section>

      <section className="musicas" id="album">
        <div className="container">
          <Title
            name="Álbum"
          />

          <div className="content">
            <div className="cd-content">
              <img src={covercd} />
              <span>3 de novembro de 2014<br /> 11 músicas, 34 minutos <br />℗ 2014 Thiago Pethit [dist. Tratore]</span>
            </div>

            <div className="faixas-content">
              <Subtitle
                name="Faixas"
              />
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
              <Subtitle
                name="Ouça"
              />
              <p><a href="https://music.apple.com/br/album/rocknroll-sugar-darling/926072778" target="_blank">Apple Music</a></p>
              <p><a href="https://open.spotify.com/album/5ATg9GTiStPN3EfGW557Ju" target="_blank">Spotify</a></p>
              <p><a href="https://www.deezer.com/br/album/8986555" target="_blank">Deezer</a></p>
            </div>
          </div>
        </div>
      </section>

      <section className="agenda" id="agenda">
        <div className="container">
          <Title
            name="Agenda 2017"
          />

          <div className="agenda-content">
            <Subtitle
              name="Janeiro"
            />
            <p>11 / Janeiro - Bauru SP<br/>@ Sesc Bauru 21h</p>
            <p>20 / Janeiro - Bauru SP<br/>@ Part. Especial no show de Juliana Kehl no Sesc Pompeia 21h</p>

            <Subtitle
              name="Fevereiro"
            />
            <p>04 / Fevereiro - São Paulo SP<br/>@ Sesc Consolação 21h</p>

            <Subtitle
              name="Março"
            />
            <p>18 / Março - Serra ES<br/>@ Centro Cultural Eliziario Rangel 20h</p>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div className="container">
          <div className="content-logo">
            <img src={logo} />
          </div>

          <div className="content-sociais">
            <a href="https://www.facebook.com/thiagopethitoficial/?locale=pt_BR">
              <FacebookLogo className="social-icons" size={32} />
            </a>
            <a href="https://www.instagram.com/thiagopethit/">
              <InstagramLogo className="social-icons" size={32} />
            </a>
            <a href="https://twitter.com/thiagopethit/">
              <TwitterLogo className="social-icons" size={32} />
            </a>
          </div>

          <div className="content-rights">
            <p>PETHIT<br/>
            Art direction & design for independent artist Thiago Pethit 3rd album<br/> Rock'n'Roll Sugar Darling. Listen to his music <a href="https://cargocollective.com/pedroinoue/Pethit-Rock-n-Roll-Sugar-Darling" target="_blank">here</a>.</p>
          </div>

          <div className="content-rights">
            <p>GIANFRANCO BRICEÑO<br/>Photography by Gianfranco Briceño. See to his work <a href="https://gianfrancobriceno.com.br/thiago-pethit-rocknroll-sugar-darling" target="_blank">here</a>.<br/>100% Independent</p>
          </div>

          <div className="content-rights">
            <p>NATÁLIA BATISTA<br/>Developed by Natália Batista. See to her work <a href="https://github.com/natzera" target="_blank">here</a>.</p>

            <span><p>This application is a project developed during the Production and Multimedia Technician course <br />at SENAC Lapa Scipião in 2017.</p></span>
          </div>
        </div>
      
      </footer>
    </div>
  )
}

export default App
