import React from 'react';
export default class List extends React.Component{
  render(){
    return(

    <tr>
      <td>
      {this.props.a}
      </td>
      <td>
      {this.props.thing}
      </td>
    </tr>

  );



}

}
