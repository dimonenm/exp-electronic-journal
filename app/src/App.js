import logo from './images/logo.svg';
import './App.css';
import TestComponent from './components/TestComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="HELLO" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TestComponent text="WORLD" />
        <TestComponent text="!!!" />
      </header>
    </div>
  );
}

export default App;
