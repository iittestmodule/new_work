import React from 'react';
import SubjectInBar from './SubjectInBar';

const SubjectBar = (props) => {
  return (<div className='row'>
		{props.subjects.map((subject, index) => {
			switch(index) {
        case 0: return <SubjectInBar key={index} color='primary' subject={subject} changeSubject={ props.changeSubject }/>;
        case 1: return <SubjectInBar key={index} color='info' subject={subject} changeSubject={ props.changeSubject }/>;
        case 2: return <SubjectInBar key={index} color='success' subject={subject} changeSubject={ props.changeSubject }/>;
			}
		})}
	</div>);
}

export default SubjectBar;
