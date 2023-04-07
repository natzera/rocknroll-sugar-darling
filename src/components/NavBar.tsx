import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';
import { Link } from 'react-scroll';
 
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
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="sobre" spy={true} smooth={true} offset={0} duration={500}>Sobre</Link>
          </li>
          <li>
            <Link to="album" spy={true} smooth={true} offset={0} duration={500}>Álbum</Link>
          </li>
          <li>
            <Link to="agenda" spy={true} smooth={true} offset={0} duration={500}>Agenda</Link>
          </li>
          <li>
            <Link to="footer" spy={true} smooth={true} offset={0} duration={500}>Contatos</Link>
          </li>
        </ul>
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
    </nav>
  );
}