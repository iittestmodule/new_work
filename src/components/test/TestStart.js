import React, { Component } from 'react';
import { connect } from 'react-redux';
import Span from './../Span';
import SubjectsBar from './SubjectsBar';
import QuestionBar from './QuestionBar';
import QuestionPanel from './QuestionPanel';
import SideBarTestDetails from './SideBarTestDetails';
import SideBarMain from './SideBarMain';
import SideBarStatic from './SideBarStatic';
import { changeSubject, changeQuestion } from '../../actionCreators'

class TestStart extends Component {
  constructor(props){
    super(props);
    console.log(this.props.details.currentQuestions[1]);
			this.state = ({

			});
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
          <QuestionPanel curQuestion= {this.props.details.selectedQuestion} />
        
        </div>
      </div>
      <div className='col-lg-3 well height-500'>
        <SideBarTestDetails {...this.props} />
        <div className='space-top-bottom-5'>
          <SideBarMain currentQuestions = {this.props.details.currentQuestions} selectedQindex = {this.props.selectedQindex} currentSubject = {this.props.details.currentSubject}/>
          <div className='panel panel-body font-size-75-per'>
            <tabel>
              <SideBarStatic {...this.props} />
            </tabel>
          </div>
        </div>
      </div>
      <div className='col-sm-9'>
        <div className='btn btn-info float-left margin-right-5'>
          clear response
        </div>
        <div className='btn btn-info float-left margin-left-5'>
          mark for review & next
        </div>
        <div className='btn btn-info float-right'>
          save & next
        </div>
      </div>
      <div className='btn btn-info float-right'>
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
    }
  }
};


export default (connect(
	mapStateToProps,
  mapDispatchToProps
)(TestStart));


