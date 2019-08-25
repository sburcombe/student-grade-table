import React from 'react';

class Grade extends React.Component {

  render(props) {
    return (
      <tr>
        <td >{this.props.data.name} </td>
        <td >{this.props.data.course}</td>
        <td >{this.props.data.grade}</td>
        <td>
          <form onSubmit={() => this.props.removal(this.props.data.id)}>
            <button type="submit" className="btn btn-danger" >Delete</button>
          </form>
        </td>
      </tr>
    );
  }
}

export default Grade;
