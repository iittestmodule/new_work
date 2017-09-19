import React from 'react';
import SubjectInBar from './SubjectInBar';

const SideBarStatic = (props) => {
  return (
    <tbody>
      <tr>
        <td><label className='btn btn-success btn-sm btn-shape-ticked'>4</label></td>
        <td><label>Answered</label></td>
        <td><label className='btn btn-danger btn-sm btn-shape-unticked float-left'>0</label></td>
        <td><label>Not Answered</label></td>
      </tr>
      <tr>
        <td><button className='space-1 col-xs-1 text-center'>.</button></td>
        <td><label>Not Visited</label></td>
        <td><label className='btn btn-warning btn-sm btn-shape-round float-left'>0</label></td>
        <td><label>Marked for Review</label></td>
      </tr>
      <tr>
        <td>
          <label className='btn btn-warning btn-sm btn-shape-round float-left'>
            <span className='glyphicon glyphicon-ok'></span>
          </label>
        </td>
        <td><label>Answered & Marked for Review</label></td>
      </tr>
    </tbody>
 );
}

export default SideBarStatic;