import {
  RECEIVE_DECKS,
  ADD_DECK,
  ADD_CARD
} from '../actions'

import { data } from '../initialData'

function decks (state = {}, action) {
  switch(action.type) {
    case RECEIVE_DECKS:
      console.log('RECEIVE_DECKS', action)
      return {
        ...state, ...action.decks
      }
    case ADD_DECK:
      console.log('ADD_DECK', action)
      return {
        ...state, ...action.deck
      }
    case ADD_CARD:
      console.log('ADD_CARD', action)
      return {
        ...state,
        [action.card.title]: {
          title: action.card.title,
          questions: [
            ...state[action.card.title].questions,
            action.questions
          ]
        }
      }

    default:
      return state
  }
}

export default decks
