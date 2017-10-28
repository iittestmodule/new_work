export function next(currentPageNo) {
  return {
    type : "NEXT_PAGE",
    currentPageNo
  }
}

export function previous(currentPageNo) {
  return {
    type : "PREVIOUS_PAGE",
    currentPageNo
  }
}

export function answerTick(questionNo) {
  return {
    type : "TICK_ANSWER",
    questionNo
  }
}

export function answerUntick(id) {
  return {
    type : "UNTICK_ANSWER",
    id
  }
}

export function changeSubject(subject) {
  console.log(subject,'in action');
  return {
    type: 'CHANGE_SUBJECT',
    subject
  }
}

export function changeQuestion(num) {
  console.log(num,'in action');
  return {
    type: 'CHANGE_QUESTION',
    num
  }
}

export function SubmitResponse() {
  console.log('in action');
  return {
    type: 'SUBMIT_RESPONSE',
  }
}

export function MarkForReview(length, selectedQuestion, currentSubject, curQuestionNo) {
  console.log(selectedQuestion,currentSubject,curQuestionNo, 'inaction');
  return {
    type: 'MARK_FOR_REVIEW',
    length,
    selectedQuestion,
    currentSubject,
    curQuestionNo
  }
}

export function SaveAndNext(length, response,selectedQuestion, currentSubject, curQuestionNo) {
  console.log(response,selectedQuestion, currentSubject, curQuestionNo,'in action');
  return {
    type: 'SAVE_AND_NEXT',
    length,
    response,
    selectedQuestion,
    currentSubject,
    curQuestionNo
  
  }
}

export function clearResponse(selectedQuestion, currentSubject, curQuestionNo) {
  console.log(selectedQuestion, currentSubject, curQuestionNo,'in action');
  return {
    type: 'CLEAR_RESPONSE',
    selectedQuestion,
    currentSubject,
    curQuestionNo
  }
}