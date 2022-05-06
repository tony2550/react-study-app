import './App.css';
import Hello from './components/Hello';

Hello.defaultProps = {
  name: 'Do Do Sam',
};

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
        <Hello backnumber="45" team="Boston Pinksox" />
      </div>
    </div>
  );
}

export default App;
