import React, { use, useState } from 'react';
import './table.css'

const Table=({usersList})=>{
console.log(usersList)
    return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {usersList.length === 0 ? (
            <tr>
              <td colSpan="2" className="no-users">Add users first</td>
            </tr>
          ):(
            usersList.map((v, i) => (
              <tr key={i}>
                <td>{v.name}</td>
                <td>{v.age}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Table;