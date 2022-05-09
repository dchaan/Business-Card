import logo from './logo.svg';
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import './App.css';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Interests />
    </div>
  );
}

export default App;
