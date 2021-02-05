import React from "react";
import TableBS from "react-bootstrap/Table";
import {format} from "date-fns";

export default function Table(props) {
  return (
    <TableBS striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th 
          onClick={props.handleSort}
        
          >Name
          </th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>

      <tbody>
        {props.rows.map((row, i) => (
          <tr key={i}>
            <td><img src= {row.picture.thumbnail}/></td>
            <td>{`${row.name.first} ${row.name.last}`}</td>
            <td>{row.phone}</td>
            <td>{row.email}</td>
            <td>{format(new Date(row.dob.date), "M/d/yyyy")}</td>
          </tr>
        ))}
      </tbody>
    </TableBS>
  );
}
