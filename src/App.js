import React, {Component} from 'react';
import './App.css';
import FunctionalComponent from './Components/FunctionalComponent';
import FCHook from './Components/FunctionalComponentHook';
import TwoWayBinding from './Components/TwoWayBinding';
import Assignment from './Components/Assignment';
import FlexiList from './Components/FlexiList';
import Counter from './Components/Counter';
import LifeCycle from './Components/Lifecycle';
import AuxComp from './Components/hoc';
import AuxFragment from './Components/hoc/AuxFragment';

class App extends Component {

  render() {
    return (
      <div className="App">

        <FunctionalComponent />
        <FCHook />
        <TwoWayBinding />

        <Assignment />

        <FlexiList />

        <Counter />
        <LifeCycle />
          <div style={{marginTop: "15px"}}>-------------------------------Rendering multiple elements without real parent DOM -------------</div>
        <AuxComp />
        <AuxFragment />


      </div>
    );
  }
  
}

export default App;
