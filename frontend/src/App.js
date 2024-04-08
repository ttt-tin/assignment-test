import './App.css';
import NavBar from './components/NavBar';
import Slogan from './components/Slogan';
import Joke from './components/Joke';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <section className='content'>
        <Slogan></Slogan>
        <Joke></Joke>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
