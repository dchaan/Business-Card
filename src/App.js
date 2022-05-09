import logo from './logo.svg';
import Info from './components/Info'
import About from './components/About'
import './App.css';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <Info />
      <About />
    </div>
  );
}

export default App;
