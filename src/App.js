import logo from './logo.svg';
import './App.css';
import {url} from 'src\parsing.js';
import {destination_address} from 'src\webInput.js';
import {origin_address} from 'src\webInput.js';
require('dotenv').config({path:'\privateVariables.env'});
import gmaps_apikey from '\privateVariables.env';
import apiDest from 'parsing.js';
import apiOrig from 'parsing.js';



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
        <iframe src={url} title="Directions">Frame Body</iframe>
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
