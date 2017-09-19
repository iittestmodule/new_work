import React from 'react';
import SubjectInBar from './SubjectInBar';

const SideBarMain = (props) => {
  console.log(props);
  const from = 1;
  const to = Object.keys(props.currentQuestions).length;
  
  
  return (
    <div>
    <div className='btn-primary width-full text-center'>
        {props.currentSubject || 'Physics' }
    </div>
    <div className='panel panel-body text-center'>
        {buttons(from , to , props.selectedQindex).map(button => button)}
    </div>
    </div>
 );
}

const buttons = (from, to , selectedQindex) => {
  const buttons = [];
  for(var i=from; i<=to; i++) {
    const j = i;
    buttons.push(<button className='space-1 col-xs-1 text-center' onClick = {() => selectedQindex(j)} > {i} </button>);
  }
  return buttons;
}

export default SideBarMain;