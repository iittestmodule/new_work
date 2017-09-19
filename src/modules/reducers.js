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
    ticked: ''
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
    ticked : 'A'
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
    ticked : ''
  },
  2: {
    Q : 'A train moving with a uniform speed of 54 kmph. What is its speed in m/s',
    type : 'numerical',
    image : '',
    mark : 4,
    neg : 0,
    ans : '5',
    ticked : '5'
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
      const findIndex = state.subjects.findIndex(subject => (subject === action.subject));
      console.log(findIndex);
      return {
        ...state,
        currentSubject: state.subjects[findIndex],
        currentQuestions: state.questions[findIndex]
      }
    case 'CHANGE_QUESTION' : 
      console.log(action);
      //const findIndex = state.subjects.findIndex(subject => (subject === action.subject));
      //console.log(findIndex);

      return {
        ...state,
        curQuestionNo: action.num,
        selectedQuestion: state.currentQuestions[action.num], 
      }  
    default: return state;
  }
  return state;
}