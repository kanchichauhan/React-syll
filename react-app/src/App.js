import './App.css';
import UseStatePrev from './components/state/UseStatePrev';
import Usestateobject from './components/state/Usestateobject';
import UsestateArray from './components/state/UsestateArray';
import UseFetchData from './components/effect/UseFetchData';
import CompA from './components/context/CompA';
import React from 'react';
import Counter from './components/reducer/SimpleCounter';
import ComplexCounter from './components/reducer/complexCounter';
import MultipleReducers from './components/reducer/MultipleReducers';
import ContextReducer from './components/reducer/ContextReducer';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <h1>State Previous value</h1>
      <UseStatePrev />
      <h1>State as a Object</h1>
      <Usestateobject />
      <h1>State as a Array</h1>
      <UsestateArray />
      <h1>Useeffect</h1>
      <UseFetchData />
      <h1>useContext</h1>
      <UserContext.Provider value={'Kanchi'}>
        <ChannelContext.Provider value={'starplus'}>
          <CompA />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <h1>Usereducer</h1>
      {/* <Counter />
      <ComplexCounter />
      <MultipleReducers /> */}
      <h1>context reducer</h1>
      <ContextReducer />
    </div>
  );
}

export default App;
