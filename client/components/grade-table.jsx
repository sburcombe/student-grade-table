import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {

  getStudentGrades() {
    return (
      this.props.dataFromApp.length > 0
        ? this.props.dataFromApp.map(grade =>
          <Grade key={grade.id} data={grade} />)
        : <tr><td> No grades recorded </td></tr>
    );
  }
  render() {
    return (
      <table className = "table table-dark">
        <thead>
          <tr>
            <th scope="row">Student Name</th>
            <th scope="row">Course</th>
            <th scope="row">Grade</th>
          </tr>
        </thead>
        <tbody>
          {this.getStudentGrades()}
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
