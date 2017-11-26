import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'FlashCards:decks'

export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => JSON.parse(results))
}

export function saveDeckTitle({ key, entry }) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function addCardToDeck({ key, questions }) {
  return AsyncStorage.getItem(STORAGE_KEY, (err, result) => {
    let currentQuestions = JSON.parse(result)[key].questions
    let updatedQuestion = [...currentQuestions, ...questions]
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [key]: {
        questions: updatedQuestion
      }
    }))
  })
}
