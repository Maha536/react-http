import logo from './logo.svg';
import './App.css';
import PutForm from './components/PutForm';
import DeleteForm from './components/DeleteForm';
import ClassCounter from './Hooks/ClassCounter';
import HookCounter from './Hooks/HookCounter';
import HookCounterTwo from './Hooks/HookCounterTwo';
import HookCounterThree from './Hooks/HookCounterThree';
import HookCounterFour from './Hooks/HookCounterFour';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <HookCounterFour/>
    </div>
  );
}

export default App;
