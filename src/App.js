import logo from './logo.svg';
import nightcar from './imgs/nightcarfinal.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <a
        href="https://open.spotify.com/playlist/68dV6odIn9LOItqkGcb2Wi?si=bd253b1e958d43dd"
      >
        <button type="submit">
          <img src={nightcar} alt={logo} className='nightcar' border='0'></img>
        </button>
      </a> */}
      <div className="intro-container">
        <span className='subheader'>
          THE 1ST WEBSITE BY ADRIEN QI
        </span>
        <span className='header'>
          ADRI
        </span>
        <span className='header2'>
          ENQI
        </span>
        <span className='subheader'>
          VOLUME 1
        </span>
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </div>
    </div>
  );
}

export default App;
