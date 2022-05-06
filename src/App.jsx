import './App.css';
import Hello from './components/Hello';
import Wrapper from './components/Wrapper';

Hello.defaultProps = {
  name: 'Do Do Sam',
};

const App = () => {
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
        <Wrapper>
          <Hello name="mookie" backnumber="27" team="yeon baseball" isCaptain />
          <Hello backnumber="45" team="Boston Pinksox" />
          <Hello name="Dohyun Kim" backnumber="4" team="DITeam" />
        </Wrapper>
      </div>
    </div>
  );
};

export default App;
