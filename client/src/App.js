import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>hello</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a 
        className="App-link"
          href="https://www.youtube.com/watch?v=10GeHGvHUsA&list=RDUHpJzCd_lXo&index=2&ab_channel=Blackbeans"
          target="_youtube"
          >
            Youtube Dance With Me
        </a>
      </header>
    </div>
  );
}

export default App;
