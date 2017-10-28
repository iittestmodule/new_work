import React from 'react';
import SubjectInBar from './SubjectInBar';

const SideBarMain = (props) => {
  console.log(props, 'side bar main', props.currentQuestions);
  const from = 1;
  const to = Object.keys(props.currentQuestions).length;
  
  
  return (
    <div>
    <div className='btn-primary width-full text-center'>
        {props.currentSubject || 'Physics' }
    </div>
    <div className='panel panel-body text-center'>
        {buttons(from , to , props.selectedQindex, props.currentQuestions).map(button => button)}
    </div>
    </div>
 );
}

const buttons = (from, to , selectedQindex, currentQuestions) => {
  const buttons = [];
  for(var i=from; i<=to; i++) {
    const j = i;
    if(currentQuestions[i].ticked && currentQuestions[i].review){
      buttons.push(<button className='btn btn-sm space-1 btn-shape-round'  onClick = {() => selectedQindex(j)} ><span className="glyphicon glyphicon-ok"></span> {i}</button>);
    }else if(currentQuestions[i].ticked){
      buttons.push(<button className='btn btn-success btn-sm  space-1 btn-shape-ticked' onClick = {() => selectedQindex(j)} > {i} </button>);
    }else if(currentQuestions[i].review){
      buttons.push(<button className='btn btn-sm space-1 btn-shape-round' onClick = {() => selectedQindex(j)} > {i} </button>);
    }else if(currentQuestions[i].visited){
      buttons.push(<button className='btn btn-danger btn-sm space-1 btn-shape-unticked ' onClick = {() => selectedQindex(j)} > {i} </button>);
    }else {
      buttons.push(<button  class="btn btn-default space-1 btn-sm"  onClick = {() => selectedQindex(j)} > {i} </button>);
    }
  }

  return buttons;
}

export default SideBarMain;