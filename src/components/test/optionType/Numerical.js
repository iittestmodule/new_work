import React, {Component} from 'react';


class Single extends Component {
  constructor(props){
		super(props);
  }
  
  render(){
    return (<div className='row'>
      <div className="margin-left-15 top-space-10">
        <label> Numeric input : <input type="number" name="Numerical" value={this.props.Numerical} onChange = {this.props.handleInputNumerical}/></label>
      </div>
    </div>);
  }
}

export default Single;