import React from 'react';
import List from './list';
import { createStore } from 'redux';
const showState = (state = 0) => {
  return state;
};
const store = createStore(showState);
console.log(store.getState());

const things = [
  {
  a:'Idk',
  thing:false
  },
  {
  a: 'nowIKnow',
  thing: true
}


];

export default class App extends React.Component{
  constructor(props){
    super(props);

      this.state = {
        things
      };
  }
  render() {
    return(

      <div>
        <h1> who dat </h1>
        <List things={this.state.things} />
      </div>

    );
  }

}
