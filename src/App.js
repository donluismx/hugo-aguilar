import gcss from './App.module.css';
import './assets/fonts/openSans.css';
import Header from './components/Layout/Header';
import Alcance from './components/Alcance';
import Resumen from './components/Resumen';
import Tipos from './components/Tipos';
import Fases from './components/Fases';
import Experiencia from './components/Experiencia';
import Reflexion from './components/Reflexion';
import Footer from './components/Layout/Footer';


function App() {
  return (
    <>
    <div id="scroll-body-container">
      <header>
        <Header />
      </header>
      <main>
        <section id="alcance">
          <Alcance />
        </section>
        <section id="resumen">
          <Resumen />
        </section>
        <section id="tipos">
          <Tipos />
        </section>
        <section id="fases">
          <Fases />
        </section>
        <section id="experiencia">
          <Experiencia />
        </section>
        <section id="reflexion">
          <Reflexion />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  );
}

export default App;
