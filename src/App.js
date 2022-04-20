import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

function App() {

  const a = 2;
  const b = 3;

  return (
    <div className="App">
      <header className="App-header">
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
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Mango</li>
        </ul>

      <h3 data-testid="test1">Hello from Ikenna, React first test practice</h3>

      <span title='sum'>{a+b }</span>
      
      <Login />


      </header>
    </div>
  );
}

export default App;
