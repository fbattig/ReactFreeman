import React from "react";
import {ThemeSelector} from './ThemeSelector';
import { ActionButton } from "./ActionButton";
import { Message } from './Message';


export class App extends React.Component {

  state={
    counter: 0
  }

incrementCounter=() => {
  this.setState({counter: this.state.counter + 1 });
}

  render(){
  return (
    <div className='m-2 text-center'>
      <ThemeSelector >
      <Message theme='primary' message={`Counter= ${this.state.counter}`}/>
      <ActionButton theme='secondary' text='Increment' callback={ this.incrementCounter }/>
    </ThemeSelector>
    </div>
  );
}
}
