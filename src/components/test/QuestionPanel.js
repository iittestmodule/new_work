import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Link } from 'react-router-dom';
import Single from './optionType/Single';
import Multiple from './optionType/Multiple';
import Numerical from './optionType/Numerical';
import MatricMatching from './optionType/MatricMatching'


class Question_options extends Component {
  constructor(props){
		super(props);
	}

	render() {
		return (
      <div className='panel panel-body'>
        {this.props.curQuestion.Q}
          <br/>
          <hr/>
        { this.props.curQuestion.type === 'single' && 
          <Single optradio = {this.props.currentState.optradio} handleInputSingle = {this.props.handleInputSingle} />
        }
        { this.props.curQuestion.type === 'multiple' && 
          <Multiple currentState = {this.props.currentState} handleInputMultiple = {this.props.handleInputMultiple} />
        }
        { this.props.curQuestion.type === 'numerical' && 
          <Numerical Numerical = {this.props.currentState.Numerical} handleInputNumerical = {this.props.handleInputNumerical} />
        }
        { this.props.curQuestion.type === 'matrix' && 
          <MatricMatching currentState = {this.props.currentState} handleInputMatrix = {this.props.handleInputMatrix} />
        }
        { this.props.curQuestion.type === 'Paragraph' && 
          <Single optradio = {this.props.currentState.optradio} handleInputSingle = {this.props.handleInputSingle} />
        }
          <hr/>
      </div>
    );
	}
}




export default Question_options;