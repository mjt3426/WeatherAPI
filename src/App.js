import logo from './logo.svg';
import './App.css';
import gmaps_apikey from './privateVariables.env';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Work Map API<br></br>
        <button>New Destination</button>
        <button>Start From</button>
          <ul>
            <li>Apple</li>
            <li>Pear</li>
            <li>Peach</li>
            <li>Peach</li>
            <li>Peach</li>
          </ul>
        <code>src/App.js</code> and save to reload.
        </p>
        <iframe src="https://www.google.com/maps/embed/v1/directions?key=${gmaps_apikey}&origin=${apiOrig}&destination=${apiDest}&avoid=tolls" title="Directions">Frame Body</iframe>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Documentation
        </a>

      </header>
      </div>
  );
}

export default App;
