import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';

import logo from '../assets/logo-pethit.png';

import '../styles/footer.scss'

export function Footer() {
  return(
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
  )
}