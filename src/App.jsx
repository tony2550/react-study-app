import './App.css';
import Hello from './components/Hello';

function App() {
  return (
    <div>
      <h2 className="app-header">Mookie's React study</h2>
      <div className="app-navbar">
        <ul className="navbtn-wrapper">
          <li>Verlo</li>
          <li>Max</li>
        </ul>
      </div>
      <div className="app-content">
        <Hello name="mookie" backnumber="27" team="yeon baseball" />
      </div>
    </div>
  );
}

export default App;
