import React, {Component} from 'react';


class Multiple extends Component {
  constructor(props){
		super(props);
        console.log('this is contact');
		};
  handleInput(e){
    console.log(e);
  }
  render(){
    return (<div className='row'>

      <div class="checkbox">
        <label><input type="checkbox" name="optradio" value='A' onChange = {this.handleInput.bind(this)}/>10 m/s</label>
      </div>
      <div class="checkbox">
        <label><input type="checkbox" name="optradio"  value='B' onChange = {this.handleInput.bind(this)}/>15 m/s</label>
      </div> 
      <div class="radio">
        <label><input type="checkbox" name="optradio"  value='C' onChange = {this.handleInput.bind(this)}/>1.5 m/s</label>
      </div>
      <div class="checkbox">
        <label><input type="checkbox" name="optradio"  value='D' onChange = {this.handleInput.bind(this)} />0.5 m/s</label>
      </div>
      <div class="checkbox">
      <input type="checkbox" checked={this.props.inStockOnly} />
          {' '}
          Only show products in stock
          </div>	
    
    </div>);
  }
}

export default Multiple;