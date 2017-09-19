import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Link } from 'react-router-dom';
import Single from './optionType/Single'
import Multiple from './optionType/Multiple'

class Question_options extends Component {
  constructor(props){
		super(props);
		console.log(props, 'nkdins');
			this.state = ({
				email: '',
				password: '',
			});
	}


	handleInput(event){
		const value =  event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});
	}





	handleSubmit(e){
		this.props.login(this.state);
		
		e.preventDefault();
	}


	render() {
		return (
      <div className='panel panel-body'>
      {this.props.curQuestion.Q}
      <br/>
      <Multiple {...this.props} />
      <hr/>
    </div>
    );
	}
}


const mapStateToProps = (state) => {
	
	
};


export default (connect(
	mapStateToProps

)(Question_options));