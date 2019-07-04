import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
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
        <GradeTable dataFromApp= {this.state.grades}/>
      </React.Fragment>

    );
  }
}

export default App;
