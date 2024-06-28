import './App.css';
import UseStatePrev from './components/state/UseStatePrev';
import Usestateobject from './components/state/Usestateobject';
import UsestateArray from './components/state/UsestateArray';
import UseFetchData from './components/effect/UseFetchData';

function App() {
  return (
    <div className="App">
      {/* <h1>State Previous value</h1>
      <UseStatePrev />
      <h1>State as a Object</h1>
      <Usestateobject />
      <h1>State as a Array</h1>
      <UsestateArray /> */}
      <h1>Useeffect</h1>
      <UseFetchData />
    </div>
  );
}

export default App;
