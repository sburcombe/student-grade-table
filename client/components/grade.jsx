import React from 'react';

class Grade extends React.Component {

  render(props) {
    return (
      <tr>
        <td>{this.props.data.name} </td>
        <td>{this.props.data.course}</td>
        <td>{this.props.data.grade}</td>
      </tr>
    );
  }
}

export default Grade;
