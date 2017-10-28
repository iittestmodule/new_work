import React, { Component } from 'react';
import { connect } from 'react-redux';
import Span from './../Span';
import SubjectsBar from './SubjectsBar';
import QuestionBar from './QuestionBar';
import QuestionPanel from './QuestionPanel';
import SideBarTestDetails from './SideBarTestDetails';
import SideBarMain from './SideBarMain';
import SideBarStatic from './SideBarStatic';
import { changeSubject, changeQuestion, SubmitResponse ,MarkForReview, SaveAndNext, clearResponse} from '../../actionCreators'

class TestStart extends Component {
  constructor(props){
    super(props);
    console.log(this.props.details.selectedQuestion, 'test');
    const y = Object.assign({}, initialState); 
    this.state = y;
    this.baseState = Object.assign({}, initialState); 
    this.clearState = this.clearState.bind(this); 
  }
  componentDidMount(props){
    this.setState ({optradio: this.props.details.selectedQuestion.ticked})
  }
  componentWillReceiveProps(nextProps){
    this.clearState();
    let nextState = Object.assign({}, initialState);
    //let nextState = initialState;
    console.log(this.state,'start');
    console.log(nextState,'next props');
    console.log(initialState, 'initialState');
  
    if(nextProps.details.selectedQuestion.type === 'numerical'){
      this.setState({Numerical: nextProps.details.selectedQuestion.ticked})
    }

    if(nextProps.details.selectedQuestion.type === 'single' || nextProps.details.selectedQuestion.type === 'paragraph'){
      this.setState({optradio: nextProps.details.selectedQuestion.ticked})
    }

    if(nextProps.details.selectedQuestion.type === 'multiple'){
      let arr = [] ;
      let ans = nextProps.details.selectedQuestion.ticked;
      //alert(s);
      arr = ans.split('');
      //alert(arr[1]=== 'C');
      
      if(arr[0]){
        if(arr[0] === 'A'){
          nextState.optionA = arr[0];
        }
        else if(arr[0] === 'B'){
          nextState.optionB = arr[0];
        }
        else if(arr[0] === 'C'){
          nextState.optionC = arr[0];
        }
        else if(arr[0] === 'D'){
          nextState.optionD = arr[0];
        }
        if(arr[1]){
          if(arr[1] === 'B'){
            nextState.optionB = arr[1];
          }
          else if(arr[1] === 'C'){
            nextState.optionC = arr[1];
          }
          else if(arr[1] === 'D'){
            nextState.optionD = arr[1];
          }
          if(arr[2]){
            if(arr[2] === 'C'){
              nextState.optionC = arr[2];
            }
            else if(arr[2] === 'D'){
              nextState.optionD = arr[2];
            }
            if(arr[3]){
              nextState.optionD = arr[3];
            }
          }
        }
      }
      
      //const nextState = initialState;
      console.log(initialState, 'njuocas');
      console.log(nextState, 'njuocas');
      this.setState(nextState);
      console.log(this.state, this.baseState,'njuocas-----');

    }
    if(nextProps.details.selectedQuestion.type === 'matrix'){
      let arr = [] ;
      let ans = nextProps.details.selectedQuestion.ticked;
      arr = ans.split('');
      console.log(arr);
      if(arr.length){
        nextState.optionAP = arr[0];
        nextState.optionAQ = arr[1];
        nextState.optionAR = arr[2];
        nextState.optionAS = arr[3];
        nextState.optionBP = arr[5];
        nextState.optionBQ = arr[6];
        nextState.optionBR = arr[7];
        nextState.optionBS = arr[8];
        nextState.optionCP = arr[10];
        nextState.optionCQ = arr[11];
        nextState.optionCR = arr[12];
        nextState.optionCS = arr[13];
        nextState.optionDP = arr[15];
        nextState.optionDQ = arr[16];
        nextState.optionDR = arr[17];
        nextState.optionDS = arr[18];
      }
      this.setState(nextState);
    }
  }
  
  clearState(){
    this.setState(initialState);
  }
  handleInputNumerical(event){
    console.log(event);
		 this.setState({
		 	Numerical: event.target.value
		});
	}

  handleInputSingle(event){
    console.log(event.target.value);
    const value =  event.target.value;
    this.setState({
      optradio: value
    });
  }


	handleInputMultiple(event){
    console.log(event.target);
    const value =  event.target.value;
    const name = event.target.name;

    if(this.state.optionA=== value || this.state.optionB === value || this.state.optionC === value || this.state.optionD === value){
      this.setState({
        [name]: ''
      });
    }else{
      this.setState({
        [name]: value
      });
    }
  }


  handleInputMatrix(event){
    const value =  event.target.value;
    const name = event.target.name;
    console.log(value);
    if(name === 'optionAP' ||name === 'optionAQ' || name === 'optionAR' || name === 'optionAS'){
      if(this.state.optionAP === value
      ||this.state.optionAQ === value
      ||this.state.optionAR === value
      ||this.state.optionAS === value){
        this.setState({
          [name]: 'X'
        });
      }else{
        this.setState({
          [name]: value  
        })
      }
    }
    if(name === 'optionBP' ||name === 'optionBQ' || name === 'optionBR' || name === 'optionBS'){
      if(this.state.optionBP === value
      ||this.state.optionBQ === value
      ||this.state.optionBR === value
      ||this.state.optionBS === value){
        this.setState({
          [name]: 'X'
        });
      }else{
        this.setState({
          [name]: value  
        })
      }
    }
    if(name === 'optionCP' ||name === 'optionCQ' || name === 'optionCR' || name === 'optionCS'){
      if(this.state.optionCP === value
      ||this.state.optionCQ === value
      ||this.state.optionCR === value
      ||this.state.optionCS === value){
        this.setState({
          [name]: 'X'
        });
      }else{
        this.setState({
          [name]: value  
        })
      }
    }
    if(name === 'optionDP' ||name === 'optionDQ' || name === 'optionDR' || name === 'optionDS'){
      if(this.state.optionDP === value
      ||this.state.optionDQ === value
      ||this.state.optionDR === value
      ||this.state.optionDS === value){
        this.setState({
          [name]: 'X'
        });
      }else{
        this.setState({
          [name]: value  
        })
      }
    }
  }

  handleClearResponse(e){
    this.setState(initialState);
    this.props.clearResponse(this.props.details.selectedQuestion,this.props.details.currentSubject,this.props.details.curQuestionNo);
  }

  handleMarkForReviwNext(e){
    console.log('mark');
    const length = Object.keys(this.props.details.currentQuestions).length;
    this.props.MarkForReview(length,this.props.details.selectedQuestion,this.props.details.currentSubject,this.props.details.curQuestionNo);

  }
  handleSaveNext(e){
    console.log('save');
    let response = '';
    if(this.props.details.selectedQuestion.type === 'single'){
      response = response + this.state.optradio;
    }
    if(this.props.details.selectedQuestion.type === 'multiple'){
      response = response + this.state.optionA + this.state.optionB + this.state.optionC + this.state.optionD;
    }
    if(this.props.details.selectedQuestion.type === 'numerical'){
      response = this.state.Numerical;
    }
    if(this.props.details.selectedQuestion.type === 'matrix'){
      response = response + this.state.optionAP +  this.state.optionAQ +  this.state.optionAR +  this.state.optionAS + '-' ;
      response = response + this.state.optionBP +  this.state.optionBQ +  this.state.optionBR +  this.state.optionBS + '-' ;
      response = response + this.state.optionCP +  this.state.optionCQ +  this.state.optionCR +  this.state.optionCS + '-' ;
      response = response + this.state.optionDP +  this.state.optionDQ +  this.state.optionDR +  this.state.optionDS;
    }
    if(this.props.details.selectedQuestion.type === 'paragraph'){
      response = response + this.state.optradio;
    }
    console.log(this.state);
    console.log(response);
    const length = Object.keys(this.props.details.currentQuestions).length;
    this.props.SaveAndNext(length, response,this.props.details.selectedQuestion,this.props.details.currentSubject,this.props.details.curQuestionNo);

  }

	handleSubmit(e){
		SubmitResponse(this.state);
		
		e.preventDefault();
  }
  
  render() {
    console.log('*****************', this.props.details);
    return (<div className='panel panel-default'>
    <div className='panel-heading text-center'>
      {this.props.testName || 'Demo test start'}
    </div>
    <div className='panel panel-body'>
      <div className='col-lg-9 well height-500'>
        <SubjectsBar subjects={this.props.subjects}  changeSubject={this.props.changeSubject}/>
        <div className='row margin-top'>
          <QuestionBar curQuestion= {this.props.details.selectedQuestion} curQuestionNo = {this.props.details.curQuestionNo}/>
          <QuestionPanel curQuestion= {this.props.details.selectedQuestion}
            handleInputMultiple = {this.handleInputMultiple.bind(this)}
            handleInputSingle = {this.handleInputSingle.bind(this)}
            Numerical = {this.state.Numerical}
            currentState = {this.state}
            handleInputNumerical = {this.handleInputNumerical.bind(this)}
            handleInputMatrix = {this.handleInputMatrix.bind(this)}
          />
        
        </div>
      </div>
      <div className='col-lg-3 well height-500'>
        <SideBarTestDetails {...this.props} />
        <div className='space-top-bottom-5'>
          <SideBarMain currentQuestions = {this.props.details.currentQuestions}
            selectedQindex = {this.props.selectedQindex}
            currentSubject = {this.props.details.currentSubject}
            />
          <div className='panel panel-body font-size-75-per'>
            <tabel>
              <SideBarStatic {...this.props} />
            </tabel>
          </div>
        </div>
      </div>
      <div className='col-sm-9'>
        <div className='btn btn-info float-left margin-right-5' onClick = {this.handleClearResponse.bind(this)} >
          clear response
        </div>
        <div className='btn btn-info float-left margin-left-5'  onClick = {this.handleMarkForReviwNext.bind(this)} >
          mark for review & next
        </div>
        <div className='btn btn-info float-right'  onClick = {this.handleSaveNext.bind(this)} >
          save & next
        </div>
      </div>
      <div className='btn btn-info float-right'  onClick = {this.handleSubmit.bind(this)} >
        Submit
      </div>
    </div>
  </div>);
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'state');
  return {
    details: state.reducers,
    subjects: state.reducers.subjects,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSubject: (e) => {
      dispatch(changeSubject(e));
    },
    selectedQindex: (e) => {
      dispatch(changeQuestion(e));
    },
    SubmitResponse: (e) => {
      dispatch(SubmitResponse());
    },
    MarkForReview: (length, selectedQuestion, currentSubject, curQuestionNo) => {
      dispatch(MarkForReview(length, selectedQuestion, currentSubject,curQuestionNo ));
    },
    SaveAndNext: (length, response,selectedQuestion, currentSubject, curQuestionNo) => {
      dispatch(SaveAndNext(length, response,selectedQuestion, currentSubject, curQuestionNo));
    },
    clearResponse: (selectedQuestion, currentSubject, curQuestionNo) => {
      dispatch(clearResponse(selectedQuestion, currentSubject,curQuestionNo ));
    },
  }
};


export default (connect(
	mapStateToProps,
  mapDispatchToProps
)(TestStart));

const initialState = {
  Numerical: '',
  optionA: '',
  optionB: '',
  optionC: '',
  optionD: '',
  optradio: '',
  optionAP: 'X',
  optionAQ: 'X',
  optionAR: 'X',
  optionAS: 'X',
  optionBP: 'X',
  optionBQ: 'X',
  optionBR: 'X',
  optionBS: 'X',
  optionCP: 'X',
  optionCQ: 'X',
  optionCR: 'X',
  optionCS: 'X',
  optionDP: 'X',
  optionDQ: 'X',
  optionDR: 'X',
  optionDS: 'X',
}