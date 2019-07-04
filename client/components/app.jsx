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

  render() {
    return (
      <React.Fragment>
        <Header />
        <GradeTable dataFromApp= {this.state.grades}/>
      </React.Fragment>

    );
  }
}

export default App;
