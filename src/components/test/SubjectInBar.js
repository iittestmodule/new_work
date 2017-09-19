import React from 'react';
import Span from '../Span';
import PropTypes from 'prop-types';

const SubjectInBar = (props) => {
  return (
		<div className={`btn btn-${props.color} btn-sm`} onClick={() => props.changeSubject(props.subject)}>
		<Span msg={ props.subject} />
		</div>
	);
}

SubjectInBar.PropTypes = {
	color: PropTypes.string.isRequired,
	subject: PropTypes.string.isRequired
}

export default SubjectInBar;
