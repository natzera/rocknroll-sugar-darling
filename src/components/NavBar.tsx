import { FacebookLogo, InstagramLogo, TwitterLogo, List } from 'phosphor-react';
import { Link } from 'react-scroll';
 
import logo from '../assets/logo-pethit.png';

import '../styles/navbar.scss';

export const NAVITEMS = [
  {
    id: '1',
    name: 'Home',
    path: 'home'
  },
  {
    id: '2',
    name: 'Sobre',
    path: 'sobre'
  },
  {
    id: '3',
    name: 'Álbum',
    path: 'album'
  },
  {
    id: '4',
    name: 'Agenda',
    path: 'agenda'
  },
  {
    id: '5',
    name: 'Contatos',
    path: 'footer'
  },

]

export function NavBar() {
  return(
    <nav>
      <div className="content-logo">
        <img src={logo} />
      </div>
      <div className="content-navbar">
        <ul>
          {NAVITEMS.map((item) => {
            return(
              <li>
                <Link key={item.id} to={item.path} spy={true} smooth={true} offset={0} duration={500}>{item.name}</Link>
              </li>
            )
          })}
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
      <div className="content-mobile">
        <List className="list-icons" size={32} />
      </div>
    </nav>
  );
}