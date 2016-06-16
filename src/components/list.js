import _ from 'lodash';
import React from 'react';
import ListHead from './list-head';
import ListItems from './list-items';
import MoreItems from './more-items';

// console.log(this.props);

export default class List extends React.Component{

  renderItems(){
    console.log(this.props.things);
    return _.map(this.props.things, (thing, index) => <ListItems key={index} {...thing}/>),
    _.map(this.props.whatWhats, (what, index) => <MoreItems key={index} {...what}/>)

  };





  render(){
    // console.log(this.props.things);
    // console.log(this.props.whatWhats);
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
