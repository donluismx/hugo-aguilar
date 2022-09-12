import styles from './App.module.css';
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
        <section className={styles.mainSections} id="alcance">
          <Alcance />
        </section>
        <section className={styles.mainSections} id="resumen">
          <Resumen />
        </section>
        <section className={styles.mainSections} id="tipos">
          <Tipos />
        </section>
        <section className={styles.mainSections} id="fases">
          <Fases />
        </section>
        <section className={styles.mainSections} id="experiencia">
          <Experiencia />
        </section>
        <section className={styles.mainSections} id="reflexion">
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
