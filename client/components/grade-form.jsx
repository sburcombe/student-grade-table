import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  handleCourseChange(event) {
    this.setState({
      course: event.target.value
    });
  }
  handleGradeChange(event) {
    this.setState({
      grade: event.target.value
    });
  }

  handleSubmit() {
    var name = this.state.name;
    var course = this.state.course;
    var grade = parseInt(this.state.grade);
    var newGrade = {
      name,
      course,
      grade
    };
    return this.props.dataUpdate(newGrade);
  }

  handleReset() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-sm-4 ml-auto form-container">
          <form onSubmit={this.handleSubmit} onReset={this.handleReset}>

            <div className="form-group d-flex mr-5">
              <i className="fa fa-user fa-2x "></i>
              <div className="col-sm-12 pl-2">
                <input type="name" className="form-control-sm col-sm-12" id="colFormLabelSm"
                  placeholder="Name" autoComplete="off" onChange={this.handleNameChange}></input>
              </div>
            </div>
            <div className="form-group d-flex mr-5">
              <i className="fa fa-list-alt fa-2x"></i>
              <div className="col-sm-12 pl-2">
                <input type="course" className="form-control-sm col-sm-12" id="colFormLabelSm"
                  placeholder="Course" autoComplete="off" onChange={this.handleCourseChange}></input>
              </div>
            </div>
            <div className="form-group d-flex mr-5 ">
              <i className="fa fa-graduation-cap fa-2x"></i>
              <div className="col-sm-12 pl-1">
                <input type="grade" className="form-control-sm col-sm-12" id="colFormLabelSm"
                  placeholder="Grade" autoComplete="off" onChange={this.handleGradeChange}></input>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-outline-dark btn-sm p-2 m-1">Add</button>
              <button type="reset" className="btn btn-outline-dark btn-sm p-2 m-1 mr-3">Cancel</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default GradeForm;
