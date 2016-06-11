import _ from 'lodash';
import React from 'react';
import ListHead from './list-head';
import ListItems from './list-items';
export default class List extends React.Component{

  renderItems(){
    return _.map(this.props.things, (thing, index) => <ListItems key={index} {...thing}/>);

  }





  render(){
    console.log(this.props.things);
    return(


  <table>
  <ListHead/>
  <tr>
  {this.renderItems()}
  </tr>
  </table>


  );
  }

}
