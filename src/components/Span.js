import React from 'react';
import PropTypes from 'prop-types';

const Span = (props) => <span className={props.className}>{props.msg}</span>

Span.prototype = {
    className: PropTypes.string,
    msg: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ])
}
export default Span;
