import {
  QUIZ_START,
  QUESTION_ADD,
  QUESTION_ANSWERED_CORRECT,
  QUESTION_ANSWERED_INCORRECT,
  DECK_CREATE
} from '../actions'

function decks (state = {}, action) {
  switch(action.type) {
    case QUIZ_START:
      return state
    default:
      return state
  }
}

export default decks
