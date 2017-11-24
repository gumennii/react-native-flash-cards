import {
  ADD_DECK

} from '../actions'

import { data } from '../initialData'

function decks (state = data, action) {
  switch(action.type) {
    case ADD_DECK:
      return {
        ...state, ...action.deck
      }
    default:
      return state
  }
}

export default decks
