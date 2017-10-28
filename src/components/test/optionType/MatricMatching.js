import React, {Component} from 'react';


class MatricMatching extends Component {
  constructor(props){
		super(props);
  }
 
  render(){
    return (<div className='row margin-left-5'>
    <form>
      <div className='row margin-left-15'>
        <span>P </span><span>Q </span><span>R </span><span>S</span>
      </div>
      <div class="checkbox-inline">
        <label>{'A '}<input type="checkbox" name="optionAP" value='P' checked={this.props.currentState.optionAP !== 'X'} onChange = {this.props.handleInputMatrix}/></label>
        <label><input type="checkbox" name="optionAQ" value='Q' checked={this.props.currentState.optionAQ !== 'X'} onChange = {this.props.handleInputMatrix}/></label>
        <label><input type="checkbox" name="optionAR" value='R' checked={this.props.currentState.optionAR !== 'X'} onChange = {this.props.handleInputMatrix}/></label>
        <label><input type="checkbox" name="optionAS" value='S' checked={this.props.currentState.optionAS !== 'X'} onChange = {this.props.handleInputMatrix}/></label>
      </div>
      <div class="checkbox-inline">
        <label>{'B '}<input type="checkbox" name="optionBP" value='P' checked={this.props.currentState.optionBP !== 'X'} onChange = {this.props.handleInputMatrix}/></label>
        <label><input type="checkbox" name="optionBQ" value='Q' checked={this.props.currentState.optionBQ !== 'X'} onChange = {this.props.handleInputMatrix}/></label>
        <label><input type="checkbox" name="optionBR" value='R' checked={this.props.currentState.optionBR !== 'X'} onChange = {this.props.handleInputMatrix}/></label>
        <label><input type="checkbox" name="optionBS" value='S' checked={this.props.currentState.optionBS !== 'X'} onChange = {this.props.handleInputMatrix}/></label>
      </div> 
      <div class="checkbox-inline">
        <label>{'C '}<input type="checkbox" name="optionCP" value='P' checked={this.props.currentState.optionCP !== 'X'} onChange = {this.props.handleInputMatrix}/></label>
        <label><input type="checkbox" name="optionCQ" value='Q' checked={this.props.currentState.optionCQ !== 'X'} onChange = {this.props.handleInputMatrix}/></label>
        <label><input type="checkbox" name="optionCR" value='R' checked={this.props.currentState.optionCR !== 'X'} onChange = {this.props.handleInputMatrix}/></label>
        <label><input type="checkbox" name="optionCS" value='S' checked={this.props.currentState.optionCS !== 'X'} onChange = {this.props.handleInputMatrix}/></label>
      </div>
      <div class="checkbox-inline">
        <label>{'D '}<input type="checkbox" name="optionDP" value='P' checked={this.props.currentState.optionDP !== 'X'} onChange = {this.props.handleInputMatrix}/></label>
        <label><input type="checkbox" name="optionDQ" value='Q' checked={this.props.currentState.optionDQ !== 'X'} onChange = {this.props.handleInputMatrix}/></label>
        <label><input type="checkbox" name="optionDR" value='R' checked={this.props.currentState.optionDR !== 'X'} onChange = {this.props.handleInputMatrix}/></label>
        <label><input type="checkbox" name="optionDS" value='S' checked={this.props.currentState.optionDS !== 'X'} onChange = {this.props.handleInputMatrix} /></label>
      </div>
	  </form>
    </div>);
  }
}

export default MatricMatching;