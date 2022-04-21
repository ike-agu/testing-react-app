import './App.css';
import Login from './components/Login';

function App() {

  const a = 2;
  const b = 3;

  return (
    <div className="App">
      <header className="App-header">




         <p>Learn React</p>

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
