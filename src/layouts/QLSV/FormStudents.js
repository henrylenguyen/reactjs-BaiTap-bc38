import React, { Component } from "react";
import FormAddSV from "./FormAddSV";
import TableSV from "./TableSV";

class FormStudents extends Component {
  render() {
    return (
      <div className="sm:container mx-auto">
        <FormAddSV></FormAddSV>
        <TableSV></TableSV>
      </div>
    );
  }
}

export default FormStudents;
