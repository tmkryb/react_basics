import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ForLoopComponent } from './components/forLoopComponent';
import { InputComponent } from './components/inputComponent';
import { ApiComponent } from './components/apiComponent';
import { ReactstrapComponent } from './components/reactstrapComponent';


export class App extends React.Component {
   
  constructor(){
    super()
    this.state = {};
  }

  render(){
    return (
      <>
        <ReactstrapComponent propsText="Jakiś tekst" propsText2={() => {alert("alert")}}></ReactstrapComponent>
      </>
    )
  }
}

export default App;
