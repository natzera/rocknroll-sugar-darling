import { NavBar } from "./components/NavBar";
import { Title } from './components/Ttile';
import { Subtitle } from './components/Subtitle';
import { Footer } from "./components/Footer";

import { MUSICS } from './utils/musics';
import { STREAMINGS } from './utils/streamings';
import { SHOWS } from './utils/shows';

import logo from './assets/logo-pethit.png';
import covercd from './assets/cd-thiago-pethit.jpg';

import './styles/home.scss';
import './styles/_global.scss';


interface DATA {
  music?: {
    id: string
    name: string
  },
  streaming?: {
    id: string
    name: string
    link:  string
  },
  show?: {
    id: string,
    month?: string,
    info: string,
    local: string
  }
} 

function App({}: DATA) {
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
              {MUSICS.map(music => {
                return(
                  <p key={music.id}>{music.id}. {music.name}</p>
                )
              })}
            </div>

            <div className="ouca-content">
              <Subtitle
                name="Ouça"
              />

              {STREAMINGS.map((streaming) => {
                return(
                  <p key={streaming.id}><a href={streaming.link} target="_blank">{streaming.name}</a></p>
                )
              })}
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
            {SHOWS.map((show) => {
              return(
                <div key={show.id}>
                  <Subtitle name={show.month}/>
                  <p>{show.info}<br/>{show.local}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
