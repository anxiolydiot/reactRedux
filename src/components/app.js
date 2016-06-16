import _ from 'lodash';
import React from 'react';
import List from './list';
// import MoreThings from './more-things';
// import { createStore } from 'redux';
const maybeSo = [true, false ];
const o = [];
// const showState = (state = 0) => {
//   return state;
// };
//
//
// const store = createStore(showState);
// console.log(store.getState());

const things = [
  {
  a:'Idk',
  thing: true
  },
  {
  a: 'nowIKnow',
  thing: false
}


];


  const whatWhats = [
    {
    a: 'LaLa',
    thing: 'bubble'
    },
    {
    a: 'ghostSoda',
    thing: 'white'
    },
    {
    a: 'Beep',
    thing: 'x'
    },
    {
    a: 'pepsiBlue',
    thing: 'kale'
    }

  ];

  console.log(_.sample(whatWhats));

  const x = {
      a: 'aThing_',
      thing: _.sample(maybeSo)
    }


console.log(_.times(7, _.partial(_.uniqueId, _.forEach(x.a, function(val, key, x){
  o.push(x);

}))));
console.log(x,x.a,x.thing,x.a[0])
console.log(o);



  // )));
  console.log(x.a);
  console.log(x.thing);




 (() => {var oke = new Promise (function(resolve, reject) {
   if (true) {
      resolve("gg!");
      console.log('ayyyy');
      console.log(resolve);
   }
   else {
      reject("ibroke");
      console.log('nahhhhh')
   }
});
oke.then(function(val) {
  console.log('wtf');
  const redPanda = ['a','b','c','d','e','f'];
  const blueRaddish = [true,false,false,false,true,true];
  const redBlue =  _.zipObject(redPanda, blueRaddish);
  console.log(redBlue);
},function(reason){
  console.log("error");


});

})();





(() => {
  _.forEach(x, function(val,key){
    o.push(key);

});
})();

console.log(o);




export default class App extends React.Component{
  constructor(props){
    super(props);
    console.log(super(props))

      this.state = {
        things:things,
        whatWhats: whatWhats
      };
      console.log(this.state.things);
      console.log(this.state.whatWhats);
  }
  render() {
    return(

      <div>
        <h1> who dat </h1>
        <List things={this.state.things} />
        <List whatWhats={this.state.whatWhats} />
      </div>

    );
  }


}
