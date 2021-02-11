import logo from './logo.svg';
import React,{useState, useReducer} from 'react'
import './App.css';
import ComponentB from './useReduceWithUseContext/ComponentB';
import ComponentA from './useReduceWithUseContext/ComponentA';
import ComponentC from './useReduceWithUseContext/ComponentC';
import DataFetchingOne from './useReducer/DataFetchingOne';
import DataFetchingTwo from './useReducer/DataFetchingTwo';
import FocusInput from './useRef/FocusInput';
/*import PutForm from './components/PutForm';
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
import CounterOne from './useReducer/CounterOne';
import Counter2 from './useReducer/Counter2';
import CounterThree from './useReducer/CounterThree';
//export const userContext = React.createContext("Maha")
//export const passContext = React.createContext("Hari")
*/
export const CountContext = React.createContext()
/*
const initialState = 0
const reducer = (state, action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}
*/
function App() {
  //const [count, dispatch] = useReducer(reducer,initialState)
  return (
    <div className="App">
      <FocusInput/>
    </div>
      );
   {/*} <CountContext.Provider value={{countState : count, countDispatch : dispatch}}>
      <div className="App">
          <h1>Hello</h1>
          <h1>Count - {count}</h1>
          <ComponentA/>
          <ComponentB/>
          <ComponentC/>
      </div>
  </CountContext.Provider>*/}

}

export default App;
