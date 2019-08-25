import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.deleteData = this.deleteData.bind(this);
  }
  componentDidMount() {
    fetch('/api/grades')
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ grades: myJson });
      })
      .catch(error => console.error('error: ', error));
  }

  updateData(data) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      }
      ).then(myJson => {
        this.setState({ grades: myJson });
      }
      )
      .catch(error => console.error('error: ', error));
  }
  deleteData(id) {
    fetch('/api/grades/' + id + '', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      }
      ).then(response => {
        this.updateData(response);
      })
      .catch(error => console.error('error: ', error));
  }

  getAverageGrade() {
    var studentsArray = this.state.grades;
    var sum = 0;
    for (var studentIndex = 0; studentIndex < studentsArray.length; studentIndex++) {
      var currentStudentGrade = this.state.grades[studentIndex].grade;
      sum += currentStudentGrade;
    }
    var average = Math.round(sum / studentsArray.length);
    return (
      Number.isNaN(average)
        ? 'No Data'
        : average
    );
  }

  render() {
    return (
      <React.Fragment>
        <Header gradeAverage= {this.getAverageGrade()}/>
        <div className="d-flex">
          <GradeTable dataFromApp={this.state.grades} deleteData = {this.deleteData} />
          <GradeForm dataUpdate={this.updateData}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
