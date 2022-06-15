import './App.css';
import Nav from './componentes/Nav/Nav';
import Header from './componentes/Header/Header';
import Main from './componentes/Main/Main'; 
import Noticias from './componentes/Noticias/Noticias';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      <Noticias />
      <Footer />

    </div>
  );
}

export default App;
