import gcss from './App.module.css';
import './assets/fonts/openSans.css';
import Alcance from './components/Alcance';
//import Alcance from './components/Layout/Alcance';
import Header from './components/Layout/Header';


function App() {
  return (
    <>
    <div id="scroll-body-container">
      <Header />
      <main>
        <section id="alcance">
          <Alcance />
        </section>
      </main>
      <footer></footer>
    </div>
    </>
  );
}

export default App;
