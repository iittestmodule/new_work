import React, {Component} from 'react';


class Multiple extends Component {
  constructor(props){
		super(props);
  }
  
  render(){
    return (<div className='row margin-left-5'>
    <form>
      <div class="checkbox">
        <label><input type="checkbox" name="optionA" value='A' checked={this.props.currentState.optionA} onChange = {this.props.handleInputMultiple}/>10 m/s</label>
      </div>
      <div class="checkbox">
        <label><input type="checkbox" name="optionB"  value='B' checked={this.props.currentState.optionB} onChange = {this.props.handleInputMultiple}/>15 m/s</label>
      </div> 
      <div class="checkbox">
        <label><input type="checkbox" name="optionC"  value='C' checked={this.props.currentState.optionC} onChange = {this.props.handleInputMultiple}/>1.5 m/s</label>
      </div>
      <div class="checkbox">
        <label><input type="checkbox" name="optionD"  value='D' checked={this.props.currentState.optionD} onChange = {this.props.handleInputMultiple} />0.5 m/s</label>
      </div>
	  </form>
    </div>);
  }
}

export default Multiple;