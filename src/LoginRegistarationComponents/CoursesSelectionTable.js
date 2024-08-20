import React from 'react'
import "./CourseSectionTable.css"
function CoursesSelectionTable({setDisplay}) {

  return (
    <table className={`table ${setDisplay}`}>
    <tr>
      <th>Action</th>
      <th>Course Name</th>
      <th>Fee</th>
    </tr>
    <tr>
      <td>
        <input type="checkbox" id="2" className="check-box" />
      </td>
      <td htmlFor="2">
        <b>MERN Stack</b>
      </td>
      <td>2900</td>
    </tr>
    <tr>
      <td>
        <input type="checkbox" id="3" className="check-box" />
      </td>
      <td htmlFor="3">
        <b>Front-end development</b>
      </td>
      <td>2900</td>
    </tr>
    <tr>
      <td>
        <input type="checkbox" id="5" className="check-box" />
      </td>
      <td htmlFor="5">
        <b>WordPress</b>
      </td>
      <td>2900</td>
    </tr>
  </table>
  
  )
}

export default CoursesSelectionTable