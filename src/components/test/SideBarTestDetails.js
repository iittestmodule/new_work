import React from 'react';
import SubjectInBar from './SubjectInBar';

const SideBarTestDetails = (props) => {
  return (
    <div className='span3'>
    <div className='display-inline-block text-center'>
      <img src='/student.png' className='img-responsive border display-inline-block' height='50' width='50'/>
      <span className='display-inline-block float-right left-space-10'><b>Time Left : </b><span color={props.color || 'red' }>02:00</span></span>
    </div>
    <div className='display-inline-block'>
      
    </div>
   </div>
 );
}

export default SideBarTestDetails;