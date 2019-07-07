import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="d-flex">
          <h2 className="p-2">Student Grade Table</h2>
          <h2 className= "p-2 ml-auto mr-5">Average Grade
            <span className="badge badge-secondary">{this.props.gradeAverage}</span>
          </h2>
        </div>

      </React.Fragment>

    );
  }
}

export default Header;
