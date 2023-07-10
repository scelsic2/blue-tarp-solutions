import logo from './logo.svg';

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Technologies from './components/Technologies';


function App() {
  return (
    <div className="App">
     <Header />
     <Main />
     <Technologies />
     <Footer />
    </div>
  );
}

export default App;
