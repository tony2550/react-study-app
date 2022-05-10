import React, { useState, useRef } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Hello from './components/Hello/Hello';
import Wrapper from './components/Hello/Wrapper';
import InputEx from './components/Input/InputEx';
import PlayerList from './components/PlayersPage/PlayerList';

Hello.defaultProps = {
  name: 'Do Do Sam',
};

const App = () => {
  const [page, setPage] = useState(0);

  const players = [
    { id: 1, name: 'Mookie', backnumber: '27', position: 'pitcher' },
    { id: 2, name: 'Dohyun', backnumber: '45', position: 'Short Stop' },
    { id: 3, name: 'DoDoSam', backnumber: '4', position: 'Right Fielder' },
  ];

  const nextId = useRef(4);

  const onCreater = () => {
    nextId.current += 1;
  };

  return (
    <div>
      <h2 className="app-header">Mookie's React study</h2>
      <div className="app-navbar">
        <ul className="navbtn-wrapper">
          <li onClick={() => setPage(0)}>Chapter1-2</li>
          <li onClick={() => setPage(1)}>Chapter3</li>
          <li onClick={() => setPage(2)}>Chapter4-6</li>
          <li onClick={() => setPage(3)}>Chapter7</li>
        </ul>
      </div>
      <div className="app-content">
        {page === 0 ? (
          <Wrapper>
            <Hello name="mookie" backnumber="27" team="yeon baseball" isCaptain />
            <Hello backnumber="45" team="Boston Pinksox" />
            <Hello name="Dohyun Kim" backnumber="4" team="DITeam" />
          </Wrapper>
        ) : page === 1 ? (
          <Counter />
        ) : page === 2 ? (
          <InputEx />
        ) : (
          <PlayerList players={players} />
        )}
      </div>
    </div>
  );
};

export default App;
