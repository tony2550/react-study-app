import React, { useState, useRef, useMemo, useCallback } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import CreatePlayer from './components/CreatePlayer';
import Hello from './components/Hello/Hello';
import Wrapper from './components/Hello/Wrapper';
import InputEx from './components/Input/InputEx';
import PlayerList from './components/PlayersPage/PlayerList';

Hello.defaultProps = {
  name: 'Do Do Sam',
};

const countActivePlayers = (players) => {
  console.log('활성 선수 수를 세는중....');
  return players.filter((player) => player.active).length;
};

const App = () => {
  const [page, setPage] = useState(0);

  const [inputs, setInputs] = useState({
    name: '',
    backnumber: '',
    position: '',
  });

  const { name, backnumber, position } = inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const [players, setPlayers] = useState([
    { id: 1, name: 'Mookie', backnumber: '27', position: 'pitcher', active: true },
    { id: 2, name: 'Dohyun', backnumber: '45', position: 'Short Stop', active: false },
    { id: 3, name: 'DoDoSam', backnumber: '4', position: 'Right Fielder', active: false },
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const player = {
      id: nextId.current,
      name,
      backnumber,
      position,
    };
    setPlayers((players) => players.concat(player));

    setInputs({
      name: '',
      backnumber: '',
      position: '',
    });
    nextId.current += 1;
  }, [name, backnumber, position]);

  const onRemove = useCallback((id) => {
    setPlayers((players) => players.filter((player) => player.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setPlayers((players) => players.map((player) => (player.id === id ? { ...player, active: !player.active } : player)));
  }, []);

  const count = useMemo(() => countActivePlayers(players), [players]);

  return (
    <div>
      <h2 className="app-header">Mookie's React study</h2>
      <div className="app-navbar">
        <ul className="navbtn-wrapper">
          <li onClick={() => setPage(0)}>Chapter1-2</li>
          <li onClick={() => setPage(1)}>Chapter3</li>
          <li onClick={() => setPage(2)}>Chapter4-6</li>
          <li onClick={() => setPage(3)}>Chapter7-</li>
        </ul>
        <div className="activeCount">활성 선수 수 : {count}</div>
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
          <>
            <CreatePlayer name={name} backnumber={backnumber} position={position} onChange={onChange} onCreate={onCreate} />
            <PlayerList players={players} onRemove={onRemove} onToggle={onToggle} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
