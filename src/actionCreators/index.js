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