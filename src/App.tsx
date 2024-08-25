import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppSelector, useAppDispatch } from './redux/hooks'
import { increament, decreament } from './redux/slices/counter'
import MyComp from './MyComp';
function App() {
  const count = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Count is {count}</h1>
        <button onClick={() => dispatch(increament())}>Increament</button>
        <button onClick={() => dispatch(decreament())}>Decreament</button>
      </header>
      <MyComp />

    </div>


  );
}

export default App;
