import React, {Component} from 'react';


class Single extends Component {
  constructor(props){
		super(props);
        console.log('this is contact');
		};
  handleInput(e){
    console.log(e);
  }
  render(){
    return (<div className='row'>

      <div class="radio">
        <label><input type="radio" name="optradio" value='A' checked = {this.handleInput.bind(this)}/>10 m/s</label>
      </div>
      <div class="radio">
        <label><input type="radio" name="optradio"  value='B' checked = {this.handleInput.bind(this)}/>15 m/s</label>
      </div> 
      <div class="radio">
        <label><input type="radio" name="optradio"  value='C' checked = {this.handleInput.bind(this)}/>1.5 m/s</label>
      </div>
      <div class="radio">
        <label><input type="radio" name="optradio"  value='D' checked = {this.handleInput.bind(this)} />0.5 m/s</label>
      </div>	
    
    </div>);
  }
}

export default Single;