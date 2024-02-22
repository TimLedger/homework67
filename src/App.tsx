import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Note from './components/Note/Note';
import BlockButton from './components/BlockButton/BlockButton';
import Footer from './components/Footer/Footer';
import Block from './components/Block/Block';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Calculator from './components/Calculator/Calculator';
import Unlock from './components/Unlock/Unlock';
import './App.css';

function App() {
  return (
    <div className="container">
      <BlockButton />
      <Note />
      <div className="phone">
        <Header />
        <div className="screen">
            <Routes>
              <Route path="/" element={<Block />} />
              <Route path="/password" element={<Unlock />}/>
              <Route path="/home" element={<Home />}/>
              <Route path="/apps/calculator" element={<Calculator />  }/>
              <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
