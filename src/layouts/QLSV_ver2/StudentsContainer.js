import React from "react";
import FormAddUpdateStudents from "./FormAddUpdateStudents";
import TableSV from "./TableListStudents";

function StudentsContainerAPI() {
    return (
      <div className="sm:container mx-auto">
        <FormAddUpdateStudents></FormAddUpdateStudents>
        <TableSV></TableSV>
      </div>
    );
}
export default StudentsContainerAPI;
