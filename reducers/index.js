import {
  ADD_DECK,
  ADD_CARD
} from '../actions'

import { data } from '../initialData'

function decks (state = data, action) {
  switch(action.type) {
    case ADD_DECK:
      return {
        ...state, ...action.deck
      }
    case ADD_CARD:
      return {
        ...state,
        [action.card.title]: {
          title: action.card.title,
          questions: [
            ...state[action.card.title].questions,
            {
              question: action.card.question,
              answer: action.card.answer
            }
          ]
        }
      }

    default:
      return state
  }
}

export default decks
