import React from 'react';
import SubjectInBar from './SubjectInBar';

const QuestionBar = (props) => {
  return (
    <div style={ { 'backgroundColor' :'#4eaefe', color: 'white' } } className='space-top-bottom-5 span panel-heading'>
    <span className='float-left margin-left-5'>Q.{props.curQuestionNo }</span>
    <span className='float-left margin-left-15'>Type- {props.curQuestion.type}</span>
    <span className='float-right margin-right-5'>MARKS: +{props.curQuestion.mark }, -{props.curQuestion.neg }</span>
  </div>
  );
}

export default QuestionBar;