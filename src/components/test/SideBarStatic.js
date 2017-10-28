import React from 'react';
import SubjectInBar from './SubjectInBar';

const SideBarStatic = (props) => {
  return (
    <tbody>
      <tr>
        <td><button className='btn btn-success btn-sm btn-shape-ticked'>4</button></td>
        <td><label>Answered</label></td>
        <td><label className='btn btn-danger btn-sm btn-shape-unticked float-left'>0</label></td>
        <td><label>Not Answered</label></td>
      </tr>
      <tr>
        <td><button className='btn space-1 btn-sm'>2</button></td>
        <td><label>Not Visited</label></td>
        <td><button className='btn btn-sm btn-shape-round float-left'>3</button></td>
        <td><label>Marked for Review</label></td>
      </tr>
      <tr>
        <td>
          <label className='btn btn-sm btn-shape-round float-left'>
            <span className='glyphicon glyphicon-ok'></span>
          </label>
        </td>
        <td><label>Answered & Marked for Review</label></td>
      </tr>
    </tbody>
 );
}

export default SideBarStatic;