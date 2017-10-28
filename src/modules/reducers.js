const questions = [{
  1: {
    Q: 'A train moving with a uniform speed of 54 kmph. What is its speed in m/s',
    type: 'single',
    options: {
      A: '10m/s',
      B: '15m/s',
      C: '1.5m/s',
      D: '.5m/s'
    },
    image : '',
    mark : 3,
    neg : 1,
    ans : 'A',
    ticked: 'B',
    review: false,
    visited: true,
  },
  2: {
    Q : 'A train moving with a uniform speed of 54 kmph. What is its speed in m/s',
    type : 'multiple',
    options: {
      A: '10m/s',
      B: '15m/s',
      C: '1.5m/s',
      D: '2.5m/s'
    },
    image : '',
    mark : 4,
    neg : 1,
    ans : 'AC',
    ticked : 'ACD',
    review: false,
    visited: false,
  }
},

{
  1: {
    Q : 'A train moving with a uniform speed of 54 kmph. What is its speed in m/s',
    type : 'single',
    options: {
      A: '10m/s',
      B: '15m/s',
      C: '1.5m/s',
      D: '.5m/s'
    },
    image : '',
    mark : 3,
    neg : 1,
    ans : 'A',
    ticked : '',
    review: false,
    visited: false,
  },
  2: {
    Q : 'A train moving with a uniform speed of 54 kmph. What is its speed in m/s',
    type : 'numerical',
    image : '',
    mark : 4,
    neg : 0,
    ans : '5',
    ticked : '7',
    review: false,
    visited: false,

  }
}];
const subjects = ['physics', 'chemistry'];
const curQuestionNo = 1;
const defaultState = { 
  subjects,
  questions,
  currentSubject: subjects[0],
  currentQuestions: questions[0],
  curQuestionNo: curQuestionNo,
  selectedQuestion: questions[0][1] ,
  testName: 'Demo test',
  testDate: '',
  testDuration: '3hr',
  testStartTime: '3.00PM',
  user: {
    name: 'vinay',
    email: 'kumfuiit@gmail.com',
    schoolName: 'abc',
    class: '11th',
    image: '',
  }

};

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case 'CHANGE_SUBJECT' : 
      let findIndex = state.subjects.findIndex(subject => (subject === action.subject));
      console.log(findIndex);
      state.questions[findIndex][1].visited = true;
      return {
        ...state,
        currentSubject: state.subjects[findIndex],
        currentQuestions: state.questions[findIndex],
        curQuestionNo: 1,
        selectedQuestion: state.questions[findIndex][1] 

      }
    case 'CHANGE_QUESTION' : 
      console.log(action);
      state.currentQuestions[action.num].visited = true;
      return {
        ...state,
        curQuestionNo: action.num,
        selectedQuestion: state.currentQuestions[action.num],
      }  
    case 'MARK_FOR_REVIEW':
    console.log(action, 'in reducer');
    findIndex = state.subjects.findIndex(subject => (subject === action.currentSubject));
    action.selectedQuestion.review = !action.selectedQuestion.review;
    action.selectedQuestion.visited = true;
    let currentQuestions = state.questions[findIndex];
    currentQuestions[action.curQuestionNo] = action.selectedQuestion;
    console.log(currentQuestions, ' currQ');
    let questions = state.questions;
    questions[findIndex] = currentQuestions;
    if(action.length > action.curQuestionNo){
      return {
        ...state,
        selectedQuestion: state.currentQuestions[curQuestionNo + 1],
        questions: questions,
        currentQuestions: currentQuestions,
        curQuestionNo: curQuestionNo + 1,
      }
    }else{
      return {
        ...state,
        selectedQuestion: action.selectedQuestion,
        questions: questions,
        currentQuestions: currentQuestions,
      }
    } 
    case 'SAVE_AND_NEXT':
    console.log(action, 'in reducer');
    findIndex = state.subjects.findIndex(subject => (subject === action.currentSubject));
    action.selectedQuestion.ticked = action.response;
    action.selectedQuestion.visited = true;
    currentQuestions = state.questions[findIndex];
    currentQuestions[action.curQuestionNo] = action.selectedQuestion;
    questions = state.questions;
    questions[findIndex] = currentQuestions;
    if(action.length >action.curQuestionNo){
      return {
        ...state,
        selectedQuestion: state.currentQuestions[curQuestionNo + 1],
        questions: questions,
        currentQuestions: currentQuestions,
        curQuestionNo: curQuestionNo + 1,
      }
    }else{
      return {
        ...state,
        selectedQuestion: action.selectedQuestion,
        questions: questions,
        currentQuestions: currentQuestions,
      }
    }
    case 'CLEAR_RESPONSE':
    findIndex = state.subjects.findIndex(subject => (subject === action.currentSubject));
    action.selectedQuestion.ticked = '';
    action.selectedQuestion.review = false;
    action.selectedQuestion.visited = true;
    currentQuestions = state.questions[findIndex];
    currentQuestions[action.curQuestionNo] = action.selectedQuestion;
    questions = state.questions;
    questions[findIndex] = currentQuestions;
    return {
      ...state,
      selectedQuestion: action.selectedQuestion,
      questions: questions,
      currentQuestions: currentQuestions,
    }
    case 'SUBMIT_RESPONSE':
    return {
      ...state
    }
    default: return state;
  }
  return state;
}