import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import { useDispatch } from 'react-redux';

const App: React.FC = () => {
  const dispatch = useDispatch();
  return <CounterContainer />
};

export default App;
