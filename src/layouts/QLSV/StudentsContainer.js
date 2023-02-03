import React, { Component } from "react";
import FormAddUpdateStudents from "./FormAddUpdateStudents";
import TableSV from "./TableListStudents";

class StudentsContainer extends Component {
  render() {
    return (
      <div className="sm:container mx-auto">
        <FormAddUpdateStudents></FormAddUpdateStudents>
        <TableSV></TableSV>
      </div>
    );
  }
}

export default StudentsContainer;
