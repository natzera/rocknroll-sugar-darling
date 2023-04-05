import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';
 
import logo from '../assets/logo-pethit.png';

import '../styles/navbar.scss';

export function NavBar() {
  return(
    <nav>
      <div className="content-logo">
        <img src={logo} />
      </div>
      <div className="content-navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
          <li>
            <a href="/">Músicas</a>
          </li>
          <li>
            <a href="/">Agenda</a>
          </li>
          <li>
            <a href="/">Contatos</a>
          </li>
        </ul>
      </div>
      <div className="content-sociais">
        <a href="/"><FacebookLogo className="social-icons" size={32}  /></a>
        <a href="/"><InstagramLogo className="social-icons" size={32} /></a>
        <a href="/"><TwitterLogo className="social-icons" size={32} /></a>
      </div>
    </nav>
  );
}