import { NavBar } from "./components/NavBar";

import logo from './assets/logo-pethit.png';

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
        <div className="sobre-content">
          <h1>Rock’n’Roll Sugar Darling</h1>
          <h2>Little Joe deu mais de um passeio pelo lado selvagem de Nova York, como cantou Lou Reed em “Walk on the Wild Side”. Então, se ele, Joe Dallessandro, o ator queridinho de Andy Warhol, pede em uma introdução especialmente gravada para Pethit que prestemos atenção no novo disco do cantor, é bom levar Rock’n’Roll Sugar Darling em conta. O terceiro álbum do músico e ator é um passo ousado em direção ao glam e até ao punk (a referência dos Stooges está bem clara em “Quero Ser Seu Cão”). O disco alterna entre a malícia da faixa-título – “Doce como açúcar, explode na sua boca, vem chupar meu rock and roll” –, os amores intensos de “Romeo” e as despedidas doloridas da excelente “De Trago em Trago”.</h2>

          <p>Pedro Antunes Publicado em 24/11/2014, às 12h05 - Atualizado em 23/02/2015, às 18h28.<br /> <a href="https://rollingstone.uol.com.br/guia-cd/rocknroll-sugar-darling/" target="_blank">https://rollingstone.uol.com.br/guia-cd/rocknroll-sugar-darling/</a></p>
        </div>
      
      </section>
    </div>
  )
}

export default App
