import React, { useState, useRef, useMemo, useCallback, useReducer } from 'react';
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

const initialState = {
  inputs: {
    name: '',
    backnumber: '',
    position: '',
  },
  players: [
    { id: 1, name: 'Mookie', backnumber: '27', position: 'pitcher', active: true },
    { id: 2, name: 'Dohyun', backnumber: '45', position: 'Short Stop', active: false },
    { id: 3, name: 'DoDoSam', backnumber: '4', position: 'Right Fielder', active: false },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case 'CREATE_PLAYER':
      return {
        inputs: initialState.inputs,
        players: [...state.players, action.player],
      };
    case 'TOGGLE_PLAYER':
      return {
        ...state,
        players: state.players.map((player) => (player.id === action.id ? { ...player, active: !player.active } : player)),
      };
    default:
      return state;
  }
};

const App = () => {
  const [page, setPage] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { players } = state;
  const { name, backnumber, position } = state.inputs;

  const nextId = useRef(4);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_PLAYER',
      player: {
        id: nextId.current,
        name,
        backnumber,
        position,
      },
    });
    nextId.current += 1;
  }, [name, backnumber, position]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_PLAYER',
      id,
    });
  }, []);

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
        <div className="activeCount">활성 선수 수 : 0</div>
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
            <PlayerList players={players} onToggle={onToggle} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
