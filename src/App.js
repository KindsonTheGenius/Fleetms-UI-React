import logo from './logo.svg';
import './App.css';
import Countries from './Countries'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Countries></Countries>
    </div>
  );
}

export default App;
