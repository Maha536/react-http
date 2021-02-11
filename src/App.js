import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <DataFetching/>
    </div>
  );
}

export default App;
