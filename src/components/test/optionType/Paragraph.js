import React, {Component} from 'react';


class Paragraph extends Component {
  constructor(props){
		super(props);
  }
  
  render(){
    return (<div className='row margin-left-5'>
      <form>
        <div class="radio">
          <label><input type="radio"  value='A' checked={this.props.optradio === 'A'} onChange = {this.props.handleInputSingle}/>10 m/s</label>
        </div>
        <div class="radio">
          <label><input type="radio"  value='B' checked={this.props.optradio === 'B'} onChange = {this.props.handleInputSingle}/>15 m/s</label>
        </div> 
        <div class="radio">
          <label><input type="radio"   value='C' checked={this.props.optradio === 'C'} onChange = {this.props.handleInputSingle}/>1.5 m/s</label>
        </div>
        <div class="radio">
          <label><input type="radio"   value='D' checked={this.props.optradio === 'D'} onChange = {this.props.handleInputSingle} />0.5 m/s</label>
        </div> 
      </form>
    </div>);
  }
}

export default Paragraph;