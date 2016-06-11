import _ from 'lodash';
import React from 'react';
import List from './list';
import { createStore } from 'redux';
const maybeSo = [true, false ];
const o = [];
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


  const whatWhat = [
    {
    a: 'LaLa',
    thing: false
    },
    {
    a: 'ghostSoda',
    thing: true
    },
    {
    a: 'Beep',
    thing: false
    },
    {
    a: 'pepsiBlue',
    thing: true
    }

  ];

  console.log(_.sample(whatWhat));

  const x = {
      a: 'aThing_',
      thing: _.sample(maybeSo)
    }


console.log(_.times(7, _.partial(_.uniqueId, _.forEach(x.a, function(val, key,x){
  o.push(x);

}))));
console.log(o);



  // )));
  console.log(x.a);
  console.log(x.thing);

  console.log(_.forEach(x, function(val,key){
    o.push(key);

}));
console.log(o);


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
