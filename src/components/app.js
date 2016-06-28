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

class whatsThat {
  constructor (star,candy,mountain,bag,toffee,mmm) {
    this.star = 'hola m8';
    this.candy = candy;
    this.mountain = mountain;
    this.whatsThis = (bag, toffee);
    // this.mmm = () => {console.log('oreo twinkie'); return false};
    this.mmm = mmm;
  }
    ghj () {
      console.log(this.star + this.candy);
    }

  whatsThis (bag,toffee){
    this.bag = 'bag'
    this.toffee = toffee
  }


}



class jjj extends whatsThat{
  tellMe(){
    super.ghj();
    console.log(this.star + this.candy + 'thx')


  }
}

const lll = new whatsThat({
  star: null,
  candy: 'beep',
  mountain: 'boop',
  // bag: 'bag',
  // toffee: 'toffee',
  whatsThis:
    ({
        bag: 'bag',
        toffee: 'toffee'
    }),

  mmm: 'hiii'
});


console.log(lll);




const holla = new jjj(null, 'im a goat');
(function(){
  Object.defineProperty(whatsThat, 'sumThingBlip',{
  value: 'idkwhat',
  writeable: true

  });
  const ex = (this.sumThingBlip);
  console.log(ex)
});
console.log(holla);
console.log(holla.star,holla.sumThingBlip);
// console.log(ex);



var now = () => {
  new Date().getFullYear();
  console.log(this);
  return false;
}
now();


Promise.resolve(now).then(function(cb){
  console.log(cb,Promise,now);
});

var promiseA = new Promise((resolve,reject) => {
resolve('i worked') || reject(new Error( 'i done goofed'));
this.then(value => console.log('success',value))
.catch(error => console.log('fail',error));
});

var promiseB = new Promise((resolve,reject) => {
resolve('i worked again') || reject(new Error( 'i done goofed the B time'));
this.then(value => console.log('successB',value))
.catch(error => console.log('failB',error));
});

var promiseC = new Promise((resolve,reject) => {
resolve('i worked againC') || reject(new Error( 'i done goofed the C time'));
this.then(value => console.log('successC',value))
.catch(error => console.log('failC',error));
});

Promise.all([promiseA,promiseB,promiseC])
  .then(function(results) {
        console.log(results);
  })
  .catch(function(err) {
  console.log(err);
  throw err;
  });

  var RT = [1,4,7,5,8,0];

  RT.reduceRight(function(a,b){
    console.log(a);
    console.log(b);
    return [(a + b, b - b, a + a - b)];
  });
  RT.map(rt => {
    _.forEach(RT, function(val, key){
      console.log(val + 'val',key + 'key', rt)
      return [val, key]
    })

  });

  console.log(RT);

// console.log(promise);


// var whoA = new iDFWY(null,'toffee a good time imo')
// whoA.whatsThis();

class iDFWY extends whatsThat {
  whatsThis (bag,toffee){
  super.whatsThis(bag,toffee);
  console.log(this.bag + this.toffee);
  }
}

const NNN = new iDFWY(null, 'who are am i they')

console.log(NNN);

class owlBark extends whatsThat{

}
// var whoA = new iDFWY(null,'toffee a good time imo')
// whoA.whatsThis();









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
