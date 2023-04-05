import { NavBar } from "./components/NavBar";

import logo from './assets/logo-pethit.png';

import './styles/home.scss';
import './styles/_global.scss';

function App() {
  return (
    <div className="App">
      <NavBar />

      <section>
        <img src={logo} />
      </section>
    </div>
  )
}

export default App
