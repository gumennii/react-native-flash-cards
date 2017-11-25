export const QUIZ_START = 'QUIZ_START'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export const QUESTION_ANSWERED_CORRECT = 'QUESTION_ANSWERED_CORRECT'
export const QUESTION_ANSWERED_INCORRECT = 'QUESTION_ANSWERED_INCORRECT'


export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function addCard (card) {
  return {
    type: ADD_CARD,
    card
  }
}
