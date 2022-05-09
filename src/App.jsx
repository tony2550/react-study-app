import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Hello from './components/Hello';
import Wrapper from './components/Wrapper';

Hello.defaultProps = {
  name: 'Do Do Sam',
};

const App = () => {
  const [page, setPage] = useState(0);

  return (
    <div>
      <h2 className="app-header">Mookie's React study</h2>
      <div className="app-navbar">
        <ul className="navbtn-wrapper">
          <li onClick={() => setPage(0)}>Chapter1-2</li>
          <li onClick={() => setPage(1)}>Chapter3-4</li>
        </ul>
      </div>
      <div className="app-content">
        {page === 0 ? (
          <Wrapper>
            <Hello name="mookie" backnumber="27" team="yeon baseball" isCaptain />
            <Hello backnumber="45" team="Boston Pinksox" />
            <Hello name="Dohyun Kim" backnumber="4" team="DITeam" />
          </Wrapper>
        ) : (
          <Counter />
        )}
      </div>
    </div>
  );
};

export default App;
