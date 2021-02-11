import logo from './logo.svg';
import React from 'react'
import './App.css';
import PutForm from './components/PutForm';
import DeleteForm from './components/DeleteForm';
import ClassCounter from './Hooks/ClassCounter';
import HookCounter from './Hooks/HookCounter';
import HookCounterTwo from './Hooks/HookCounterTwo';
import HookCounterThree from './Hooks/HookCounterThree';
import HookCounterFour from './Hooks/HookCounterFour';
import ClassCounterOne from './useEffect/ClassCounterOne';
import HookCounterOne from './useEffect/HookCounterOne';
import IntervalClassCounter from './useEffect/IntervalClassCounter';
import IntervalHookCounter from './useEffect/IntervalHookCounter';
import DataFetching from './useEffect/DataFetching';
import ComponentC from './useContext/ComponentC';
export const userContext = React.createContext("Maha")
export const passContext = React.createContext("Hari")

function App() {
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <ComponentC/>
    </div>
  );
}

export default App;
